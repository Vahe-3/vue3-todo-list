<script setup lang="ts">
import type { TodoItem } from '@/types/todo';
import ListItem from './ListItem.vue';

const props = defineProps<{ todos: TodoItem[] }>();

const deleteToDo = (id: number) => {
    const index = props.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        props.todos.splice(index, 1);
    }
};
</script>

<template>
    <div class="list" :class="{ 'list-border-top': props.todos.length }">
        <ListItem
            v-for="todo in props.todos"
            :todo="todo"
            :key="todo.id"
            @delete-to-do="deleteToDo"
        />
    </div>
</template>

<style scoped>
.list-border-top {
    width: 430px;
    margin: 0 auto;
    border-top: 1px solid #c9c9c9;
}
</style>
