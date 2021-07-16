import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
  },
}));

export const deleteContact = createAction('contacts/delete');
export const handleChange = createAction('contacts/handleChange');
