import BaseService from './BaseService';

export default class CourseService extends BaseService {
    static async getCourses() {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('/courses')
                .then((response) => resolve(response.data))
                .catch((error) => reject(error.response));
        });
    }
}