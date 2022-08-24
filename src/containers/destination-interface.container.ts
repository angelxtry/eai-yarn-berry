import { useState } from 'react';

import { Constants } from '@/constants';
import {
  CreateDestinationInterfaceInput,
  DestinationInterfaceSort,
  DestinationInterfaceSortFields,
  SortDirection,
  useCreateDestinationInterfaceMutation,
  useDestinationInterfaceListQuery,
  useDestinationInterfaceQuery,
  useUpdateDestinationInterfaceMutation,
} from '@/generated/graphql';
import { IDestinationInterfaceForm, NodesFetchProps } from '@/types';
import { graphQLClient } from '@/utils/graphql-client';
import { MutationHelper } from '@/utils/mutation-helper';

export const DestinationInterfaceContainer = ({
  id,
  limit = Constants.defaultPageSize,
  enableList = true,
}: NodesFetchProps<DestinationInterfaceSort> & { enableList?: boolean }) => {
  const [offset, setOffset] = useState(0);
  const {
    data: destinationInterfaces,
    isLoading: isDestinationsInterfaceLoading,
    refetch: refetchDestinationInterfaces,
  } = useDestinationInterfaceListQuery(
    graphQLClient,
    {
      paging: { limit, offset },
      sorting: [
        { field: DestinationInterfaceSortFields.Id, direction: SortDirection.Asc },
      ],
    },
    { enabled: enableList },
  );

  const {
    data: destinationInterface,
    isLoading: isDestinationInterfaceLoading,
    refetch: refetchDestinationInterface,
  } = useDestinationInterfaceQuery(
    graphQLClient,
    { payload: id as number },
    { enabled: !!id },
  );

  const { create: createDestinationInterface, update: updateDestinationInterface } =
    MutationHelper({
      createMutationFn: useCreateDestinationInterfaceMutation,
      updateMutationFn: useUpdateDestinationInterfaceMutation,
      onSuccess: refetchDestinationInterfaces,
    });

  const onSubmit = (formData: IDestinationInterfaceForm) => {
    const submitData: CreateDestinationInterfaceInput = {
      header: formData.header,
      interfaceName: formData.interfaceName,
      memo: formData.memo,
      method: formData.method,
      optionData: formData.optionData,
      payload: formData.payload,
      resultKey: formData.resultKey,
      destinationSystemId: formData.destinationSystemOption!.value,
      sql: formData.sql,
      uri: formData.uri,
    } as CreateDestinationInterfaceInput;

    if (formData.id) {
      updateDestinationInterface?.({ payload: { id: formData.id, update: submitData } });
    } else {
      createDestinationInterface?.({ payload: { destinationInterface: submitData } });
    }
  };

  return {
    destinationInterfaceList: {
      data: destinationInterfaces?.destinationInterfaces,
      isLoading: isDestinationsInterfaceLoading,
      setOffset,
      refetch: refetchDestinationInterfaces,
    },
    destinationInterface: {
      data: destinationInterface?.destinationInterface,
      isLoading: isDestinationInterfaceLoading,
      refetch: refetchDestinationInterface,
    },
    onSubmit,
  };
};
