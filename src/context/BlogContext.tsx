import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  addPost: (post: Omit<BlogPost, 'id' | 'date'>, imageFile?: File) => Promise<void>;
  updatePost: (id: string, post: Partial<BlogPost>, imageFile?: File) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  getPostBySlug: (slug: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsQuery = query(collection(db, 'posts'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(postsQuery);
        const fetchedPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as BlogPost[];
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const uploadImage = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `blog-images/${Date.now()}-${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const addPost = async (post: Omit<BlogPost, 'id' | 'date'>, imageFile?: File) => {
    try {
      let imageUrl = post.image;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const newPost = {
        ...post,
        date: Timestamp.now().toISOString(),
      };

      const docRef = await addDoc(collection(db, 'posts'), newPost);
      setPosts(prevPosts => [...prevPosts, { ...newPost, id: docRef.id }]);
    } catch (err) {
      setError('Failed to add post');
      throw err;
    }
  };

  const updatePost = async (id: string, post: Partial<BlogPost>, imageFile?: File) => {
    try {
      let imageUrl = post.image;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const postRef = doc(db, 'posts', id);
      const updatedPost = {
        ...post,
        image: imageUrl,
        date: Timestamp.now().toISOString(),
      };

      await updateDoc(postRef, updatedPost);
      setPosts(prevPosts =>
        prevPosts.map(p => (p.id === id ? { ...p, ...updatedPost } : p))
      );
    } catch (err) {
      setError('Failed to update post');
      throw err;
    }
  };

  const deletePost = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    } catch (err) {
      setError('Failed to delete post');
      throw err;
    }
  };

  const getPostBySlug = (slug: string) => {
    return posts.find(post => post.slug === slug);
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        loading,
        error,
        addPost,
        updatePost,
        deletePost,
        getPostBySlug,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}; 