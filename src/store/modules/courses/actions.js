import CourseService from '@/services/CourseService';

const actions = {
    getCourses({ commit }) {
        CourseService.getCourses().then((response) => commit('ADD_MY_COURSES', response.data));
    },
};

export default actions;