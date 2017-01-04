import axios from 'axios';

// connect hooks this function up - passes dispatch
export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData)
  }
}