import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { Task } from '@/types/task';

import generateUuid from '@/utils/generate-uuid';

const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: useStorage(
      'tasks',
      [] as Task[],
      localStorage,
      {
        mergeDefaults: true,
      },
    ),
  }),
  getters: {
    listTasks(state): Task[] {
      return state.tasks.slice().reverse();
    },
  },
  actions: {
    create(task: string) {
      this.tasks.push({
        id: generateUuid(),
        label: task,
        completed: false,
      });
    },
    delete(id: string) {
      this.tasks = this.listTasks.filter((task) => task.id !== id);
    },
    toggleTask(id: string) {
      const selectedTask = this.listTasks.find((task) => task.id === id);
      selectedTask!.completed = !selectedTask!.completed;
    },
  },
});

export default useTaskStore;
