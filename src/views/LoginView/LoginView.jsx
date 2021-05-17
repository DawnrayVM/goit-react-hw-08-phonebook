import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

const useStyle = createUseStyles({
    formContainer: {
        width: 350,
        display: 'block',
        margin: { left: 'auto', right: 'auto' },
    },
});

const INITIAL_STATE = { email: '', password: '' };

const LoginView = ({ onLogin }) => {
    const [state, setState] = useState(INITIAL_STATE);
    const loginFormHandler = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    const loginFormSubmitHandler = e => {
        e.preventDefault();
        onLogin(state);
        setState(INITIAL_STATE);
    };
    const classes = useStyle();
    return (
        <div className={classes.formContainer}>
            <form
                onSubmit={loginFormSubmitHandler}
                className="container d-sm-flex flex-column"
            >
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        autoComplete="off"
                        name="email"
                        value={state.email}
                        onChange={loginFormHandler}
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingEmail">E-Mail:</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        autoComplete="off"
                        onChange={loginFormHandler}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingPassword">Password:</label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    onLogin: formData => dispatch(authOperations.logIn(formData)),
});

export default connect(null, mapDispatchToProps)(LoginView);
