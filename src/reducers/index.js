import { FETCH_PROJECTS } from '../actions';

const intialState = {
  title: '',
  date: '',
  concept: '',
  about: '',
  pic: '',
  tech: ''
};

export default function reducer(state = intialState, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        title: action.payload.title,
        date: action.payload.date,
        concept: action.payload.concept,
        about: action.payload.about,
        pic: action.payload.pic,
        tech: action.payload.tech
      };
    default:
      return state;
  }
}
