import './App.css';

import { Router } from '@app/providers';
import { AuthProvider } from '@/shared/providers/Auth/AuthProvider';

export function App() {

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
};
