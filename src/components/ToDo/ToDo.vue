<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
import AddToDo from './AddToDo.vue';
import Header from './Header.vue';
import List from './List.vue';
import type { TodoItem } from '@/types/todo';
import Footer from './ Footer.vue';

const storedToDos = JSON.parse(localStorage.getItem('todos') || '[]');
const todos = reactive<TodoItem[]>([...storedToDos]);

const handleAddToDo = (text: string) => {
    const todo = {
        id: Math.random(),
        text,
        isCompleted: false,
        date: new Date(),
    };

    todos.unshift(todo);
};

const handelCheckAllCompleted = (val: boolean) => {
    todos.forEach((todo) => {
        todo.isCompleted = val;
    });
};

const handleDeleteAllToDos = () => {
    todos.splice(0, todos.length);
};

const handleDeleteAllCompletedToDos = () => {
    todos.splice(0, todos.length, ...todos.filter((todo) => !todo.isCompleted));
};

watchEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
});
</script>

<template>
    <div class="to-do">
        <Header />
        <AddToDo @add-to-do="handleAddToDo" />
        <List :todos />
        <Footer
            v-if="todos.length"
            @check-all="handelCheckAllCompleted"
            @delete-all="handleDeleteAllToDos"
            @delete-all-completed="handleDeleteAllCompletedToDos"
        />
    </div>
</template>

<style scoped>
.to-do {
    width: 500px;
    margin: 50px auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
