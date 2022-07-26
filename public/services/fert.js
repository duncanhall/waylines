import { default as Strava } from 'strava-v3';

Strava.config({
  'client_id': '79303',
  'client_secret': '311640883d24d19e5f9e6c83611a66c7cb6a3866',
});

let _token = null;
let _refreshToken = null;
let _client = null;

export async function auth(code) {
  if (code) {
    try {
      const result = await Strava.oauth.getToken(code);
      const { athlete } = result;

      _token = result.access_token;
      _refreshToken = result.refresh_token;
      _client = new Strava.client(_token);

      return { loggedIn: true, athlete };
    }
    catch (error) {
      return { loggedIn: false, athlete: null };
    }
  } else {
    return { loggedIn: false, athlete: null };
  }
}

export async function loadActivities() {
  const activities = await _client.athlete.listActivities({ per_page: 10 });
  const ids = activities.map(a => a.id);
  const activityData = Promise.all(ids.map(async (aid) => {
    const activity = await _client.activities.get({ id: aid, include_all_efforts: false });
    return activity;
  }));
  return activityData;
}