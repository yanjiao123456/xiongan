import Vue from 'vue';
import App from './App';

// ==========================================================================
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
Vue.use(ElementUI, { size: 'small' });

// ==========================================================================
import '../static/css/icon.css';
import "babel-polyfill";
// ==========================================================================
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
// ==========================================================================
import axios from 'axios';
Vue.prototype.$axios = axios;


axios.defaults.baseURL = 'http://10.76.107.100:18080/jinfeng';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



// ==========================================================================

// import Icon from 'vue-svg-icon/Icon.vue'
// Vue.component('icon', Icon)
// Icon.inject('dlz'); // SVG图片名字（无扩展名）


// ==========================================================================

import router from './router';
//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem('ms_username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     } else {
//         // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//         if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//             Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//                 confirmButtonText: '确定'
//             });
//         } else {
//             next();
//         }
//     }
// })
// ===========================================================================
var vm = new Vue({
    router,
    axios,
    render: h => h(App)
}).$mount('#app');
