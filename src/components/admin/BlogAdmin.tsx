import React, { useState } from 'react';
import { useBlog } from '../../context/BlogContext';
import { BlogPost } from '../../types/blog';
import { toast } from 'react-hot-toast';
import { supabase } from '../../config/supabase';

const BlogAdmin = () => {
  const { posts, loading, error, createPost, updatePost, deletePost, publishPost, unpublishPost } = useBlog();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    featured_image: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage.from('images').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let imageUrl = formData.featured_image;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      if (editingPost) {
        await updatePost(editingPost.id, {
          ...formData,
          featured_image: imageUrl,
        });
        toast.success('Post updated successfully');
      } else {
        await createPost({
          ...formData,
          featured_image: imageUrl,
          slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
          published: false,
        });
        toast.success('Post created successfully');
      }

      setIsModalOpen(false);
      setEditingPost(null);
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        category: '',
        featured_image: '',
      });
      setImageFile(null);
    } catch (error: any) {
      toast.error(error.message || 'Failed to save post');
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || '',
      category: post.category || '',
      featured_image: post.featured_image || '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        toast.success('Post deleted successfully');
      } catch (error: any) {
        toast.error(error.message || 'Failed to delete post');
      }
    }
  };

  const handlePublish = async (id: string) => {
    try {
      await publishPost(id);
      toast.success('Post published successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to publish post');
    }
  };

  const handleUnpublish = async (id: string) => {
    try {
      await unpublishPost(id);
      toast.success('Post unpublished successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to unpublish post');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <button
          onClick={() => {
            setEditingPost(null);
            setFormData({
              title: '',
              content: '',
              excerpt: '',
              category: '',
              featured_image: '',
            });
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          New Post
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 mb-4">No blog posts available.</p>
          <button
            onClick={() => {
              setEditingPost(null);
              setFormData({
                title: '',
                content: '',
                excerpt: '',
                category: '',
                featured_image: '',
              });
              setIsModalOpen(true);
            }}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Create your first post
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt || post.content.substring(0, 150)}...
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span>{post.category || 'Uncategorized'}</span>
                    <span>•</span>
                    <span
                      className={`${
                        post.published ? 'text-green-600' : 'text-yellow-600'
                      }`}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4 ml-4">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  {post.published ? (
                    <button
                      onClick={() => handleUnpublish(post.id)}
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      Unpublish
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePublish(post.id)}
                      className="text-green-600 hover:text-green-800"
                    >
                      Publish
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">
              {editingPost ? 'Edit Post' : 'New Post'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Excerpt
                  </label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) =>
                      setFormData({ ...formData, excerpt: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={10}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Featured Image URL
                  </label>
                  <input
                    type="text"
                    value={formData.featured_image}
                    onChange={(e) =>
                      setFormData({ ...formData, featured_image: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAdmin;
