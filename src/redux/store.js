import { contactsReducer } from './mainReduser';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlise';

export const store = configureStore(
  {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  }
  // const rootReducer = combineReducers({
  //   contacts: contactsReducer,
  //   filter: filterReducer,
  // });
);
