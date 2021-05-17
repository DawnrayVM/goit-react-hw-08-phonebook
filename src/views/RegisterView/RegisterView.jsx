import { useState } from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { authOperations } from '../../redux/auth';

const useStyle = createUseStyles({
    formContainer: {
        width: 350,
        display: 'block',
        margin: { left: 'auto', right: 'auto' },
    },
});
const INITIAL_STATE = { name: '', email: '', password: '' };

const RegisterView = ({ onRegister }) => {
    const [state, setState] = useState(INITIAL_STATE);

    const onChange = e =>
        setState({ ...state, [e.target.name]: e.target.value });

    const registerFormSubmitHandler = e => {
        e.preventDefault();
        onRegister(state);
        setState(INITIAL_STATE);
    };
    const classes = useStyle();
    return (
        <div className={classes.formContainer}>
            <form
                onSubmit={registerFormSubmitHandler}
                className="container d-sm-flex flex-column"
            >
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        autoComplete="off"
                        name="name"
                        value={state.name}
                        onChange={onChange}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Name:</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        autoComplete="off"
                        name="email"
                        value={state.email}
                        onChange={onChange}
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
                        onChange={onChange}
                        className="form-control"
                        id="floatingPassword"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingPassword">Password:</label>
                </div>

                {/* <button className="btn btn-primary" type="button" disabled>
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                </button> */}

                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    onRegister: formData => dispatch(authOperations.register(formData)),
});

export default connect(null, mapDispatchToProps)(RegisterView);
