import { NavLink, Router } from 'react-router-dom';
import routes from '../../routes';

import HomeView from '../../views/HomeView';
import AuthNav from '../AuthNav';

const AppBar = () => {
    return (
        <nav>
            <NavLink exact to={routes.home}>
                Home
            </NavLink>
            <AuthNav />
        </nav>
    );
};

export default AppBar;
