import { SELECT_GARDEN } from './action_types';

export function selectGarden(garden) {
  return {
    type: SELECT_GARDEN,
    payload: { garden },
  };
}
