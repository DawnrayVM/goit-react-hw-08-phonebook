import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import routes from './routes';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import AppBar from './Components/AppBar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PhonebookView from './views/PhonebookView';
// import { getCurrentUser } from './redux/auth/auth-operations';
import { authOperations } from './redux/auth';

const App = ({ getUser }) => {
    useEffect(() => getUser);
    return (
        <>
            <AppBar />
            <Switch>
                <PublicRoute exact path={routes.home} component={HomeView} />
                <PublicRoute
                    path={routes.register}
                    restricted
                    redirectTo={routes.phonebook}
                    component={RegisterView}
                />
                <PublicRoute
                    path={routes.login}
                    restricted
                    redirectTo={routes.phonebook}
                    component={LoginView}
                />
                <PrivateRoute
                    path={routes.phonebook}
                    component={PhonebookView}
                    redirectTo={routes.login}
                />
            </Switch>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    getUser: dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
