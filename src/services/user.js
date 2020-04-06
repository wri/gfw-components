import { create } from 'axios';
import { GFW_API } from 'utils/constants';

export const apiAuthRequest = create({
  timeout: 30 * 1000,
  baseURL: GFW_API,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer {token}`
  }
});

export const setUserToken = token => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userToken', token);
    apiAuthRequest.defaults.headers.Authorization = `Bearer ${token}`;
  }
};

export const checkLoggedIn = token => {
  if (
    token && apiAuthRequest.defaults.headers.Authorization === 'Bearer {token}'
  ) {
    setUserToken(token);
  }

  return apiAuthRequest.get('/auth/check-logged');
};
