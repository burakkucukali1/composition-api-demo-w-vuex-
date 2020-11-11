import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
