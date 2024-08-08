
export const ADD_ENTRY = 'ADD_ENTRY';
export const SET_ENTRIES = 'SET_ENTRIES';

export const addEntry = (entry) => ({
  type: ADD_ENTRY,
  payload: entry,
});

export const setEntries = (entries) => ({
  type: SET_ENTRIES,
  payload: entries,
});
