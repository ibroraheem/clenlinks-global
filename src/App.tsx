import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import TeamMembers from './components/TeamMembers';
import WhatsAppChat from './components/WhatsAppChat';
import Footer from './components/Footer';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import BlogAdmin from './components/admin/BlogAdmin';
import BlogEditor from './components/admin/BlogEditor';
import ResetPassword from './components/admin/ResetPassword';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './context/BlogContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <div className="min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <main className="pt-16">
                  <Hero />
                  <Services />
                  <Stats />
                  <TeamMembers />
                  <Testimonials />
                </main>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/reset-password" element={<ResetPassword />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blog"
                element={
                  <ProtectedRoute requireAdmin>
                    <BlogAdmin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blog/new"
                element={
                  <ProtectedRoute requireAdmin>
                    <BlogEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blog/edit/:id"
                element={
                  <ProtectedRoute requireAdmin>
                    <BlogEditor />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <WhatsAppChat />
            <Footer />
            <Toaster position="top-right" />
          </div>
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;