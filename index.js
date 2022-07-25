import strava from 'strava-v3';

strava.config({
  'access_token'  : '8bbbbac2354adff19b1002ead29ea79e2c4a38be',
  'client_id'     : '79303',
  'client_secret' : '311640883d24d19e5f9e6c83611a66c7cb6a3866',
  'redirect_uri'  : 'https://duncanhall.net/waylines',
});

async function getToken () {
  let result;

  try {
    result = await strava.oauth.getToken({
      'scope'         : 'activity:read_permission'
    });
  } catch (error) {
    console.log(error.message);
    return;
  }

  console.log(result);
}

async function init () {
  let result;

  try {
    result = await strava.athlete.listActivities({access_token: '8bbbbac2354adff19b1002ead29ea79e2c4a38be'});
  } catch (error) {
    console.log(error.message);
    return;
  }

  console.log(result);
}

await getToken();
