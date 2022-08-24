import gql from 'graphql-tag';

const destinationInterfaceQuery = {
  destinationInterfaceList: gql`
    query DestinationInterfaceList(
      $paging: OffsetPaging
      $sorting: [DestinationInterfaceSort!]
    ) {
      destinationInterfaces(
        filter: { deleted: { in: [false] } }
        paging: $paging
        sorting: $sorting
      ) {
        pageInfo {
          ...OffsetPageInfoFragment
        }
        nodes {
          ...DestinationInterfaceFragment
        }
        totalCount
      }
    }
  `,
  destinationInterface: gql`
    query DestinationInterface($payload: ID!) {
      destinationInterface(id: $payload) {
        ...DestinationInterfaceFragment
      }
    }
  `,
};

export default destinationInterfaceQuery;
