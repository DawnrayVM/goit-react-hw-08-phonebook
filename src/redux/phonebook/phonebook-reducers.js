import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../redux/actions';

const contactsReducer = createReducer([], {
    [actions.addContactSuccess]: (state, { payload }) =>
        Object.values(
            state.map(({ name }) => name).includes(payload.name)
                ? (alert('Contact with such name already exists'), [...state])
                : [...state, payload],
        ),
    [actions.deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    [actions.fetchContactsSuccess]: (_, { payload }) => [...payload],
});

const filterReducer = createReducer('', {
    [actions.findContact]: (_, { payload }) => payload,
});

export { contactsReducer, filterReducer };
