import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from './action_types';

const initialState = {
  entity: {},
  isLoading: false,
  errors: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
}
