import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import { ko } from '@/locale/resources';

const resources = {
  ko: {
    translation: ko,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'ko',
});

export { i18next, useTranslation };
