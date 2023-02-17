<template>
    <div class="py-2 w-80">
        <Todo v-for="(item, index) in todoList" :key="index" :item="item" />
    </div>
</template>

<script>
import Todo from './Todo.vue';
export default {
    name: 'TodoListView',
    components: {
        Todo,
    },
    computed: {
        todoList() {
            return this.$store.state.todoList;
        },
    },
};
</script>

<style lang="scss" scoped></style>
