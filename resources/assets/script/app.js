import './bootstrap';

Vue.component('postSearchingComponent', require('./components/PostSearchingComponent.vue'));
Vue.component('postShowComponent', require('./components/PostShowComponent.vue'));
Vue.component('postCategoryComponent', require('./components/PostCategoryComponent.vue'));

new Vue({
    el: '#app'
});
