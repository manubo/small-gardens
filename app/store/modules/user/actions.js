import axios from 'axios';

function signinUserSuccess(response) {
  console.log(response);
}

function signinUserFailure(response) {
  console.log(response);
}

export function signinUser() {
  return dispatch => {
    axios
      .post('/api/auth_token')
      .then(response => dispatch(signinUserSuccess(response)))
      .catch(response => dispatch(signinUserFailure(response)));
  }
}
