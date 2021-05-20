import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import ContactsForm from '../../Components/ContactsForm';
import ContactsFilter from '../../Components/ContactsFilter';
import Contacts from '../../Components/Contacts';
import { phonebookOperations } from '../../redux/phonebook';

const useStyles = createUseStyles({
    container: {
            width: 'fit-content',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        padding: '0 15px',
        '@media (min-width: 575.98px)': {
            padding: '0 calc(50vw - 270px)',
        },
        '@media (min-width: 767.98px)': {
            padding: '0 calc(50vw - 360px)',
        },
        '@media (min-width: 991.98px)': {
            padding: '0 calc(50vw - 480px)',
        },
        '@media (min-width: 1199.98px)': {
            padding: '0 calc(50vw - 590px)',
        },
    },
});

const PhonebookView = ({ getContacts }) => {
    const classes = useStyles();
    useEffect(() => {
        getContacts();
    });
    return (
        <main className={classes.container}>
            <ContactsForm />
            <ContactsFilter />
            <Contacts />
        </main>
    );
};

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(PhonebookView);
