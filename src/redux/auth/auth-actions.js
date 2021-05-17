import { createAction } from '@reduxjs/toolkit';

const regRequest = createAction('auth/regRequest');
const regSuccess = createAction('auth/regSuccess');
const regFail = createAction('auth/regFail');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginFail = createAction('auth/loginFail');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutFail = createAction('auth/logoutFail');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserFail = createAction('auth/getCurrentUserFail');

const authActions = {
    regRequest,
    regSuccess,
    regFail,
    loginRequest,
    loginSuccess,
    loginFail,
    logoutRequest,
    logoutSuccess,
    logoutFail,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserFail,
};

export default authActions;
