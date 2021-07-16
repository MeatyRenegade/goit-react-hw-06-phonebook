import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, handleChange } from './contacts-actions';
import duplicateContactCheck from './contacts-duplicate-reducer';

const itemsReducer = createReducer([], {
  [addContact]: (state, action) => [
    ...state,
    duplicateContactCheck(action.payload),
  ],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [handleChange]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
