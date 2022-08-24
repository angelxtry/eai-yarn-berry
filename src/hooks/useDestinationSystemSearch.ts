import { Constants } from '@/constants';
import {
  DestinationSystemSortFields,
  SortDirection,
  useDestinationListQuery,
} from '@/generated/graphql';
import { graphQLClient } from '@/utils/graphql-client';

export const useDestinationSystemSearch = (searchKey: string) => {
  const { data: destinations, isLoading } = useDestinationListQuery(graphQLClient, {
    filter: { systemName: { like: `%${searchKey}%` } },
    paging: { limit: Constants.infiniteRowCount, offset: 0 },
    sorting: [
      {
        field: DestinationSystemSortFields.Id,
        direction: SortDirection.Asc,
      },
    ],
  });

  const destinationSystemsOption = destinations?.destinationSystems.nodes.map(
    (system) => ({
      // GraphQL spec 에서는  number type, 하지만 typepof 로 확인해보면 string
      // number 로 casting 하기 위해 '+' 추가
      value: +system.id,
      label: system.systemName,
    }),
  );

  return {
    isLoading,
    data: destinations?.destinationSystems.nodes,
    destinationSystemsOption,
  };
};
