<template>
    <div class="flex justify-center flex-col items-center">
        <h1 class="w-full text-center font-bold text-lg">Todo App</h1>
        <TodoList />
        <TodoForm />
    </div>
</template>

<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
export default {
    name: 'HomeView',
    components: {
        TodoList,
        TodoForm,
    },
};
</script>
