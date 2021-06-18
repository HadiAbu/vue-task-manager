<template>
    <header>
        <h1>{{title}}</h1>
        <Button v-show='homepage' @toggle-show="$emit('toggle-show')" :text="`${!show?'Add Task':'Hide Form'}`" :color="`${!show?'green':'red'}`"/>
    </header>
</template>

<script>
import Button from './Button.vue';

export default{
    name: 'Header',
    props: {
        title:{
            type: String
        },
        show: Boolean
    },
    components:{
        Button
    },
    computed:{
        homepage(){
            if(this.$route.path === '/'){
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>
    h1{
        color:red;
    }
    header{
        display: flex; justify-content: space-between;
        align-items: center; margin-bottom: 20px;

    }
</style>
