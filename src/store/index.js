import { createStore } from 'vuex';
// Create a new store instance.
const store = createStore({
    state() {
        return {
            todoList: [
                { title: 'todo a', completed: false },
                { title: 'todo b', completed: true },
            ],
        };
    },
    mutations: {
        NEW_TODO(state, todoItem) {
            state.todoList.push({
                title: todoItem,
                completed: false,
            });
        },
        INDEX_TODO(state, todoItem) {
            let index = state.todoList.indexOf(todoItem);
            state.todoList.splice(index, 1);
        },
        INDEX_TOGGLE(state, todoItem) {
            todoItem.completed = !todoItem.completed;
        },
    },
    actions: {
        add({ commit }, todoItem) {
            commit('NEW_TODO', todoItem);
        },
        delete({ commit }, todoItem) {
            commit('INDEX_TODO', todoItem);
        },
        toggle({ commit }, todoItem) {
            commit('INDEX_TOGGLE', todoItem);
        },
    },
});

export default store;
