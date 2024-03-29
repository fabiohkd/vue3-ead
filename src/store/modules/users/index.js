import AuthService from '@/services/AuthService';
import ResetPasswordService from '@/services/ResetPasswordService';

export default {
    state: {
        user: {
            name: '',
            email: '',
        },
        loggedIn: false,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.loggedIn = true;
        },
        LOGOUT(state) {
            state.user = {
                name: '',
                email: '',
            };
            state.loggedIn = false;
        },
    },
    actions: {
        auth({ state }, params) {
            state.loggedIn;
            return AuthService.auth(params);
        },
        forgetPassword({ state }, params) {
            state.loggedIn;
            return ResetPasswordService.forgetPassword(params);
        },
    },
};