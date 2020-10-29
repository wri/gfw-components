import { create } from 'axios';
import { GFW_API } from 'constants';

export const apiRequest = create({ timeout: 30 * 1000, baseURL: GFW_API });

export const apiAuthRequest = create({
  timeout: 30 * 1000,
  baseURL: GFW_API,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer {token}`,
  },
});

export default create({ timeout: 30 * 1000 });
