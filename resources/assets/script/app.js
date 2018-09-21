import './bootstrap';
require('./../talvbansal/media-manager/js/media-manager');

Vue.component('postSearchingComponent', require('./components/PostSearchingComponent.vue'));
Vue.component('postShowComponent', require('./components/PostShowComponent.vue'));
Vue.component('postCategoryComponent', require('./components/PostCategoryComponent.vue'));
Vue.component('CreateCategoryComponent', require('./components/categories/CreateCategoryComponent.vue'));
Vue.component('fileBrowserComponent', require('./components/FileBrowserComponent.vue'));

Vue.config.devtools = true

new Vue({
    el: '#app',
});
