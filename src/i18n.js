import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import pl from './translations/pl.json';

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
    },
  });

export default i18n;
