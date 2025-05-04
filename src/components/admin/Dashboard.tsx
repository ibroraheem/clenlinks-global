import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Management Card */}
            <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Blog Management</h2>
              <p className="text-gray-600 mb-4">
                Create, edit, and manage your blog posts. Control what gets published and when.
              </p>
              <Link
                to="/admin/blog"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Manage Blog Posts
              </Link>
            </div>

            {/* Profile Card */}
            <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
              <div className="text-gray-600 mb-4">
                <p>Email: {user?.email}</p>
                <p>Last Sign In: {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'N/A'}</p>
              </div>
              <button
                onClick={() => {/* TODO: Implement profile update */}}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Update Profile
              </button>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
              <div className="text-gray-600 mb-4">
                <p>Total Posts: {/* TODO: Add post count */}0</p>
                <p>Published Posts: {/* TODO: Add published post count */}0</p>
                <p>Draft Posts: {/* TODO: Add draft count */}0</p>
              </div>
              <Link
                to="/admin/blog/new"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Create New Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 