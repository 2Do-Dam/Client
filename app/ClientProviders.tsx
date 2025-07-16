'use client';

import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { GlobalStylesProvider } from '@/components/ui/GlobalStylesProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStylesProvider />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
