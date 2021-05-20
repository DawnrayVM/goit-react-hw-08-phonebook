import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook';
import { phonebookSelectors } from '../../redux/phonebook';
import contactIcon from '../../assets/people.svg';
import mobileIcon from '../../assets/mobile.svg';

const useStyles = createUseStyles({
    contactsList: {
        flexDirection: 'column',
        fontFamily: 'Roboto',
        fontSize: 20,
        width: 576,
        marginTop: 20,
        padding: '20px 15px',
        border: '1px solid rgba(225, 225, 225, 10)',
        borderRadius: 5,
        boxShadow: '3px 3px 5px 0px rgba(225, 225, 225, 10)',
    },
    contactName: {display: 'flex', flexDirection: 'column', },
    contactIcons: {display: 'flex', flexDirection: 'column', marginRight: 10},
    deleteBtn: {
        display: 'block',
        width: 100,
        borderStyle: 'none',
        fontWeight: 500,
        fontSize: 16,
        color: 'white',
        textDecoration: 'none',
        padding: '5px 10px',
        borderRadius: 3,
        background: 'rgb(64,199,129)',
        boxShadow: '0 -3px rgb(53,167,110) inset',
        transition: '0.2s',
        '&:hover': { background: 'rgb(53, 167, 110)' },
        '&:active': {
            background: 'rgb(33,147,90)',
            boxShadow: '0 3px rgb(33,147,90) inset',
        },
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
        marginBottom: 5,
        '&:last-child': { marginBottom: 0 },
        borderBottom: '1px solid rgba(225, 225, 225, 10)'
    },
    listText: {
        margin: 0,
        marginLeft: 15,
    },
});

const Contacts = ({ contacts, onDelete }) => {
    const classes = useStyles();
    return (
        contacts.length > 0 && (
            <ul className={classes.contactsList}>
                {contacts.map(({ name, number, id }) => (
                    <li key={id} className={classes.listItem}>
                          <div className={classes.contactName}>
                          <div>
                              <img src={contactIcon} alt="contact"/>
                              <span className={classes.listText}>
                            {name}
                           </span>
                          </div>
                           <div>
                           <img src={mobileIcon} alt="mobile"/>
                           <span className={classes.listText}>
                            {number}
                           </span>
                           </div>
                           
                        </div>
                        <button
                            type="button"
                            onClick={() => onDelete(id)}
                            className="btn btn-primary btn-sm"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        )
    );
};

const mapStateToProps = state => ({
    contacts: phonebookSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
