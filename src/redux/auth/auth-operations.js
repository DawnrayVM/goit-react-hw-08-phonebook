import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = formData => async dispatch => {
    dispatch(authActions.regRequest());
    try {
        const response = await axios.post('/users/signup', formData);
        token.set(response.data.token);
        dispatch(authActions.regSuccess(response.data));
    } catch (error) {
        dispatch(authActions.regFail(error.message));
    }
};

const logIn = formData => async dispatch => {
    dispatch(authActions.loginRequest());
    try {
        const response = await axios.post('/users/login', formData);
        token.set(response.data.token);
        dispatch(authActions.loginSuccess(response.data));
    } catch (error) {
        dispatch(authActions.loginFail(error.message));
    }
};

const logOut = () => async dispatch => {
    dispatch(authActions.logoutRequest());
    try {
        await axios.post('/users/logout');
        token.unset();
        dispatch(authActions.logoutSuccess());
    } catch (error) {
        dispatch(authActions.logoutFail(error.message));
    }
};

const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();
    if (!persistedToken) {
        return;
    }

    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());
    try {
        const response = await axios.get('/users/current');
        dispatch(authActions.getCurrentUserSuccess(response.data));
    } catch (error) {
        dispatch(authActions.getCurrentUserFail(error.message));
    }
};

const authOperations = { register, logIn, logOut, getCurrentUser };

export default authOperations;
