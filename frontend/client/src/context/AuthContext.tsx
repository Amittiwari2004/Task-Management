import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';
import API from '../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Effect to load user from localStorage on mount
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        
        // Set the token in API headers for future requests
        API.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
      
      setLoading(false);
    };
    
    initAuth();
  }, []);

  const login = (user: User, token: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    // Set the token in API headers for future requests
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Remove the token from API headers
    delete API.defaults.headers.common['Authorization'];
    
    setToken(null);
    setUser(null);
  };

  // Function to check if the user is authenticated
  const checkAuth = async (): Promise<boolean> => {
    const storedToken = localStorage.getItem('token');
    
    if (!storedToken) {
      logout();
      return false;
    }
    
    try {
      // Optional: You can make a request to verify the token is still valid
      // For example: await API.get('/auth/verify');
      return true;
    } catch (error) {
      console.error('Auth verification failed:', error);
      logout();
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};