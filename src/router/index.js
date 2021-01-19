import { createRouter, createWebHistory } from "@ionic/vue-router";
import Tabs from "../views/Tabs.vue";
import Timeline from "../views/Timeline.vue";

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
      }
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
        component: () => import("@/views/Profile.vue")
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
