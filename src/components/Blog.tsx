import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
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

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Universities in Canada for International Students',
    excerpt: 'Discover the best Canadian universities that offer excellent programs and support for international students.',
    content: 'Full content here...',
    author: 'John Doe',
    date: '2024-03-20',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    category: 'Study Abroad',
    slug: 'top-10-universities-canada'
  },
  {
    id: '2',
    title: 'Essential Documents for Student Visa Application',
    excerpt: 'A comprehensive guide to the documents you need to prepare for your student visa application.',
    content: 'Full content here...',
    author: 'Jane Smith',
    date: '2024-03-18',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/5905708/pexels-photo-5905708.jpeg',
    category: 'Visa Guide',
    slug: 'student-visa-documents'
  },
  {
    id: '3',
    title: 'How to Choose the Right Study Abroad Program',
    excerpt: 'Learn the key factors to consider when selecting a study abroad program that matches your goals.',
    content: 'Full content here...',
    author: 'Mike Johnson',
    date: '2024-03-15',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    category: 'Study Abroad',
    slug: 'choosing-study-abroad-program'
  }
];

const Blog = () => {
  const { posts } = useBlog();

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and guides for international education and travel
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 