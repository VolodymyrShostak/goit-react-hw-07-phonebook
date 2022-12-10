import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};



// const personDataSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       return state.filter(({ id }) => id !== action.payload);
//     },
//   },
// });
// export const { addContact, deleteContact } = personDataSlice.actions;
// export const contactsReducer = personDataSlice.reducer;
