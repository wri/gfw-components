import { create } from 'axios';
import { GFW_API } from 'constants';

const isServer = typeof window === 'undefined';

export const apiAuthRequest = create({
  timeout: 30 * 1000,
  baseURL: GFW_API,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer {token}`,
  },
});

export const setUserToken = (token) => {
  if (!isServer) {
    localStorage.setItem('userToken', token);
    apiAuthRequest.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

export const checkLoggedIn = (token) => {
  if (
    token &&
    apiAuthRequest.defaults.headers.Authorization === 'Bearer {token}'
  ) {
    setUserToken(token);
  }

  return apiAuthRequest.get('/auth/check-logged');
};
