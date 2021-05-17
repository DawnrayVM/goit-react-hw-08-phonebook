import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { phonebookActions } from '../../redux/phonebook';
import { phonebookSelectors } from '../../redux/phonebook';

const useStyles = createUseStyles({
    filterForm: {
        fontFamily: 'Roboto',
        width: 370,
        marginTop: 10,
        padding: '15px 10px',
        border: '1px solid rgba(225, 225, 225, 10)',
        borderRadius: 5,
        boxShadow: '3px 3px 5px 0px rgba(225, 225, 225, 10)',
    },
    filterInput: {
        fontSize: 20,
        width: 360,
    },
});

const ContactsFilter = ({ contacts, filter, onChange }) => {
    const classes = useStyles();
    return (
        contacts.length > 0 && (
            <form className={classes.filterForm}>
                <label>
                    <input
                        type="text"
                        value={filter}
                        onChange={onChange}
                        className={classes.filterInput}
                    />
                </label>
            </form>
        )
    );
};
const mapStateToProps = state => ({
    contacts: phonebookSelectors.getContacts(state),
    filter: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: e =>
        dispatch(phonebookActions.findContact(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
