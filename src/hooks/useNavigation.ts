import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const useNavigation = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleNavigation = (path: string, requiresAuth: boolean = false) => {
    if (requiresAuth && !currentUser) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return { handleNavigation };
};