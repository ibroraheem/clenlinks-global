import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { BlogPost } from '../types/blog';
import { toast } from 'react-hot-toast';

interface BlogContextType {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  createPost: (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updatePost: (id: string, post: Partial<BlogPost>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  publishPost: (id: string) => Promise<void>;
  unpublishPost: (id: string) => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    } catch (err: any) {
      setError(err.message);
      toast.error('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([post])
        .select()
        .single();

      if (error) throw error;
      setPosts((prev) => [data, ...prev]);
      toast.success('Post created successfully');
    } catch (err: any) {
      toast.error(err.message || 'Failed to create post');
      throw err;
    }
  };

  const updatePost = async (id: string, post: Partial<BlogPost>) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(post)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setPosts((prev) => prev.map((p) => (p.id === id ? data : p)));
      toast.success('Post updated successfully');
    } catch (err: any) {
      toast.error(err.message || 'Failed to update post');
      throw err;
    }
  };

  const deletePost = async (id: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast.success('Post deleted successfully');
    } catch (err: any) {
      toast.error(err.message || 'Failed to delete post');
      throw err;
    }
  };

  const publishPost = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({ published: true })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setPosts((prev) => prev.map((p) => (p.id === id ? data : p)));
      toast.success('Post published successfully');
    } catch (err: any) {
      toast.error(err.message || 'Failed to publish post');
      throw err;
    }
  };

  const unpublishPost = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({ published: false })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setPosts((prev) => prev.map((p) => (p.id === id ? data : p)));
      toast.success('Post unpublished successfully');
    } catch (err: any) {
      toast.error(err.message || 'Failed to unpublish post');
      throw err;
    }
  };

  const value = {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    publishPost,
    unpublishPost,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
