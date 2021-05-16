import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './Components/AppBar';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import PhonebookView from './views/PhonebookView';

// import { fetchContacts } from './redux/operations';
// import PhonebookForm from './Components/Phonebook';
// import ContactsFilter from './Components/ContactsFilter';
// import Contacts from './Components/Contacts';

const App = ({ getContacts }) => {
    // useEffect(() => {
    //     getContacts();
    // });
    return (
        <>
            <AppBar />
            <Switch>
                <Route exact path={routes.home} component={HomeView} />
                <Route exact path={routes.register} component={RegisterView} />
                <Route path={routes.login} component={LoginView} />
                <Route path={routes.phonebook} component={PhonebookView} />
            </Switch>
        </>
    );
};

// const mapDispatchToProps = dispatch => ({
//     getContacts: () => dispatch(fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;
