import gql from 'graphql-tag';

const destinationMutation = {
  createDestinationInterface: gql`
    mutation CreateDestinationInterface($payload: CreateOneDestinationInterfaceInput!) {
      createOneDestinationInterface(input: $payload) {
        ...DestinationInterfaceFragment
      }
    }
  `,
  updateDestinationInterface: gql`
    mutation UpdateDestinationInterface($payload: UpdateOneDestinationInterfaceInput!) {
      updateOneDestinationInterface(input: $payload) {
        ...DestinationInterfaceFragment
      }
    }
  `,
};

export default destinationMutation;
