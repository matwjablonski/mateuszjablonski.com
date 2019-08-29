import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import pl from './translations/pl.json';
import en from './translations/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pl: {
        translation: pl,
      },
      en: {
        translation: en,
      },
    },
  });

export default i18n;
