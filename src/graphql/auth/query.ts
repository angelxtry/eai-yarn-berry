import gql from 'graphql-tag';

const authQuery = {
  userMe: gql`
    query Me {
      me {
        ...BaseEntityFragment
        email
        role
        name
      }
    }
  `,
};

export default authQuery;
