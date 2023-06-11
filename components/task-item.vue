<template>
  <div class="relative bg-white border p-6 pl-12 group">
    <button
      class="absolute top-1/2 left-3 transform -translate-y-1/2 border h-6 w-6"
      type="button"
      @click="emits('toggle', task.id)"
    >
      <img v-if="isCompleted" src="~/assets/icons/check.svg" alt="check" />
    </button>
    <p
      class="w-full text-gray-darkest break-words"
      :class="{
        'line-through': isCompleted,
        'text-gray-300': isCompleted,
      }"
    >
      {{ task.label }}
    </p>
    <button
      class="h-6 w-6 absolute top-2 right-2 hidden group-hover:block"
      type="button"
      @click="emits('delete', task.id)"
    >
      <img src="~/assets/icons/close.svg" alt="check" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { Task } from '@/types/task';

const props = defineProps<{
  task: Task;
}>();

const emits = defineEmits<{
  (event: 'toggle', payload: string): void;
  (event: 'delete', payload: string): void;
}>();

const isCompleted = computed(() => !!props.task?.completed);
</script>
