const DEV_PORT = '8080';

export const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://legacy-tracker-api-staging.herokuapp.com'
  : `http://localhost:${DEV_PORT}`;
export const BASE_AUTH_URL = 'https://legacytracker.eu.auth0.com/api/v2';

export const API_URL = (slug) => `${BASE_URL}/${slug}`;
export const AUTH_URL = (slug) => `${BASE_AUTH_URL}/${slug}`;
