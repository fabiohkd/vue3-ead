import SupportService from '@/services/SupportService';

const actions = {
    getSupportsByLesson({ commit }, lessonId) {
        return SupportService.getSupportsByLesson(lessonId).then((supports) =>
            commit('SET_SUPPORTS', supports)
        );
    },

    createSupport({ commit }, params) {
        return SupportService.storeSupport(params).then((response) =>
            commit('ADD_NEW_SUPPORT', response.data)
        );
    },

    createNewReplySupport({ commit }, params) {
        return SupportService.newReplySupport(params).then((response) => {
            const data = {
                reply: response.data,
                supportId: params.support,
            };
            commit('ADD_NEW_REPLY_SUPPORT', data);
        });
    },

    getMySupports({ commit }, status) {
        return SupportService.getMySupports(status).then((response) =>
            commit('SET_SUPPORTS', response)
        );
    },
};

export default actions;