import { combineReducers } from 'redux';
import { ADD, DELETE, HANDLE_CHANGE } from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case HANDLE_CHANGE:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
