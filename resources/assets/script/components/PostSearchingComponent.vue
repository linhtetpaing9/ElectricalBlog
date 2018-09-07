<template>
    <div>
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
            <span class="badge badge-danger" v-for="categories in post.categories" style="margin-left: 5px"><a href="javascript:void(0)" class="text-white" style="text-decoration: none">{{ categories.name }}</a></span>
            
            
          <p class="post-meta"></p>
        </div>
    <hr>
    <!-- Pager -->
    <div class="clearfix">
      <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
    </div>
    </div>
</template>

<script>

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
        categoryUrl: '/categories/'
      }
    },
    created(){
        axios.get('/categories/posts')
              .then( (response) => this.posts = response.data  )
              .then( (response) => window.events.$emit('allPostCount', this.posts.length) )
              .catch( (error) => console.log(error) );

        window.events.$on('setCategory', (category_id) => {
          this.category_id = category_id;  
          console.log('setCategory event caught', this.category_id);
          axios.get('/categories/'+ this.category_id +'/posts')
              .then( (response) => this.posts = response.data  )
              .catch( (error) => console.log(error) );
        });

        window.events.$on('unsetCategory', () => {
          console.log('unsetCategory event caught');
          axios.get('/categories/posts')
              .then( (response) => this.posts = response.data  )
              .catch( (error) => console.log(error) );
        });

    },
    computed: {
      filteredPosts() {
        return this.posts.filter(item => {
          return item.title.toLowerCase().includes(this.search.toLowerCase())
        })
        
      }
    }
  }
</script>
