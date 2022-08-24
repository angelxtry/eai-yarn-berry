import { GraphQLClient } from 'graphql-request';

import { GlobalEnv } from '@/config';

export const graphQLClient = new GraphQLClient(`${GlobalEnv.SERVER_URL}/graphql`);
