import AuthService from '@/services/AuthService';

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
            state.loggedIn = false;
            state.user = {
                name: '',
                email: '',
            };
        },
    },
    actions: {
        auth({ state }, params) {
            console.log(state.loggedIn);
            AuthService.auth(params);
        },
    },
};