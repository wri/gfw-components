import request from 'utils/request';

export default (longUrl, token) =>
  request.post(
    'https://api-ssl.bitly.com/v4/shorten',
    {
      long_url: longUrl,
    },
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
