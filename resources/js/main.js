
import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue'
import store from './store'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)


const app = new Vue({
    el: '#app',
    store,
    render: h => h(App)
});