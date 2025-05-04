<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, User } from '../config/supabase';
=======
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../config/firebase';
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60

interface AuthContextType {
  user: User | null;
  loading: boolean;
<<<<<<< HEAD
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
=======
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

<<<<<<< HEAD
export function AuthProvider({ children }: { children: React.ReactNode }) {
=======
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email!,
          role: 'admin' // You might want to fetch this from your database
        });
      }
      setLoading(false);
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email!,
          role: 'admin'
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
=======
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
<<<<<<< HEAD
} 
=======
}; 
>>>>>>> a8596c64a14df697252167c875cbf49e841c1b60
