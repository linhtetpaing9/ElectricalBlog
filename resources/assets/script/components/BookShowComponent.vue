<template>

  <div>
    <br>
      <div class="row">
        <div class="col-lg-4">
          <img :src="book.book_image" width="250" height="250">
        </div>
        <div class="col-lg-8">
          <h2 v-text="book.book_name"></h2>
          <h4 class="text-success" v-text="book.author"></h4>
          <span class="badge bg-info" v-for="category in book.categories" :key="category.id + '-label'" v-text="category.name" style="margin-left: 10px"></span>
          <p> <span class="badge bg-danger text-white" v-text="book.recommends_count"></span> recommended </p>
          <form @submit.prevent="onSubmitRecommend" v-if="isUserLogin">
            <input type="hidden" v-model="formRecommend.recommendable_id = this.book_id">
            <input type="hidden" v-model="formRecommend.user_id = this.user.id">
            <input type="hidden" v-model="formRecommend.recommendable_type = 'ElectricalBlog\\Book'">
            <input type="hidden" v-model="formRecommend.recommendable">
            <button type="submit" @click="recommendOption" :class="recommendSign" v-text="recommendText"></button>
          </form>
          
        </div>
      </div>
      
      
      
      
      
      <br>
      <br>
      <div v-html="book.review"></div>
</div>
</template>

<script>

  export default {
    data(){
        return {
          formRecommend: new Form({
            recommendable_type: 'ElectricalBlog\\Book',
            recommendable_id: '',
            user_id: '',
            recommendable: ''
          }),
          book: [],
          user: [],
          currentUser: false,
          book_id: window.location.href.split('books/').pop(),
          displayNone: true,
          display: false,
          recommendSign: '',
          recommendText: '',

        }
    },
    mounted(){
        this.getBook();
        this.getAuthUser();
    },
    computed: {
        isUserLogin(){
          if(this.user == ''){
            return false;
          }else{
            return true;
          }
          
        }
    },
    methods: {
        getBook() {
          axios.get( '/api/books/' + this.book_id  )
              .then( (response) => this.book = response.data  )
              .then( (response) => console.log(this.book) )
              .catch( (error) => console.log(error) );
        },
        getAuthUser(){
          axios.get( '/api/isCurrentUsers/' )
              .then( (response) => this.user = response.data  )
              .then( (response) => this.isCurrentUser(this.book.recommends, this.user))
              .then( (response) => console.log(this.currentUser))
              .catch( (error) => console.log(error) );
        },
        onSubmitRecommend(){
            this.formRecommend.post('/admin/recommends')
                    .then( response => this.getBook());
        },
        
        isCurrentUser(recommends , user){
          if(recommends.length > 0){
            for(var i=0; i<recommends.length; i++){
              // console.log(user);
              if( user.id === recommends[i].user_id){
                this.recommendText = 'Recommended';
                this.recommendSign = 'btn btn-success';
                this.formRecommend.recommendable = true;
              }else if(user.id !== recommends[i].user_id){
                this.recommendText = 'Recommend';
                this.recommendSign = 'btn btn-secondary';
                this.formRecommend.recommendable = false;
              }
            }
          }else{
            this.recommendText = 'Recommend';
            this.recommendSign = 'btn btn-secondary';
            this.formRecommend.recommendable = false;
          }
        },
        recommendOption() {

          if(this.recommendSign == 'btn btn-secondary'){
            this.recommendSign = 'btn btn-success';
            this.recommendText = 'Recommended';
            this.formRecommend.recommendable = true;
          }else{
            this.recommendSign = 'btn btn-secondary';
            this.recommendText = 'Recommend';
            this.formRecommend.recommendable = false;
          }
        },
        
    }

  }
</script>

<style scoped>
  .boxShadow{
    padding: 15px;
    box-shadow: 0px 0px 20px -5px grey;
  }
</style>