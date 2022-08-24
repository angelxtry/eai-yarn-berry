import { useTranslation } from '@/locale/i18n';
import { AuthContainer } from '@/containers/auth.container';

export const LogoutButton = () => {
  const { t } = useTranslation();
  const { logout } = AuthContainer();
  return (
    <button className='text-sm' type='button' onClick={logout}>
      {t('Common.menu.logout')}
    </button>
  );
};
