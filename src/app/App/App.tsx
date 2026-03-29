import './App.css';

import { Router, Mantine } from '@app/providers';
import { AuthProvider } from '@/shared/providers/Auth/AuthProvider';

export function App() {

  return (
    <Mantine>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Mantine>
  )
};
