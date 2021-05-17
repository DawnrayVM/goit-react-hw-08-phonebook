import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/getContactsRequest');
export const fetchContactsSuccess = createAction('contacts/getContactsSuccess');
export const fetchContactsFail = createAction('contacts/getContactsFail');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactFail = createAction('contacts/addContactFail');

export const deleteContactRequest = createAction(
    'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
    'contacts/deleteContactSuccess',
);
export const deleteContactFail = createAction('contacts/deleteContactFail');

export const findContact = createAction('contactsFilter/filterContact');

const phonebookActions = {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsFail,
    addContactRequest,
    addContactSuccess,
    addContactFail,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactFail,
    findContact,
};

export default phonebookActions;
