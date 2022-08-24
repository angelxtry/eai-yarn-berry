import gql from 'graphql-tag';

const sourceQuery = {
  sourceList: gql`
    query SourceList(
      $paging: OffsetPaging
      $sorting: [SourceSystemSort!]
      $filter: SourceSystemFilter!
    ) {
      sourceSystems(
        filter: { and: [$filter, { deleted: { in: [false] } }] }
        paging: $paging
        sorting: $sorting
      ) {
        pageInfo {
          ...OffsetPageInfoFragment
        }
        nodes {
          ...SourceSystemFragment
        }
        totalCount
      }
    }
  `,
  source: gql`
    query Source($payload: ID!) {
      sourceSystem(id: $payload) {
        ...SourceSystemFragment
      }
    }
  `,
};

export default sourceQuery;
