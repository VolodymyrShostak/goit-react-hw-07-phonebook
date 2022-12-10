import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

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
  [addContact.pending]: state => {
    state.contacts.isLoading = true;
  },
  [addContact.fulfilled]: (state, action) => {
    state.contacts.items = [...state.contacts.items, action.payload];
    state.contacts.isLoading = false;
  },
  [addContact.rejected]: (state, action) => {
    state.contacts.error = action.payload;
    state.contacts.isLoading = false;
  },
  [deleteContact.pending]: state => {
    state.contacts.isLoading = true;
  },
  [deleteContact.fulfilled]: (state, action) => {
    state.contacts.items = state.contacts.items.filter(
      contact => contact.id !== action.payload.id
    );
    state.contacts.isLoading = false;
  },
  [deleteContact.rejected]: (state, action) => {
    state.contacts.error = action.payload;
    state.contacts.isLoading = false;
  },
});
