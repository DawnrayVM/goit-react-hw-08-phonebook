import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import * as selectors from '../../redux/phonebook/phonebook-selectors';
import styles from './ContactsForm.module.css';

const INIT_STATE = { name: '', number: '' };

const ContactsForm = ({ onSubmitForm }) => {
    const [state, setState] = useState(INIT_STATE);

    const onChange = e => {
        setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
    };
    const onSubmit = e => {
        e.preventDefault();
        onSubmitForm(state);
        setState(INIT_STATE);
    };
    return (
        <>
            <h2 className={styles.title}>Phonebook</h2>
            <form onSubmit={onSubmit} className={styles.container}>
                <label className={styles.formItem}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={onChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label className={styles.formItem}>
                    Number:
                    <input
                        type="tel"
                        name="number"
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                        value={state.number}
                        onChange={onChange}
                    />
                </label>
                <button type="Submit" className={styles.phonebookBtn}>
                    Add contact
                </button>
            </form>
        </>
    );
};

const mapStateToProps = state => ({
    contacts: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onSubmitForm: contact => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
