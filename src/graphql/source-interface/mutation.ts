import gql from 'graphql-tag';

const sourceMutation = {
  createSourceInterface: gql`
    mutation CreateSourceInterface($payload: CreateOneSourceInterfaceInput!) {
      createOneSourceInterface(input: $payload) {
        ...SourceInterfaceFragment
      }
    }
  `,
  updateSourceInterface: gql`
    mutation UpdateSourceInterface($payload: UpdateOneSourceInterfaceInput!) {
      updateOneSourceInterface(input: $payload) {
        ...SourceInterfaceFragment
      }
    }
  `,
};

export default sourceMutation;
