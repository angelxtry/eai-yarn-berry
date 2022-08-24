import gql from 'graphql-tag';

const authMutation = {
  login: gql`
    mutation Login($payload: LoginInput!) {
      login(login: $payload) {
        token
      }
    }
  `,
};

export default authMutation;
