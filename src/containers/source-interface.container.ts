import { useState } from 'react';

import { Constants } from '@/constants';
import {
  SortDirection,
  SourceInterface,
  SourceInterfaceSort,
  SourceInterfaceSortFields,
  useCreateSourceInterfaceMutation,
  useSourceInterfaceListQuery,
  useSourceInterfaceQuery,
  useUpdateSourceInterfaceMutation,
} from '@/generated/graphql';
import { NodesFetchProps } from '@/types';
import { graphQLClient } from '@/utils/graphql-client';

export const SourceInterfaceContainer = ({
  id,
  limit = Constants.defaultPageSize,
  enableList = true,
}: NodesFetchProps<SourceInterfaceSort> & { enableList?: boolean }) => {
  const [offset, setOffset] = useState(0);
  const {
    data: sourceInterfaces,
    isLoading: isSourcesInterfaceLoading,
    refetch: refetchSourceInterfaces,
  } = useSourceInterfaceListQuery(
    graphQLClient,
    {
      paging: { limit, offset },
      sorting: [{ field: SourceInterfaceSortFields.Id, direction: SortDirection.Asc }],
    },
    { enabled: enableList },
  );

  const {
    data: sourceInterface,
    isLoading: isSourceInterfaceLoading,
    refetch: refetchSourceInterface,
  } = useSourceInterfaceQuery(
    graphQLClient,
    { payload: id as number },
    { enabled: !!id },
  );

  const { mutateAsync: createSourceInterfaceMutateAsync } =
    useCreateSourceInterfaceMutation(graphQLClient, {
      onSuccess: () => {
        refetchSourceInterfaces();
      },
    });
  const createSourceInterface = (sourceInterfaceInput: SourceInterface) => {
    const sourceInterfaceData = {
      ...sourceInterfaceInput,
      sourceSystemId: sourceInterfaceInput.sourceSystemId,
    };
    createSourceInterfaceMutateAsync({
      payload: { sourceInterface: sourceInterfaceData },
    });
  };

  const { mutateAsync: updateSourceInterfaceMutateAsync } =
    useUpdateSourceInterfaceMutation(graphQLClient, {
      onSuccess: () => {
        refetchSourceInterfaces();
      },
    });
  const updateSourceInterface = (
    sourceInterfaceId: number,
    sourceInterfaceInput: SourceInterface,
  ) => {
    const sourceInterfaceData = {
      ...sourceInterfaceInput,
      sourceSystemId: sourceInterfaceInput.sourceSystemId,
    };
    updateSourceInterfaceMutateAsync({
      payload: { id: sourceInterfaceId, update: sourceInterfaceData },
    });
  };

  return {
    sourceInterfaceList: {
      data: sourceInterfaces?.sourceInterfaces,
      isLoading: isSourcesInterfaceLoading,
      setOffset,
      refetch: refetchSourceInterfaces,
    },
    sourceInterface: {
      data: sourceInterface?.sourceInterface,
      isLoading: isSourceInterfaceLoading,
      refetch: refetchSourceInterface,
    },
    createSourceInterface,
    updateSourceInterface,
  };
};
