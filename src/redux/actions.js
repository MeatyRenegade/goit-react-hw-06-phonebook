export const addContact = text => ({
  type: 'contacts/add',
  payload: {
    id: Date.now(),
    text,
  },
});

export const deleteContact = id => ({
  type: 'contacts/delete',
  payload: {
    id,
  },
});
