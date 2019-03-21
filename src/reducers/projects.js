import { FETCH_PROJECTS } from '../actions/projects';

const initialState = {
  projects: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}
