import 'react-i18next';

import { LocaleType } from '@/locale/resources/types/locale.type';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      common: LocaleType;
    };
  }
}
