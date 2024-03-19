<script setup lang="ts">
import TrashIcon from '../icons/TrashIcon.vue';

const emit = defineEmits<{
    (event: 'checkAll', val: boolean): void;
    (event: 'deleteAll'): void;
    (event: 'deleteAllCompleted'): void;
}>();

const handleCheck = (event: Event) => {
    const checkbox = event.target as HTMLInputElement;
    emit('checkAll', checkbox.checked);
};
</script>

<template>
    <div class="footer">
        <div class="check-all">
            <input type="checkbox" id="check-all-checkbox" @change="handleCheck" />
            <label for="check-all-checkbox"> Check all as completed </label>
        </div>
        <div class="buttons">
            <div class="delete-all" @click="emit('deleteAll')">
                <TrashIcon />
                <div class="delete-all_text">Delete all todos</div>
            </div>

            <div class="delete-all" @click="emit('deleteAllCompleted')">
                <TrashIcon />
                <div class="delete-all_text">Delete all completed</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 430px;
    margin: 20px auto;
    border-top: 1px solid #c9c9c9;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 15px;
    padding-top: 20px;
}

.check-all,
label,
input {
    cursor: pointer;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.delete-all {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.5s;
    border: 1px solid #c9c9c9;
    padding: 5px;
    border-radius: 5px;
}

.delete-all:hover {
    background-color: #c9c9c9;
}

.delete-all:hover {
    color: red;
}

.delete-all > svg:hover {
    color: red;
}
</style>
