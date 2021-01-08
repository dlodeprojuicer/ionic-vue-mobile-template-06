import { createRouter, createWebHistory } from "@ionic/vue-router";
import Tabs from "../views/Tabs.vue";
import Timeline from "../views/Timeline/Index.vue";

const routes = [
  {
    path: "/",
    redirect: "/timeline",
  },
  {
    path: "/timeline",
    component: Tabs,
    children: [
      {
        path: "",
        name: "timeline",
        component: Timeline,
      },
      {
        path: "destination",
        redirect: { name: "timeline" },
      },
    ],
  },

  {
    path: "/user/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: { name: "profile" },
      },
      {
        name: "profile",
        path: "profile",
        component: () => import("@/views/Profile/Index.vue")
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
