import { default as strava, Strava } from 'strava-v3';
import * as fert from '~/services/fert';

export const state = () => ({
  token: null,
  refreshToken: null,
  activities: [],
  isLoggedIn: false
})

export const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn
  }
}

export const mutations = {
  storeOauth(state, { token, refreshToken }) {
    state.token = token;
    state.refreshToken = refreshToken;
  },
  registerActivity(state, activity) {
    state.activities.push(activity);
  },
  setLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
    console.log('logged in state is ', isLoggedIn)
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { route }) {

    const { code } = route.query;
    const oauth = await fert.auth(code);

    console.log(oauth);
    console.log()

    commit('setLoggedIn', oauth.loggedIn);

    // const activities = await strava.athlete.listActivities({ access_token: token, per_page: 10 });
    // const ids = activities.map(a => a.id);
    // Promise.all(ids.map(async (aid) => {
    //   const data = await strava.activities.get({ id: aid, access_token: token, include_all_efforts: false });
    //   commit('registerActivity', data);
    // }));
  }
}