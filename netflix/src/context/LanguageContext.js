import React, { createContext, useContext } from 'react';
import useLanguagetext from '../hooks/useLanguageText';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const languageData = useLanguagetext();
  return <LanguageContext.Provider value={{ languageData }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
