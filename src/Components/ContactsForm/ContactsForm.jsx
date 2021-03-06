import { useState } from 'react';
import { connect } from 'react-redux';
import {createUseStyles} from 'react-jss';
import { phonebookOperations } from '../../redux/phonebook';
import { phonebookSelectors } from '../../redux/phonebook';

const useStyles = createUseStyles({
    title: {
        width: 'fit-content',
            fontFamily: 'Roboto',
            fontSize: 36,
            fontWeight: 700,
        
    },
    contactsForm: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 15px',
        width: 576,
        border: '1px solid rgba(225, 225, 225, 10)',
        borderRadius: 5,
        boxShadow: '0px 3px 3px rgba(225, 225, 225, 10)',
        transition: '0.5ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    inputTitle: {
        marginRigth: 20,
        marginBottom: 10,
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 400,
    }
})
const INIT_STATE = { name: '', number: '' };

const ContactsForm = ({ onSubmitForm }) => {
    const classes = useStyles();
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
        <div className={classes.container}>
            <h2 className={classes.title}>Phonebook</h2>
            <form
                onSubmit={onSubmit}
                className={classes.contactsForm}
            >
                <label className={classes.inputTitle}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={onChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        className="form-control"
                    />
                </label>
                <label className={classes.inputTitle}>
                    Number:
                    <input
                        type="tel"
                        name="number"
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                        value={state.number}
                        onChange={onChange}
                        className="form-control"
                    />
                </label>
                <button type="Submit" className="btn btn-primary">
                    Add contact
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onSubmitForm: contact => dispatch(phonebookOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
