// context/RouteContext.tsx
'use client';

import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

interface RouteContextType {
  prevRoute: string | null;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);

interface RouteProviderProps {
  children: ReactNode;
}

export const RouteProvider = ({ children }: RouteProviderProps) => {
  const [prevRoute, setPrevRoute] = useState<string | null>(null);
  const pathname = usePathname();
  const currentPath = useRef<string | null>(null);

  useEffect(() => {
    // Update prevRoute to the last path stored in currentPath
    if (currentPath.current !== pathname) {
      setPrevRoute(currentPath.current);
      currentPath.current = pathname;
    }
  }, [pathname]);

  return (
    <RouteContext.Provider value={{ prevRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const usePreviousRoute = (): RouteContextType => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('usePreviousRoute must be used within a RouteProvider');
  }
  return context;
};
