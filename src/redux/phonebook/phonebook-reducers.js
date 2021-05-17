import { createReducer, combineReducers } from '@reduxjs/toolkit';
import phonebookActions from './phonebook-actions';

const contacts = createReducer([], {
    [phonebookActions.addContactSuccess]: (state, { payload }) =>
        Object.values(
            state.map(({ name }) => name).includes(payload.name)
                ? (alert('Contact with such name already exists'), [...state])
                : [...state, payload],
        ),
    [phonebookActions.deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    [phonebookActions.fetchContactsSuccess]: (_, { payload }) => [...payload],
});

const filter = createReducer('', {
    [phonebookActions.findContact]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });
