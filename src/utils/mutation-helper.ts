import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { UseMutationOptions } from 'react-query';
import { UseMutationResult } from 'react-query/types/react/types';

import { graphQLClient } from '@/utils/graphql-client';

type MutationFunction<TData, TVariables> = <
  TError extends unknown,
  TContext extends unknown,
>(
  client: GraphQLClient,
  options?: UseMutationOptions<TData, TError, TVariables, TContext>,
  headers?: RequestInit['headers'],
) => UseMutationResult<TData, TError, TVariables, TContext>;

export interface MutationHelperProps<
  TCreateData,
  TCreateVariables,
  TUpdateData,
  TUpdateVariables,
  TDeleteData,
  TDeleteVariables,
> {
  createMutationFn?: MutationFunction<TCreateData, TCreateVariables>;
  updateMutationFn?: MutationFunction<TUpdateData, TUpdateVariables>;
  deleteMutationFn?: MutationFunction<TDeleteData, TDeleteVariables>;
  onSuccess?: () => void;
}

type MutationHelperType = <
  TCreateData,
  TCreateVariables,
  TUpdateData,
  TUpdateVariables,
  TDeleteData,
  TDeleteVariables,
>(
  props: MutationHelperProps<
    TCreateData,
    TCreateVariables,
    TUpdateData,
    TUpdateVariables,
    TDeleteData,
    TDeleteVariables
  >,
) => {
  create: ((payload: TCreateVariables) => Promise<TCreateData>) | undefined;
  update: ((payload: TUpdateVariables) => Promise<TUpdateData>) | undefined;
  delete: ((payload: TDeleteVariables) => Promise<TDeleteData>) | undefined;
};

/**
 * React-query 에 자주 사용되는 Create, Update, Delete 패턴을 생성하는 펑션
 *
 * @constructor
 */
export const MutationHelper: MutationHelperType = <
  TCreateData,
  TCreateVariables,
  TUpdateData,
  TUpdateVariables,
  TDeleteData,
  TDeleteVariables,
>({
  createMutationFn,
  updateMutationFn,
  deleteMutationFn,
  onSuccess,
}: MutationHelperProps<
  TCreateData,
  TCreateVariables,
  TUpdateData,
  TUpdateVariables,
  TDeleteData,
  TDeleteVariables
>) => {
  const { mutateAsync } = createMutationFn?.(graphQLClient, { onSuccess }) || {
    mutateAsync: undefined,
  };
  const { mutateAsync: updateMutateAsync } = updateMutationFn?.(graphQLClient, {
    onSuccess,
  }) || { mutateAsync: undefined };

  const { mutateAsync: deleteMutateAsync } = deleteMutationFn?.(graphQLClient, {
    onSuccess,
  }) || { mutateAsync: undefined };
  return {
    create: mutateAsync ? (payload: TCreateVariables) => mutateAsync(payload) : undefined,
    update: updateMutateAsync
      ? (payload: TUpdateVariables) => updateMutateAsync(payload)
      : undefined,
    delete: deleteMutateAsync
      ? (payload: TDeleteVariables) => deleteMutateAsync(payload)
      : undefined,
  };
};
