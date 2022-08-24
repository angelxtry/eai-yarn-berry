import { Constants } from '@/constants';
import {
  SortDirection,
  SourceSystemSortFields,
  useSourceListQuery,
} from '@/generated/graphql';
import { graphQLClient } from '@/utils/graphql-client';

export const useSourceSystemSearch = (searchKey: string) => {
  const { data: sources, isLoading } = useSourceListQuery(graphQLClient, {
    filter: { systemName: { like: `%${searchKey}%` } },
    paging: { limit: Constants.infiniteRowCount, offset: 0 },
    sorting: [
      {
        field: SourceSystemSortFields.Id,
        direction: SortDirection.Asc,
      },
    ],
  });

  const sourceSystemsOption = sources?.sourceSystems.nodes.map((s) => ({
    value: s.id,
    label: s.systemName,
  }));

  return { isLoading, data: sources?.sourceSystems.nodes, sourceSystemsOption };
};
