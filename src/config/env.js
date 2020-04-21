const ENV = {
  development: {
    ENV: 'development',
    LEGACY_API_ENDPOINT: 'http://192.168.0.9:8086/v1/graphql',
    LEGACY_WS_ENDPOINT: 'ws://192.168.0.9:8086/v1/graphql',
  },
  staging: {
    ENV: 'staging',
    LEGACY_API_ENDPOINT: 'http://192.168.0.9:8086/v1/graphql',
    LEGACY_WS_ENDPOINT: 'ws://192.168.0.9:8086/v1/graphql',
  },
  production: {
    ENV: 'production',
    LEGACY_API_ENDPOINT: 'http://192.168.0.9:8086/v1/graphql',
    LEGACY_WS_ENDPOINT: 'wss://192.168.0.9:8086/v1/graphql',
  },
};

function getEnvVars(env = '') {
  if (env === 'production') {
    return ENV.production;
  }
  if (env === 'staging') {
    return ENV.staging;
  }
  return ENV.development;
}

export default getEnvVars();
