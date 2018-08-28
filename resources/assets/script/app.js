import './bootstrap';


Vue.component('posts-searching', require('./components/PostSearchingComponent.vue'));
Vue.component('issues-display', require('./components/IssueDisplayComponent.vue'));

new Vue({
    el: '#app'
});
