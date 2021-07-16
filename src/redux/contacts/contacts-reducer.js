import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, handleChange } from './contacts-actions';

const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

const items = createReducer(parsedContacts || [], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [handleChange]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
