import NotFoundView from "../components/404.vue"
import index from '../pages/index'
import users from '../pages/users'
import login from '../pages/login'
import app from '../App'

const routes = [
  {path:"/login", component:login},
  {
    path: "", component: app, children:[
      {path:'/index', component:index},
      {path:"/users", component:users}
    ]
  },
  {path: '*', component: NotFoundView}
];


export default routes
