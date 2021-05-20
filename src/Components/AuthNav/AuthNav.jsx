import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import routes from '../../routes';

const useStyles = createUseStyles({
    navContainer: {
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listBar: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItem: {
        '&:not(:last-child)': { marginRight: 20 },
    },
    navLink: {
        textDecoration: 'none',
        textAlign: 'center',
        color: 'black',
    },
});

const AuthNav = () => {
    const classes = useStyles();
    return (
        <nav className={classes.navContainer}>
            <ul className={classes.listBar}>
                <li className={classes.listItem}>
                    <NavLink to={routes.register} className={classes.navLink}>
                        Register
                    </NavLink>
                </li>
                <li className={classes.listItem}>
                    <NavLink to={routes.login} className={classes.navLink}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default AuthNav;
