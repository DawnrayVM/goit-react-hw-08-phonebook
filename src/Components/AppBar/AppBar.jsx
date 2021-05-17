import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../routes';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to={routes.home}>
                        Home
                    </NavLink>
                </li>
                {isAuthenticated && (
                    <li>
                        <NavLink to={routes.phonebook}>Phonebook</NavLink>
                    </li>
                )}
                <li>{isAuthenticated ? <UserMenu /> : <AuthNav />}</li>
            </ul>
        </nav>
    );
};
const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps, null)(AppBar);
