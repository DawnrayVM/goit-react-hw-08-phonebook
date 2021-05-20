import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import routes from '../../routes';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';

const useStyles = createUseStyles({
    container: {
        fontFamily: 'Roboto',
        padding: '0 15px',
        marginBottom: 25,
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
    navContainer: {
        height: 40,
        margin: 0,
        padding: '0 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #0d6efd',
    },
    listBar: {
        fontWeight: 500,
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItem: {
        marginRight: 20,
    },
    navLink: { textDecoration: 'none', textAlign: 'center', color: 'black' },
    navLinkActive: {
        textDecoration: 'none',
    textAlign: 'center',
    color: '#0d6efd'
},
});

const AppBar = ({ isAuthenticated }) => {
    const classes = useStyles();
    return (
        <header className={classes.container}>
            <nav className={classes.navContainer}>
                <ul className={classes.listBar}>
                    <li className={classes.listItem}>
                        <NavLink
                            exact
                            to={routes.home}
                            className={classes.navLink}
                            activeClassName={classes.navLinkActive}
                            isActive={(match) => match && true}>
                            Home
                        </NavLink>
                    </li>
                    {isAuthenticated && (
                        <li className={classes.listItem}>
                            <NavLink
                                to={routes.phonebook}
                                className={classes.navLink}
                                activeClassName={classes.navLinkActive}
                                isActive={(match) => match && true}>
                                Phonebook
                            </NavLink>
                        </li>
                    )}
                </ul>
                <ul className={classes.listBar}>
                    <li className={classes.listItem}>
                        {isAuthenticated ? <UserMenu /> : <AuthNav />}
                    </li>
                </ul>
            </nav>
        </header>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps, null)(AppBar);
