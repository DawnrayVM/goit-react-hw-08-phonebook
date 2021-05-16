import { NavLink, Router } from 'react-router-dom';

import routes from '../../routes';
import LoginView from '../../views/LoginView';
import RegisterView from '../../views/RegisterView';

const AuthNav = () => (
    <nav>
        <NavLink to={routes.register}>Register</NavLink>
        <NavLink to={routes.login}>Login</NavLink>
    </nav>
);

export default AuthNav;
