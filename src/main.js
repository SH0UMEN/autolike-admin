import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

let vuetify = new Vuetify();

Vue.config.productionTip = false;

const token = localStorage.getItem('admin-token');

if (token) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

axios.interceptors.response.use(null,(err)=>{
  if(err.response) {
    if(err.response.data.errors) {
      if(err.response.data.errors.token == "Token is Expired") {
        return store.dispatch('refresh').then(()=>{
          let data = err.response.config.data;

          return axios({
            method: err.response.config.method,
            url: err.response.config.url,
            data: data ? JSON.parse(data) : undefined
          }).then((res)=>{
            return Promise.resolve(res);
          })
        });
      } else if (err.response.data.errors.token == "Token is Invalid"){
        store.commit('logout');
        router.push({ name: 'login' });
      }
    }
  }
  return Promise.reject(err)
});

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
