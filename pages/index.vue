<template>
  <main class="bg-gray-100 min-h-screen">
    <section class="py-8">
      <h1 class="text-5xl font-bold text-teal-500 text-center mb-4">
        MY TASKS
      </h1>
      <div class="flex flex-col gap-8 p-6 m-auto w-full lg:w-3/4 lg:max-w-xl">
        <task-input
          v-model="taskLabel"
          :error="error"
          @save="createTask"
        />
        <task-list
          :tasks="tasks"
          @toggle="toggleTask($event)"
          @delete="deleteTask($event)"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import useTaskStore from '@/stores/task';

const taskStore = useTaskStore();

const taskLabel = ref('');
const error = ref(false);

const tasks = computed(() => taskStore.listTasks);

const createTask = () => {
  if (!taskLabel.value) {
    error.value = true;
    return;
  }

  taskStore.create(taskLabel.value);

  taskLabel.value = '';
};

const toggleTask = (taskId: string) => {
  taskStore.toggleTask(taskId);
};

const deleteTask = (taskId: string) => {
  taskStore.delete(taskId);
};
</script>
