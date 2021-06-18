<template>
    <AddTask v-show="showForm" @add-task="addTask" />
    <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
    />
</template>

<script>

import Tasks from '../components/Tasks.vue'; 
import AddTask from '../components/AddTask.vue';

export default{
    name: 'Home',
    props:{
        showForm: Boolean
    },
    components:{
        Tasks, AddTask
    },
    data(){
        return{
            tasks: [],
        }
    },
    methods:{
     async toggleReminder(id){
      const toggledTask = await this.fetchTask(id);
      const updatedTask = {...toggledTask, reminder: !toggledTask.reminder};

      const res = await fetch(`api/tasks/${id}`,{
          method:'PUT',
          headers:{
            'Content-type':'application/json'
          },
          body: JSON.stringify(updatedTask)
        });

      const data = await res.json();

      this.tasks = this.tasks.map(task => (task.id===id) ? 
      {...task, reminder: data.reminder} : task);
    },
    async addTask(newTask){
      const res = await fetch('api/tasks', {
        method: "POST",
        headers: {
          'Content-type':'application/json',
        },
        body: JSON.stringify(newTask)
      });

      const data = await res.json();

      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id){
      const res = await fetch(`api/tasks/${id}`,{
        method: 'DELETE',
      }) 
      if(res.status === 200){
        this.tasks = this.tasks.filter(task => task.id!==id);
      } else{
        alert('Error deleting task');
      }
    },
    async fetchTasks(){
      const res = await fetch('api/tasks');
      const data = await res.json();
      
      return data;
    },
    async fetchTask(id){ 
      const res = await fetch(`api/tasks/${id}`); 
      const data = await res.json(); 
      
      return data; 
    }
  },
  async created(){//lifecycle method (we used them for example with http requests, where we want to load the data when it's created)
    this.tasks = await this.fetchTasks();
  }
}

</script>