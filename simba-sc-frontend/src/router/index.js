import Vue from 'vue'
import VueRouter from 'vue-router'
import EmptyRouterView from '../views/pages/EmptyRouterView.vue';
import Home from '../views/pages/Home.vue'
import News from '../views/pages/News.vue';
import Fixtures from '../views/pages/Fixtures.vue';
import Players from '../views/pages/Players.vue';
import FirstTeam from '../views/pages/FirstTeam.vue';
import U18 from '../views/pages/U18.vue';
import SimbaTV from '../views/pages/SimbaTV.vue';
import Stadium from '../views/pages/Stadium.vue';
import Events from '../views/pages/Events.vue';
import Club from '../views/pages/Club.vue';
import Login from '../views/Authentication/Login.vue';
import Logout from '../views/Authentication/Logout.vue';
import Registration from '../views/Authentication/Registration.vue';
import Authentication from '../components/Auth/Authentication.vue';
import AdminDashboard from '../views/Dashboards/Admin.vue';
import SubscriberProfile from '../views/Dashboards/Subscriber.vue';
import SubscriberRegistration from '../views/Authentication/SubscriberRegistration.vue';


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/fixtures',
    name: 'fixtures',
    component: Fixtures
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/players',
    name: 'players',
    component: Players,
    children:[
      {
        path: '',
        name:'Empty',
        component: EmptyRouterView,
      },    
      {
        path:'first-team',
        name:'firstTeam',
        component:FirstTeam
      },
      {
        path:'U18',
        name:'U18',
        component:U18
      },

    ]
  },
  {
    path:'/club',
    name:'club',
    component:Club
  },
  {
    path: '/simbaTV',
    name: 'simbaTV',
    component: SimbaTV
  },
  {
    path: '/stadium',
    name: 'stadium',
    component: Stadium
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path:'/signup',
    name:'signup',
    component:SubscriberRegistration
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: Authentication
  },
  {
    path: '/admin',
    name: 'adminDashboard',
    component: AdminDashboard
  },
  {
    path: '/profile',
    name: 'profile',
    component: SubscriberProfile
  },

  // {
  //   path: '/',
  //   component: EmptyRouterView,
  //   children: []
  // }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/home','/club', '/events', '/fixtures', '/players', '/stadium','/players/first-team', 'players/U18'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // try to access a restricted page + not logged in
//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// });

export default router
