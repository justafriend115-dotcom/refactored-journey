import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../data/translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  t: typeof translations.en;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedLang && ['en', 'es'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
    
    if (savedDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const value = {
    language,
    setLanguage,
    darkMode,
    toggleDarkMode,
    t: translations[language],
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
