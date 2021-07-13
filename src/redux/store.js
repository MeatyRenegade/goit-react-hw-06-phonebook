import { createStore } from 'redux';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/add':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [payload],
        },
      };

    case 'contacts/delete':
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
