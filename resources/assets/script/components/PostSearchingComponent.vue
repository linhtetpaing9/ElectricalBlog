<template>
    <div class="container">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" v-model="search">
            <div class="input-group-append">
                <button class="btn btn-info"><span class="fa fa-search"></span></button>
            </div>
        </div>
        <div class="post-preview" v-for="post in filteredPosts">
          <a :href="postUrl + post.id">
            <h2 class="post-title"> {{ post.title }} </h2>
            <span class="text-success">continue reading</span>
          </a>
          <br>
            <span class="badge badge-danger" v-for="categories in post.categories" style="margin-left: 5px"><a href="javascript:void(0)" class="text-white" style="text-decoration: none">
            {{ categories.name }}</a></span>
            
            
          <p class="post-meta"></p>
        </div>
    <hr>
    <!-- Pager -->
    </div>
</template>

<script>
import EventBus from './event-bus.js' 

  export default {

    props: {
      myProp: String
    },
    data(){
      return {
        search: '',
        posts: [],
        category_id: '',
        postUrl: '/posts/',
        jsonUrl: '/api/posts/categories',
      }
    },
    created(){
        this.getJson();
              
        EventBus.$on('setCategory', (category_id) => {
          this.category_id = category_id;  
          console.log('setCategory event caught', this.category_id);
          axios.get('/categories/'+ this.category_id +'/posts')
              .then( (response) => this.posts = response.data  )
              .catch( (error) => console.log(error) );
        });

        EventBus.$on('unsetCategory', () => {
          console.log('unsetCategory event caught');
          axios.get(this.jsonUrl)
              .then( (response) => this.posts = response.data  )
              .catch( (error) => console.log(error) );
        });

    },
    methods: {
      getJson(){
        axios.get(this.jsonUrl)
          .then( (response) => this.posts = response.data  )
          .then( (response) => EventBus.$emit('allPostCount', this.posts.length) )
          .catch( (error) => console.log(error) );
      },
    },
    computed: {
      filteredPosts() {
        return this.posts.filter(item => {
          return item.title.toLowerCase().includes(Rabbit.zg2uni(this.search).toLowerCase())
        })
      },
    }
  }
</script>
