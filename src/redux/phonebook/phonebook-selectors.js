import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;

const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) =>
        contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()),
        ),
);
const phonebookSelectors = { getContacts, getFilter, getVisibleContacts };

export default phonebookSelectors;
