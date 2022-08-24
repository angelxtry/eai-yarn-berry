export const GlobalEnv = {
  TOKEN_KEY: import.meta.env.VITE_TOKEN_KEY || 'CORE_EAI_DEV_TOKEN',
  SERVER_URL:
    import.meta.env.VITE_SERVER_URL || 'https://kr-core-eai-api-dev.gomicorp.com/graphql',
};
