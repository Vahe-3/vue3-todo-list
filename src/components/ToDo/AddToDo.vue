<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');

const emit = defineEmits<{ (event: 'addToDo', val: string): void }>();

const handleSave = () => {
    if (text.value.trim()) {
        emit('addToDo', text.value);
        text.value = '';
    }
};
</script>

<template>
    <div class="add-to-do">
        <input class="input" type="text" v-model="text" @keyup.enter="handleSave" />
        <button class="save-button" @click="handleSave">Save</button>
    </div>
</template>

<style scoped>
.add-to-do {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.input {
    all: unset;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    width: 350px;
    padding: 5px;
    font-size: 15px;
    font-weight: 400;
}

.input:focus {
    outline: none !important;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
}

.save-button {
    width: 54px;
    background-color: #00ccff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: rgb(46, 46, 46);
    font-weight: 800;
    transition: 0.1s;
}

.save-button:hover {
    background-color: #0099ff;
}
</style>
