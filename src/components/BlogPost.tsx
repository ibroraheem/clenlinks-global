<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogService } from '../services/blogService';
import { BlogPost as BlogPostType } from '../types/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const data = await blogService.getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-700">{error || 'Blog post not found'}</p>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
              ← Back to Blog
            </Link>
          </div>
        </div>
=======
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { useBlog } from '../context/BlogContext';

// Blog post type definition
interface BlogPost {
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

// Sample blog posts data (same as in Blog.tsx)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Universities in Canada for International Students',
    excerpt: 'Discover the best Canadian universities that offer excellent programs and support for international students.',
    content: `
      <h2>Introduction</h2>
      <p>Canada has become one of the most popular destinations for international students, offering world-class education and a welcoming environment. In this article, we'll explore the top 10 universities in Canada that provide excellent opportunities for international students.</p>

      <h2>1. University of Toronto</h2>
      <p>Consistently ranked as Canada's top university, the University of Toronto offers a diverse range of programs and strong support services for international students. The university's three campuses provide different learning environments to suit various preferences.</p>

      <h2>2. University of British Columbia</h2>
      <p>Located in beautiful Vancouver, UBC is known for its research excellence and global perspective. The university offers numerous scholarships specifically for international students.</p>

      <h2>3. McGill University</h2>
      <p>Based in Montreal, McGill University is renowned for its medical programs and research opportunities. The bilingual environment provides a unique cultural experience.</p>

      <h2>Conclusion</h2>
      <p>Choosing the right university is crucial for your academic journey. Consider factors such as program offerings, location, cost, and support services when making your decision.</p>
    `,
    author: 'John Doe',
    date: '2024-03-20',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    category: 'Study Abroad',
    slug: 'top-10-universities-canada'
  },
  // ... other blog posts
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug } = useBlog();
  const post = getPostBySlug(slug || '');

  if (!post) {
    return (
      <div className="pt-20 pb-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen pt-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 space-x-4">
            <time dateTime={post.created_at}>
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.category && (
              <>
                <span>•</span>
                <span className="text-blue-600">{post.category}</span>
              </>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-8">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">
              ← Back to Blog
            </Link>
            <time className="text-sm text-gray-500">
              Last updated: {new Date(post.updated_at).toLocaleDateString()}
            </time>
          </div>
        </footer>
      </article>
    </div>
  );
} 
=======
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t">
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
