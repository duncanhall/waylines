import { default as strava, Strava } from 'strava-v3';

strava.config({
  'client_id': '79303',
  'client_secret': '311640883d24d19e5f9e6c83611a66c7cb6a3866',
});

export async function auth(code) {
  if (code) {
    console.log('got code')
    try {
      console.log('logging in....')
      const result = await strava.oauth.getToken(code);
      const token = result.access_token;
      const refreshToken = result.refresh_token;
      return { token, refreshToken, loggedIn: true };
    }
    catch (error) {
      console.log(error);
      return { loggedIn: false };
    }
  } else {
    console.log('no code given');
    return { loggedIn: false };
  }
}
