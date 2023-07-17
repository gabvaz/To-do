<template>
  <div class="mb-2">
    <div class="flex justify-between mb-2">
      <div>
        <button
          @click="emits('unfilter')"
          class="py-1 px-2"
          type="button"
          :class="{
            'bg-gray-300': !isFilterActive,
          }"
        >
          All
        </button>
        <button
          @click="emits('filter', false)"
          class="py-1 px-2"
          type="button"
          :class="{
            'bg-gray-300': isFilterActive && !currentFilter,
          }"
        >
          Active
        </button>
        <button
          @click="emits('filter', true)"
          class="py-1 px-2"
          type="button"
          :class="{
            'bg-gray-300': isFilterActive && currentFilter,
          }"
        >
          Completed
        </button>
      </div>
      <button
        v-if="completedTasks > 0"
        @click="emits('clear')"
        type="button"
      >
        Clear completed
      </button>
    </div>
    <p>{{ remainingTasks + remainingLabel }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  remainingTasks: Number;
  completedTasks: Number;
  currentFilter: Number;
  isFilterActive: Number;
}>();

const emits = defineEmits<{
  (event: 'clear'): void;
}>();

const remainingLabel = computed(() => (props.remainingTasks > 1 ? ' items left' : ' item left'));
</script>
