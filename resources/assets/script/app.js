import './bootstrap';

require('./../talvbansal/media-manager/js/media-manager');

Vue.component('postSearchingComponent', require('./components/PostSearchingComponent.vue'));
Vue.component('jobSearchingComponent', require('./components/JobSearchingComponent.vue'));
Vue.component('postShowComponent', require('./components/PostShowComponent.vue'));
Vue.component('bookShowComponent', require('./components/BookShowComponent.vue'));
Vue.component('jobShowComponent', require('./components/JobShowComponent.vue'));
Vue.component('postCategoryComponent', require('./components/PostCategoryComponent.vue'));
Vue.component('jobCategoryComponent', require('./components/JobCategoryComponent.vue'));
Vue.component('createCategoryComponent', require('./components/categories/CreateCategoryComponent.vue'));
Vue.component('fileBrowserComponent', require('./components/FileBrowserComponent.vue'));
// Vue.component('videoPlayerComponent', require('./components/VideoPlayerComponent.vue'));

Vue.config.devtools = true

new Vue({
    el: '#app',
});
