<template>
  <div class="w-full flex gap-4">
    <input
      v-model="currentValue"
      type="text"
      placeholder="Waht needs to be done?"
      :class="{
        'border-red-300': error,
        'border-gray-300': !error,
      }"
      class="w-full border rounded py-2 px-4 focus:outline-blue-100"
      @keypress.enter="emits('save')"
      aria-label="todo input"
    />
    <button
      class="p-2 border rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500"
      type="button"
      @click="emits('save')"
    >
      Add
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  error: boolean;
}>();

const emits = defineEmits<{
  (event: 'update:modelValue', payload: string): void;
  (event: 'save'): void;
}>();

const currentValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emits('update:modelValue', value),
});
</script>
