import { useState } from 'react';

import { Constants } from '@/constants';
import {
  DestinationSystem,
  DestinationSystemFilter,
  DestinationSystemSort,
  DestinationSystemSortFields,
  SortDirection,
  SystemType,
  useCreateDestinationMutation,
  useDestinationListQuery,
  useDestinationQuery,
  useUpdateDestinationMutation,
} from '@/generated/graphql';
import { NodesFetchProps } from '@/types';
import { graphQLClient } from '@/utils/graphql-client';

export const DestinationSystemContainer = ({
  id,
  limit = Constants.defaultPageSize,
  filter,
  enableList = true,
}: NodesFetchProps<DestinationSystemSort, DestinationSystemFilter> & {
  enableList?: boolean;
}) => {
  const [offset, setOffset] = useState(0);

  const {
    data: destinations,
    isLoading: isDestinationsLoading,
    refetch: refetchDestinations,
  } = useDestinationListQuery(
    graphQLClient,
    {
      paging: { limit, offset },
      sorting: [
        {
          field: DestinationSystemSortFields.Id,
          direction: SortDirection.Asc,
        },
      ],
      filter: filter || {},
    },
    {
      enabled: enableList,
    },
  );

  const {
    data: destination,
    isLoading: isDestinationLoading,
    refetch: refetchDestination,
  } = useDestinationQuery(graphQLClient, { payload: id! }, { enabled: !!id });

  const { mutateAsync: createDestinationMutateAsync } = useCreateDestinationMutation(
    graphQLClient,
    {
      onSuccess: () => {
        refetchDestinations();
      },
    },
  );
  const createDestinationSystem = (DestinationSystemInput: DestinationSystem) =>
    createDestinationMutateAsync({
      payload: { destinationSystem: DestinationSystemInput },
    });

  const { mutateAsync: updateDestinationMutateAsync } = useUpdateDestinationMutation(
    graphQLClient,
    {
      onSuccess: () => {
        refetchDestinations();
      },
    },
  );
  const updateDestinationSystem = (
    destinationSystemId: number,
    destinationSystem: DestinationSystem,
  ) => {
    updateDestinationMutateAsync({
      payload: { id: destinationSystemId, update: destinationSystem },
    });
  };

  const destinationSystemOptionList = destinations?.destinationSystems.nodes.map(
    (system) => ({
      value: system.id,
      label: system.systemName,
    }),
  );

  const systemTypeOptions = Object.values(SystemType).map((value) => ({
    label: value,
    value,
  }));

  return {
    destinationSystemList: {
      data: destinations?.destinationSystems,
      isLoading: isDestinationsLoading,
      refetch: refetchDestinations,
      setOffset,
    },
    destinationSystem: {
      data: destination?.destinationSystem,
      isLoading: isDestinationLoading,
      refetch: refetchDestination,
    },
    createDestinationSystem,
    updateDestinationSystem,
    destinationSystemOptionList,
    systemTypeOptions,
  };
};
