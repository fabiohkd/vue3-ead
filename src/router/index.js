import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/HomeView.vue';
import MySupports from '@/views/supports/MySupportsView.vue';
import ModulesAndLessons from '@/views/modules/ModulesAndLessonsView.vue';
import Auth from '@/views/auth/AuthView.vue';
import ForgetPassword from '@/views/auth/ForgetPasswordView.vue';
import ResetPassword from '@/views/auth/ResetPasswordView.vue';

const router = createRouter({
    history: createWebHistory(''),
    routes: [{
            path: '/campus',
            name: 'campus',
            component: () =>
                import ('@/layouts/DefaultTemplate.vue'),
            children: [{
                    path: 'modulos',
                    name: 'campus.modulos',
                    component: ModulesAndLessons,
                },
                {
                    path: 'minhas-duvidas',
                    name: 'campus.my.supports',
                    component: MySupports,
                },
                {
                    path: '',
                    name: 'campus.home',
                    component: Home,
                },
            ],
        },
        {
            path: '/',
            name: 'auth',
            component: Auth,
        },
        {
            path: '/recuperar-senha',
            name: 'forget.password',
            component: ForgetPassword,
        },
        {
            path: '/reset/:token',
            name: 'reset.password',
            component: ResetPassword,
            props: true,
        },
    ],
});

export default router;