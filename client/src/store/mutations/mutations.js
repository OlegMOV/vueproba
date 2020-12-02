export default {
  SET_ABONENTS: (state, payload) => {
    state.abonents = payload
  },
  AUTH_REQUEST: (state) => {
    state.status = 'loading'
  },
  USER_LOGIN: (state, token) => {
    state.status = 'success';
    state.token = token;
  },
  USER_LOGOUT: (state) => {
    state.status = '';
    state.token = '';
  },
  SELECT_ABONENT: (state, abonent) => {
    state.abonent = abonent
  },
}