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
<<<<<<< HEAD
import BlogPostPage from './components/BlogPost';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import BlogAdmin from './components/admin/BlogAdmin';
import BlogEditor from './components/admin/BlogEditor';
import ResetPassword from './components/admin/ResetPassword';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
=======
import BlogPost from './components/BlogPost';
import BlogAdmin from './components/admin/BlogAdmin';
import Login from './components/admin/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { BlogProvider } from './context/BlogContext';
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60

function App() {
  return (
    <AuthProvider>
<<<<<<< HEAD
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
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/reset-password" element={<ResetPassword />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/blog"
              element={
                <PrivateRoute>
                  <BlogAdmin />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/blog/new"
              element={
                <PrivateRoute>
                  <BlogEditor />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/blog/edit/:id"
              element={
                <PrivateRoute>
                  <BlogEditor />
                </PrivateRoute>
              }
            />
          </Routes>
          <WhatsAppChat />
          <Footer />
        </div>
      </Router>
=======
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
              <Route 
                path="/admin/blog" 
                element={
                  <ProtectedRoute>
                    <BlogAdmin />
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
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
    </AuthProvider>
  );
}

export default App;