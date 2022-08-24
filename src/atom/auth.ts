import { atom } from 'recoil';

import { GlobalEnv } from '@/config';
import { User } from '@/generated/graphql';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: boolean) =>
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue)),
    );
  };

export const userAtom = atom<User | undefined>({
  key: 'user',
  default: undefined,
});

export const tokenAtom = atom<string | undefined>({
  key: 'token',
  default: undefined,
  effects: [localStorageEffect(GlobalEnv.TOKEN_KEY)],
});
