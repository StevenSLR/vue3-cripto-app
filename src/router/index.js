import { createWebHashHistory, createRouter } from "vue-router";
import MainPage from "../views/MainPage";
import InfoPage from "../views/InfoPage";

const routes = [
    {
        path: "/",
        component: MainPage,
        name: "MainPage",
    },
    {
        path: "/crypto/:id",
        component: InfoPage,
        name: "InfoPage",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;