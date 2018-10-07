<template>

  <div>
    <br>

      <h2 v-text="job.title"></h2>
      <h4 class="text-success" v-text="job.author"></h4>
      <span class="badge bg-info" v-for="category in job.categories" :key="category.id + '-label'" v-text="category.name" style="margin-left: 10px"></span>

      <br>
      <br>
      <div v-html="job.body"></div>
</div>
</template>

<script>

  export default {
    data(){
        return {
          job: [],
          user: [],
          job_id: window.location.href.split('jobs/').pop(),
        }
    },
    mounted(){
        this.getJob();
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
        getJob() {
          axios.get( '/api/jobs/' + this.job_id  )
              .then( (response) => this.job = response.data  )
              .catch( (error) => console.log(error) );
        },
        getAuthUser(){
          axios.get( '/api/isCurrentUsers/' )
              .then( (response) => this.user = response.data  )
              .catch( (error) => console.log(error) );
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