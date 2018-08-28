<template>
    <div>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" v-model="search">
            <div class="input-group-append">
                <button class="btn btn-info"><span class="fa fa-search"></span></button>
            </div>
        </div>
        <div class="post-preview" v-for="post in filteredPosts" :key="post.id">
          <a :href="url + post.id">
            <h2 class="post-title"> {{ post.title }} </h2>
            <a :href="url + post.id" class="text-success">continue reading</a>
          </a>
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
    name: 'posts-searching',
    props: {
      myProp: String
    },
    data(){
      return {
        search: '',
        posts: [],
        url: '/posts/'
      }
    },
    created(){
        axios.get('/api/posts')
              .then( (response) => this.posts = response.data  )
              .then( (response) => console.log(response) )
              .catch( (error) => console.log(error) );
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
