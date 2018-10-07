<template>
    <div class="card">
      <ul class="list-group list-group-flush" >
        <li class="list-group-item">
          <a href="javascript:void(0)" style="text-decoration: none" @click="unsetCategoryIdJob()">
            All
          </a>
        <span class="badge badge-pill badge-danger" v-text="this.jobs_count"></span>
        </li>
        <li class="list-group-item" v-for="category in this.categories" :key="category.id">
          <a href="javascript:void(0)" style="text-decoration: none" @click="setCategoryIdJob(category.id)">
          {{category.name}}
          </a>
        <span class="badge badge-pill badge-danger" v-text="category.jobs_count"></span>
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
        jobs_count: 0,
      }
    },
    created(){
        axios.get('/api/categories/jobs')
              .then( (response) => this.categories = response.data  )
              .then( (response) => console.log(this.categories) )
              .catch( (error) => console.log(error) );

        EventBus.$on('allJobCount', (jobs_count) => {
          console.log(jobs_count + ' jobs');
          this.jobs_count = jobs_count;
        });
    },
    methods:{
        setCategoryIdJob(category_id){
            EventBus.$emit('setCategoryJob', category_id);
        },
        unsetCategoryIdJob(){
            EventBus.$emit('unsetCategoryJob');
        }
    }
	}
</script>