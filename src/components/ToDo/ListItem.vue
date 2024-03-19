<script setup lang="ts">
import type { TodoItem } from '@/types/todo';
import { getNormalDate } from '@/utils';

const props = defineProps<{ todo: TodoItem }>();

const emit = defineEmits<{ (event: 'deleteToDo', val: number): void }>();

const handleDelete = () => {
    emit('deleteToDo', props.todo.id);
};
</script>

<template>
    <div class="list-item">
        <div class="text-checkbox-wrapper">
            <input class="completed-input" type="checkbox" v-model="props.todo.isCompleted" />
            <div class="text" :class="{ 'with-through': props.todo.isCompleted }">
                {{ props.todo.text }}
            </div>
        </div>

        <div>
            <code class="creation-date" :title="getNormalDate(props.todo.date).time">{{
                getNormalDate(props.todo.date).day
            }}</code>
            <button class="delete-button" @click="handleDelete">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.list-item {
    display: flex;
    height: 40px;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #c9c9c9;
}

.text-checkbox-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.delete-button {
    width: 54px;
    height: 30px;
    border: 1px solid #ff6b6b;
    border-radius: 5px;
    cursor: pointer;
    color: rgb(46, 46, 46);
    font-weight: 800;
    transition: 0.1s;
    transition: 0.1s;
    margin-left: 10px;
}

.delete-button:hover {
    background-color: rgb(255, 0, 0);
    color: #fff;
    margin-left: 15px;
}

.with-through {
    text-decoration: line-through;
}

.completed-input {
    cursor: pointer;
}

.creation-date {
    font-size: 10px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.432);
    padding: 5px;
    border-radius: 2px;
}

.text {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 210px;
}
</style>
