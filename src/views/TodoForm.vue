<template>
    <div class="text-center flex justify-center flex-col">
        <input
            type="text"
            v-model="newTodoItem"
            class="px-4 py-3 rounded-lg border border-gray-400"
            placeholder="Some thing...."
        />
        <button
            class="py-2 mt-4 text-center rounded-lg w-full bg-primary text-yellow-100"
            @click="addNewTodoItem()"
        >
            ADD
        </button>
    </div>
</template>

<script>
export default {
    name: 'TodoForm',
    data() {
        return {
            newTodoItem: '',
        };
    },
    methods: {
        addNewTodoItem() {
            this.$store.dispatch('add', this.newTodoItem);
        },
    },
};
</script>

<style lang="scss" scoped></style>
