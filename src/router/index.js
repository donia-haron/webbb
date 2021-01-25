import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import help from "../views/help.vue";
import Blog from "../components/BlogPosts.vue";
import Profile from "../views/Profile.vue";
import Orders from "../views/Orders.vue";
import PersonalInfo from "../views/PersonalInfo.vue";
import jumpsuits from "../views/jumpsuits.vue";
import dresses from "../views/dresses.vue";
import blouses from "../views/blouses.vue";
import skirts from "../views/skirts.vue";
import addproduct from "../views/addproduct.vue";
import coats from "../views/coats.vue";
import pants from "../views/pants.vue";
import sweatshirts from "../views/sweatshirts.vue";
import blazers from "../views/blazers.vue";
import brands from "../views/brands.vue";
import brandprofile from "../views/brandprofile.vue";
import test from "../views/test.vue";

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSession from 'vue-session';
Vue.use(VueSession);
Vue.use(axios, VueAxios);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/jumpsuits",
    name: "jumpsuits",
    component: jumpsuits
    }
    ,{
        path: "/brands",
        name: "brands",
        component: brands
    }
    ,  {
        path: "/brandprofile",
        name: "brandprofile",
        component: brandprofile
    },
     {
        path: "/addproduct",
        name: "addproduct",
        component: addproduct
    },
    {
        path: "/test",
        name: "test",
        component: test
    },
  {
    path: "/dresses",
    name: "dresses",
    component: dresses
  },
  {
    path: "/blouses",
    name: "blouses",
    component: blouses
  },
  {
    path: "/skirts",
    name: "skirts",
    component: skirts
  },
  {
    path: "/pants",
    name: "pants",
    component: pants
  },
  {
    path: "/coats",
    name: "coats",
    component: coats
  },
  {
    path: "/sweatshirts",
    name: "sweatshirts",
    component: sweatshirts
  },
 
  {
    path: "/blazers",
    name: "blazers",
    component: blazers
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
    },

  {
      path: "/help",
      name: "Help",
      component: help
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog
    },
    
    {
        path: "/profile",
        name: "profile",
        component: Profile
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
  },
 
  {
    path: "/personalinfo",
    name: "personalinfo",
    component: PersonalInfo
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
