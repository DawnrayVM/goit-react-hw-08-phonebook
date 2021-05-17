import { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactsForm from '../../Components/ContactsForm';
import ContactsFilter from '../../Components/ContactsFilter';
import Contacts from '../../Components/Contacts';
import { phonebookOperations } from '../../redux/phonebook';

const PhonebookView = ({ getContacts }) => {
    useEffect(() => {
        getContacts();
    });
    return (
        <>
            <ContactsForm />
            <ContactsFilter />
            <Contacts />
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(PhonebookView);
