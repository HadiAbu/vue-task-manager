<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder && 'reminder','task']">
        <h3>
            {{task.text}}
            <i @click="deleteTask(task.id)" class="fas fa-times"></i>  
        </h3>
        <span>{{task.day}}</span>
    </div>
</template>

<script>
    export default{
        name: 'Task',
        props: {
            task: Object
        },
        methods:{
            deleteTask(id){
                this.$emit('delete-task', id);
            }
        }
    }
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: #f8f8f8;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(1, 1, 1, 0.15);
  transition: transform 200ms ease-in-out, box-shadow ease-in-out;
}
.task:hover{ 
    transform: translateY(-4px); box-shadow: 0px 4px 12px rgba(1, 1, 1,0.25);
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>