'use client';

import { useEffect } from 'react';
import { configureAmplify } from '../lib/amplify';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    configureAmplify();
  }, []);

  return children;
}
