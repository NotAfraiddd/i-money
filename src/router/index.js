import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "home" */ '../views/index.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            layout: 'auth',
        },
        component: () =>
            import(/* webpackChunkName: "register" */ '../views/register.vue'),
    },
    {
        path: '/login',
        // khi router-link là dùng name của cái này
        name: 'Logina',
        meta: {
            layout: 'auth',
        },
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
