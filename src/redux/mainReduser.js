import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from './operation';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export default createReducer(initialState, {
  [fetchContacts.pending]: state => {
    state.contacts.isLoading = true;
  },
  [fetchContacts.fulfilled]: (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.items = action.payload;
  },
  [fetchContacts.rejected]: (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  },
});
