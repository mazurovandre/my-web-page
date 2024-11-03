import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enTranslation from './en.json';
import ruTranslation from './ru.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  }
};

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: localStorage.getItem('lang') || 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
  });

export default i18n;
