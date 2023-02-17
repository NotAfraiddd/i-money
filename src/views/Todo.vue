<template>
    <div class="w-full flex justify-between items-center text-center">
        <span @click="toggleTodoStatus()">{{ item.title }}</span>
        <button
            class="py-2 text-center rounded-lg text-black"
            @click="deleteItem()"
        >
            DELETE
        </button>
    </div>
</template>

<script>
export default {
    name: 'TodoView',
    props: ['item'],
    methods: {
        deleteItem() {
            this.$store.dispatch('delete', this.item);
        },
        toggleTodoStatus() {
            this.$store.dispatch('toggle', this.item);
        },
    },
};
</script>

<style lang="scss" scoped></style>
