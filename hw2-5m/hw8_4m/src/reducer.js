
import { ADD_ENTRY, SET_ENTRIES } from './actions';

const initialState = {
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    case ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
