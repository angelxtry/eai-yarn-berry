import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { tokenAtom, userAtom } from '@/atom/auth';
import { LoginInput, useLoginMutation, useMeQuery } from '@/generated/graphql';
import { RoutePath } from '@/router/paths';
import { graphQLClient } from '@/utils/graphql-client';

export const AuthContainer = () => {
  const navigate = useNavigate();

  const [token, setToken] = useRecoilState(tokenAtom);
  const setUser = useSetRecoilState(userAtom);

  graphQLClient.setHeader('authorization', `bearer ${token}`);

  const { data: me, refetch: refetchMe } = useMeQuery(
    graphQLClient,
    {},
    {
      enabled: !!token,
      onSuccess: (res) => {
        setUser(res.me);
      },
    },
  );

  const { mutateAsync: loginMutate } = useLoginMutation(graphQLClient);

  const login = ({ formData }: { formData: LoginInput }) => {
    loginMutate({ payload: formData })
      .then((res) => {
        setToken(res.login.token);
      })
      .then(() => refetchMe())
      .then(() => {
        navigate(RoutePath.home);
      });
  };

  const logout = () => {
    setToken(undefined);
    setUser(undefined);
  };

  useEffect(() => {
    if (token) {
      refetchMe();
    }
  }, []);

  return { login, me, logout };
};
