import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AuthNav = () => (
    <nav>
        <ul>
            <li>
                <NavLink to={routes.register}>Register</NavLink>
            </li>
            <li>
                <NavLink to={routes.login}>Login</NavLink>
            </li>
        </ul>
    </nav>
);

export default AuthNav;
