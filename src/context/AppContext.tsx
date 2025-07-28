import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  balance: number;
  stakedTokens: number;
  country: string;
  phone: string;
}

interface AppState {
  user: User;
  selectedLanguage: string;
  theme: 'dark' | 'light';
  notifications: boolean;
}

interface AppContextType {
  state: AppState;
  updateUser: (updates: Partial<User>) => void;
  setLanguage: (language: string) => void;
  toggleTheme: () => void;
  toggleNotifications: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    user: {
      name: 'Rashad Mammadov',
      balance: 15420.50,
      stakedTokens: 8500,
      country: 'Azerbaijan',
      phone: '+994 55 552 57 47'
    },
    selectedLanguage: 'en',
    theme: 'dark',
    notifications: true
  });

  const updateUser = (updates: Partial<User>) => {
    setState(prev => ({
      ...prev,
      user: { ...prev.user, ...updates }
    }));
  };

  const setLanguage = (language: string) => {
    setState(prev => ({ ...prev, selectedLanguage: language }));
  };

  const toggleTheme = () => {
    setState(prev => ({ 
      ...prev, 
      theme: prev.theme === 'dark' ? 'light' : 'dark' 
    }));
  };

  const toggleNotifications = () => {
    setState(prev => ({ ...prev, notifications: !prev.notifications }));
  };

  return (
    <AppContext.Provider value={{
      state,
      updateUser,
      setLanguage,
      toggleTheme,
      toggleNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};