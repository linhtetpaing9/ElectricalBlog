<template>
  <div>
      <h2 class="section-heading">{{ post.title }}</h2>
      
      
      <span class="badge bg-info" v-for="category in post.categories" :key="category.id + '-label'" v-text="category.name" style="margin-left: 10px"></span>
      <p class="text-danger"> {{ post.recommend_point}} recommended </p>
      <button @click="recommendOption" :class="recommendSign" v-text="recommendText"></button>
      <div v-html="post.body"></div>

      <br>
      <hr>
      <br>
      <h2 class="text-secondary">Questions</h2>
      <div class="panel panel-white post panel-shadow"
      v-for="issue in post.issues" :key="issue.id" style="margin-bottom: 10px">
        <div class="post-heading">
            <div class="pull-left image">
                <img src="http://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image">
            </div>
            <div class="pull-left meta">
                <div class="title h5">
                    <a href="#"><b>Ryan Haywood</b></a>
                    made a question.     
                </div>
                <h6 class="text-muted time">1 minute ago</h6>
            </div>
            <a href="javascript:void(0)">
              <i class="fa fa-trash-o text-danger" style="float: right; font-size:20px"></i>
            </a>
            <a href="javascript:void(0)">
            <i class="fa fa-edit text-info" style="float: right; margin-right: 10px;">
            </i>
            </a>
            
        </div> 
        <div class="post-description">
            <h3 :class="{displayNone: display}">{{ issue.title }}</h3>
            <input type="text" class="form-control" :class="{ displayNone: displayNone }">
            <p :class="{displayNone: display}">{{ issue.body }}</p>
            <textarea class="form-control" :class="{ displayNone: displayNone }" rows="10"></textarea>
        </div>

      </div>
      <br>
      <br>
      
      <div class="container">
        <form @submit.prevent="onSubmit" 
        @keydown="form.errors.clear($event.target.name)">
           
          <div class="form-group row">
            <h2 class="text-secondary">Do You Have Any Question ?</h2>
          </div>
          <div class="form-group row">
            <label for="title">Question Title</label>
              <input type="text" class="form-control" v-model="form.title" name="title">
              <span class="help-block text-danger" 
              v-show="form.errors.has('title')" 
              v-text="form.errors.get('title')">
              </span>
          </div>
          <div class="form-group row">
            <label for="body">Question</label>
              <textarea type="text" class="form-control" rows="10" name="body" v-model="form.body"></textarea>
              <span class="help-block text-danger" 
              v-show="form.errors.has('body')" 
              v-text="form.errors.get('body')">
              </span>
          </div>
          <div class="form-group row">
            <button class="btn btn-secondary" 
            :disabled="form.errors.any()">Submit</button>
          </div>
        </form>
      </div>
</div>
</template>

<script>

  export default {
    data(){
        return {
          form: new Form({
            title: '',
            body : ''
          }),
          post: [],
          post_id: window.location.href.split('posts/').pop(),
          displayNone: true,
          display: false,
          recommendSign: 'btn btn-secondary',
          recommendText: 'Recommend',

        }
    },
    created(){
        this.getIssue();
    },

    methods: {
        getIssue() {
          axios.get( '/api/posts/' + this.post_id + '/issues' )
              .then( (response) => this.post = response.data  )
              .then( (response) => console.log(response) )
              .catch( (error) => console.log(error) );
          console.log(this.post_id);
        },
        onSubmit() {
            this.form.post( '/admin/posts/' + this.post_id + '/issues' )
                    .then( response => this.getIssue() );    
        },
        recommendOption() {
          if(this.recommendSign == 'btn btn-secondary'){
            this.recommendSign = 'btn btn-success';
            this.recommendText = 'Recommended';
          }else{
            this.recommendSign = 'btn btn-secondary';
            this.recommendText = 'Recommend';
          }
        }
    }

  }
</script>

