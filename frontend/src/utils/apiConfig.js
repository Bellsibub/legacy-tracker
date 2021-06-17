export const BASE_URL = 'http://localhost:3004'
export const BASE_AUTH_URL = 'https://legacytracker.eu.auth0.com/api/v2'

export const API_URL = (slug) => `${BASE_URL}/${slug}`;
export const AUTH_URL = (slug) => `${BASE_AUTH_URL}/${slug}`;