import { default as strava, Strava } from 'strava-v3';
import * as fert from '~/services/fert';

export const state = () => ({
  activities: [],
  isLoggedIn: false,
  athlete: {}
})

export const getters = {
  isLoggedIn(state) {
    return state.isLoggedIn
  },
  athleteName(state) {
    const { athlete } = state;
    return `${athlete.firstname} ${athlete.lastname}`;
  },
  activities(state) {
    return state.activities
  },
}

export const mutations = {
  storeActivities(state, value) {
    state.activities = value;
  },
  setLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  },
  setAthlete(state, athlete) {
    state.athlete = athlete;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { route }) {
    const { code } = route.query;
    const oauth = await fert.auth(code);

    commit('setAthlete', oauth.athlete);
    commit('setLoggedIn', oauth.loggedIn);

    if (oauth.loggedIn) {
      const activities = await fert.loadActivities();
      commit('storeActivities', activities);
    }
  }
}