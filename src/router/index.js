import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from '../Pages/DashBoard/Dashboard'
import Homepage from '../Pages/HomePage/Navbar'
import Htmlbasic from "../views/dashboard/LanguageViewList/HtmlBasic";
import QuizSection from '../Pages/QuizSection/Quiz'
import Activity from '../Pages/ActivityPage/Activity'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/activity",
    component: Activity,
  },
  {
    path: "/quiz/:qid",
    component: QuizSection,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/:id",
        name: "language",
        component: Htmlbasic,
        children: [
          {
            path: "/dashboard/:id/:cid",
            name: "language",
            component: Htmlbasic,
          }
        ]
      },
    ],
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
