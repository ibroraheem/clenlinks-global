import React, { createContext, useContext, useState, useEffect } from 'react';
<<<<<<< HEAD
import { supabase, BlogPost } from '../config/supabase';
=======
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
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
<<<<<<< HEAD
  addPost: (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updatePost: (id: string, post: Partial<BlogPost>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  getPost: (slug: string) => Promise<BlogPost | null>;
=======
  addPost: (post: Omit<BlogPost, 'id' | 'date'>, imageFile?: File) => Promise<void>;
  updatePost: (id: string, post: Partial<BlogPost>, imageFile?: File) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  getPostBySlug: (slug: string) => BlogPost | undefined;
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

<<<<<<< HEAD
export function BlogProvider({ children }: { children: React.ReactNode }) {
=======
export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
<<<<<<< HEAD
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const addPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .insert([{ ...post, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }]);

      if (error) throw error;
      await fetchPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
=======
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
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
      throw err;
    }
  };

<<<<<<< HEAD
  const updatePost = async (id: string, post: Partial<BlogPost>) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ ...post, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      await fetchPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
=======
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
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
      throw err;
    }
  };

  const deletePost = async (id: string) => {
    try {
<<<<<<< HEAD
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
=======
      await deleteDoc(doc(db, 'posts', id));
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    } catch (err) {
      setError('Failed to delete post');
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
      throw err;
    }
  };

<<<<<<< HEAD
  const getPost = async (slug: string): Promise<BlogPost | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    }
  };

  return (
    <BlogContext.Provider value={{ posts, loading, error, addPost, updatePost, deletePost, getPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
=======
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
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
<<<<<<< HEAD
} 
=======
}; 
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
