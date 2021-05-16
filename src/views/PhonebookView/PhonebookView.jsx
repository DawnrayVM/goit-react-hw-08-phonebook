import { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactsForm from '../../Components/ContactsForm';
import ContactsFilter from '../../Components/ContactsFilter';
import Contacts from '../../Components/Contacts';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';

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
    getContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(PhonebookView);
