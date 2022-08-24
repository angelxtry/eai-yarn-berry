import { useState } from 'react';

import { Constants } from '@/constants';
import {
  SortDirection,
  SourceSystem,
  SourceSystemFilter,
  SourceSystemSort,
  SourceSystemSortFields,
  useCreateSourceMutation,
  useSourceListQuery,
  useSourceQuery,
  useUpdateSourceMutation,
} from '@/generated/graphql';
import { NodesFetchProps } from '@/types';
import { graphQLClient } from '@/utils/graphql-client';

export const SourceSystemContainer = ({
  id,
  limit = Constants.defaultPageSize,
  filter,
}: NodesFetchProps<SourceSystemSort, SourceSystemFilter>) => {
  const [offset, setOffset] = useState(0);

  const {
    data: sources,
    isLoading: isSourcesLoading,
    refetch: refetchSources,
  } = useSourceListQuery(
    graphQLClient,
    {
      paging: { limit, offset },
      sorting: [
        {
          field: SourceSystemSortFields.Id,
          direction: SortDirection.Asc,
        },
      ],
      filter: filter || {},
    },
    {
      // TODO enabled option 변경
      enabled: !!limit,
    },
  );

  const {
    data: source,
    isLoading: isSourceLoading,
    refetch: refetchSource,
  } = useSourceQuery(graphQLClient, { payload: id! }, { enabled: !!id });

  const { mutateAsync: createSourceMutateAsync } = useCreateSourceMutation(
    graphQLClient,
    {
      onSuccess: () => {
        refetchSources();
      },
    },
  );
  const createSourceSystem = (sourceSystemInput: SourceSystem) =>
    createSourceMutateAsync({ payload: { sourceSystem: sourceSystemInput } });

  const { mutateAsync: updateSourceMutateAsync } = useUpdateSourceMutation(
    graphQLClient,
    {
      onSuccess: () => {
        refetchSources();
      },
    },
  );
  const updateSourceSystem = (sourceSystemId: number, sourceSystem: SourceSystem) =>
    updateSourceMutateAsync({ payload: { id: sourceSystemId, update: sourceSystem } });

  const sourceSystemOptionList = sources?.sourceSystems.nodes.map((system) => ({
    value: system.id,
    label: system.systemName,
  }));

  return {
    sourceSystemList: {
      data: sources?.sourceSystems,
      isLoading: isSourcesLoading,
      setOffset,
      refetch: refetchSources,
    },
    sourceSystem: {
      data: source?.sourceSystem,
      isLoading: isSourceLoading,
      refetch: refetchSource,
    },
    createSourceSystem,
    updateSourceSystem,
    sourceSystemOptionList,
  };
};
