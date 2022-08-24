import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { tokenAtom } from '@/atom/auth';
import { RoutePath } from '@/router/paths';
import { WithChildrenJSX } from '@/types';

interface ProtectedRouteProps {
  redirectPath?: string;
}
export const ProtectedRoute = ({
  redirectPath = RoutePath.login,
  children,
}: WithChildrenJSX<ProtectedRouteProps>) => {
  const token = useRecoilValue(tokenAtom);
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
