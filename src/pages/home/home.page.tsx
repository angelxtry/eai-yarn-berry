import { useTranslation } from '@/locale/i18n';
import { DefaultLayout } from '@/components/layout/default-layout';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <DefaultLayout.PageHeader>{t('Home.title')}</DefaultLayout.PageHeader>
    </DefaultLayout>
  );
};
