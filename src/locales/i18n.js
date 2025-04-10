import i18next from 'i18next'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationVI from './translations/vi.json';
import translationEN from './translations/en.json';

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI }
};

i18next.use(initReactI18next).use(LanguageDetector).init({
  lng: 'vi',
  fallfallbackLng: 'en',
  debug: true,
  resources
});
