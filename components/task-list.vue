<template>
  <div v-if="tasks.length > 0">
    <task-list-header
      :completed-tasks="completedTasks.length"
      :remaining-tasks="remainingTasks"
      :is-filter-active="isFilterActive"
      :current-filter="currentFilter"
      @clear="clearCompleted"
      @filter="handleFilter($event)"
      @unfilter="isFilterActive = false"
    />
    <task-item
      v-for="task in filteredTasks"
      :task="task"
      :key="task.id"
      @toggle="emits('toggle', $event)"
      @delete="emits('delete', $event)"
    />
  </div>
</template>
<script setup lang="ts">
import { Task } from '@/types/task';

const props = defineProps<{
  tasks: Task[];
}>();

const emits = defineEmits<{
  (event: 'toggle', payload: string): void;
  (event: 'delete', payload: string): void;
}>();

const isFilterActive = ref(false);
const currentFilter = ref(false);

const completedTasks = computed(() => props.tasks.filter((task) => (!!task.completed)));
const remainingTasks = computed(() => props.tasks.length - completedTasks.value.length);

const filteredTasks = computed(() => (
  isFilterActive.value
    ? props.tasks.filter((task) => (task.completed === currentFilter.value))
    : props.tasks
));

const handleFilter = (filter: boolean) => {
  isFilterActive.value = true;
  currentFilter.value = filter;
};

const clearCompleted = () => {
  isFilterActive.value = false;
  completedTasks.value.forEach((task) => {
    emits('delete', task.id);
  });
};
</script>
