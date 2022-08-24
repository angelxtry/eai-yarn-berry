import gql from 'graphql-tag';

const sourceInterfaceQuery = {
  sourceInterfaceList: gql`
    query SourceInterfaceList($paging: OffsetPaging, $sorting: [SourceInterfaceSort!]) {
      sourceInterfaces(
        filter: { deleted: { in: [false] } }
        paging: $paging
        sorting: $sorting
      ) {
        pageInfo {
          ...OffsetPageInfoFragment
        }
        nodes {
          ...SourceInterfaceFragment
        }
        totalCount
      }
    }
  `,
  sourceInterface: gql`
    query SourceInterface($payload: ID!) {
      sourceInterface(id: $payload) {
        ...SourceInterfaceFragment
      }
    }
  `,
};

export default sourceInterfaceQuery;
