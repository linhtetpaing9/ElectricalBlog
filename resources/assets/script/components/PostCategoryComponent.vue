<template>
    <div class="card">
      <ul class="list-group list-group-flush" >
        <li class="list-group-item">
          <a href="javascript:void(0)" style="text-decoration: none" @click="unsetCategoryId()">
            All
          </a>
        <span class="badge badge-pill badge-danger" v-text="this.posts_count"></span>
        </li>
        <li class="list-group-item" v-for="category in this.categories" :key="category.id">
          <a href="javascript:void(0)" style="text-decoration: none" @click="setCategoryId(category.id)">
          {{category.name}}
          </a>
        <span class="badge badge-pill badge-danger" v-text="category.posts_count"></span>
        </li>
      </ul>
    </div> 
</template>

<script>
  import EventBus from './event-bus.js' 
	export default{
    props: {
      myProp: String
    },
    data(){
      return {
        categories: [],
        posts_count: 0,
      }
    },
    created(){
        axios.get('/api/categories/posts')
              .then( (response) => this.categories = response.data  )
              .then( (response) => console.log(this.categories) )
              .catch( (error) => console.log(error) );

        EventBus.$on('allPostCount', (posts_count) => {
          console.log(posts_count + ' posts');
          this.posts_count = posts_count;
        });
    },
    methods:{
        setCategoryId(category_id){
            EventBus.$emit('setCategory', category_id);
        },
        unsetCategoryId(){
            EventBus.$emit('unsetCategory');
        }
    }
	}
</script>