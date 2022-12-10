import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContatcts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://639445984df9248ead9d8d7b.mockapi.io/contacts`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `https://639445984df9248ead9d8d7b.mockapi.io/contacts/${contactId}`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `https://639445984df9248ead9d8d7b.mockapi.io/contacts`,
        {
          body: JSON.stringify(body),
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const setFilter = createAction('phonebook/setFilter');