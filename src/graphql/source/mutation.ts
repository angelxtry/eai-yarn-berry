import gql from 'graphql-tag';

const sourceMutation = {
  createSource: gql`
    mutation CreateSource($payload: CreateOneSourceSystemInput!) {
      createOneSourceSystem(input: $payload) {
        ...SourceSystemFragment
      }
    }
  `,
  updateSource: gql`
    mutation UpdateSource($payload: UpdateOneSourceSystemInput!) {
      updateOneSourceSystem(input: $payload) {
        ...SourceSystemFragment
      }
    }
  `,
};

export default sourceMutation;
