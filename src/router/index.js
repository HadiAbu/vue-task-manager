import {createRouter, createWebHistory} from 'vue-router';

import About from "../views/About";
import Home from "../views/Home";

const routes = [
    {
        name:'Home',
        path: '/',
        component:Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;