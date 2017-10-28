import { SELECT_GARDEN } from './action_types'

const initialState = {
  entities: [
      { id: 1, position: {lat: 47.372419, lng: 8.532109 }},
      { id: 2, position: {lat: 47.372, lng: 8.582 }}
  ],
  isLoading: false,
  selectedGarden: null,
  errors: {}
};

export default function gardens(state = initialState, action) {
    switch (action.type) {
        case SELECT_GARDEN: {
            const { garden: selectedGarden } = action.payload;
            return {
                ...state,
                selectedGarden
            }
        }

        default:
            return state;
    }
}
