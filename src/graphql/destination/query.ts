import gql from 'graphql-tag';

const destinationQuery = {
  destinationList: gql`
    query DestinationList(
      $paging: OffsetPaging
      $sorting: [DestinationSystemSort!]
      $filter: DestinationSystemFilter!
    ) {
      destinationSystems(
        filter: { and: [$filter, { deleted: { in: [false] } }] }
        paging: $paging
        sorting: $sorting
      ) {
        pageInfo {
          ...OffsetPageInfoFragment
        }
        nodes {
          ...BaseEntityFragment
          systemName
          type
          host
          port
          memo
        }
        totalCount
      }
    }
  `,
  source: gql`
    query Destination($payload: ID!) {
      destinationSystem(id: $payload) {
        ...BaseEntityFragment
        systemName
        type
        host
        port
        memo
      }
    }
  `,
};

export default destinationQuery;
