// src/components/SessionProviderWrapper.tsx
import { SessionProvider } from 'next-auth/react';

const SessionProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('SessionProviderWrapper rendered');
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default SessionProviderWrapper;
