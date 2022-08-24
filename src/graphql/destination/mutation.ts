import gql from 'graphql-tag';

const destinationMutation = {
  createDestination: gql`
    mutation CreateDestination($payload: CreateOneDestinationSystemInput!) {
      createOneDestinationSystem(input: $payload) {
        ...BaseEntityFragment
        systemName
        type
        host
        port
        memo
      }
    }
  `,
  updateDestination: gql`
    mutation UpdateDestination($payload: UpdateOneDestinationSystemInput!) {
      updateOneDestinationSystem(input: $payload) {
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

export default destinationMutation;
