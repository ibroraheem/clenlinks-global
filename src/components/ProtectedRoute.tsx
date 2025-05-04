import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
=======
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
<<<<<<< HEAD
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
=======
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
      </div>
    );
  }

  if (!user) {
<<<<<<< HEAD
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
} 
=======
    return <Navigate to="/admin/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
