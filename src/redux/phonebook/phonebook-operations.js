import axios from 'axios';
import * as actions from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactsRequest());
    axios
        .get('/contacts')
        .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
        .catch(error => {
            dispatch(actions.fetchContactsFail(error));
        });
};

const addContact = contact => dispatch => {
    dispatch(actions.addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactFail(error)));
};

const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactRequest());
    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
        .catch(error => {
            dispatch(actions.deleteContactFail(error));
        });
};

export { fetchContacts, addContact, deleteContact };
