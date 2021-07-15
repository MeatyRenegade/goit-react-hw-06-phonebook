import { ADD, DELETE, HANDLE_CHANGE } from './contacts-types';
import shortid from 'shortid';

export const addContact = text => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    text,
  },
});

export const deleteContact = id => ({
  type: DELETE,
  payload: id,
});

export const handleChange = value => ({
  type: HANDLE_CHANGE,
  payload: value,
});
