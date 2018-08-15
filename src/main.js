import Vue from 'vue'
import App from './App.vue'
import './css/global.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuex from 'vuex';
Vue.use(Vuex);
//element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

Vue.config.productionTip = false
import Home from './page/Home';

const router = new VueRouter({
  routes : [
    {path:'/',component:Home,meta:{title:'首页 |snowsilde'}},
  ]
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next();
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
