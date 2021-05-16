import { useState, useEffect } from 'react';

const INITIAL_STATE = { name: '', email: '', password: '' };

const RegisterView = ({ onSubmit }) => {
    const [state, setState] = useState(INITIAL_STATE);
    const loginFormHandler = e =>
        setState({ ...state, [e.target.name]: e.target.value });
    const loginFormSubmitHandler = e => e.preventDefault();
    // onSubmit(state);

    return (
        <form onSubmit={loginFormSubmitHandler}>
            <label>
                <span>Name: </span>
                <input
                    type="text"
                    autoComplete="off"
                    name="name"
                    onChange={loginFormHandler}
                ></input>
            </label>
            <label>
                <span>E-Mail: </span>
                <input
                    type="e-mail"
                    autoComplete="off"
                    name="email"
                    onChange={loginFormHandler}
                ></input>
            </label>
            <label>
                <span>Password: </span>
                <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    onChange={loginFormHandler}
                ></input>
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterView;
