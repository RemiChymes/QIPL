import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const useRedirectIfAuthenticated = (redirectPath: string = '/dashboard') => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate(redirectPath);
    }
  }, [currentUser, navigate, redirectPath]);
};