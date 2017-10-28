import { SELECT_GARDEN } from './action_types';

const initialState = {
  entities: [
    {
      id: 1,
      position: { lat: 47.372419, lng: 8.532109 },
      name: 'The little fancy green garden',
      city: 'Selnau',
      size: '10 m2',
    },
    {
      id: 2,
      position: { lat: 47.372, lng: 8.582 },
      name: 'Janinas Garden',
      city: 'Dolder Golfclub',
      size: '25 m2',
    },
    {
      id: 3,
      position: { lat: 47.31, lng: 8.6 },
      name: 'Green paradise at the Goldküste',
      city: 'Erlenbach',
      size: '42 m2',
    },
    {
      id: 4,
      position: { lat: 47.360036, lng: 8.501194 },
      name: 'Lovely garden at the foot of Uetliberg',
      city: 'Zürich',
      size: '62 m2',
    },
    {
      id: 5,
      position: { lat: 47.387862, lng: 8.518436 },
      name: 'Grow your own Tomatoes @ Simplificator AG',
      city: 'Zürich',
      size: '22 m2',
    },
    {
      id: 6,
      position: { lat: 47.409241, lng: 8.522216 },
      name: 'Best Flowers in Town',
      city: 'Oerlikon',
      size: '23 m2',
    }
  ],
  isLoading: false,
  selectedGarden: null,
  errors: {},
};

export default function gardens(state = initialState, action) {
  switch (action.type) {
    case SELECT_GARDEN: {
      const { garden: selectedGarden } = action.payload;
      const { selectedGarden: currentSelectedGarden } = state;
      const newSelectedGarden = do {
        if (
          currentSelectedGarden &&
          currentSelectedGarden.id === selectedGarden.id
        ) {
          null;
        } else {
          selectedGarden;
        }
      };
      return {
        ...state,
        selectedGarden: newSelectedGarden,
      };
    }

    default:
      return state;
  }
}
