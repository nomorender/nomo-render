<script setup lang="ts">
const props = defineProps<{
    modelValue: boolean
    title?: string
    message?: string
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'confirm'): void
}>()

const close = () => emit('update:modelValue', false)
const yes = () => { emit('confirm'); close() }
</script>

<template>
    <UModal v-model="props.modelValue">
        <UCard>
            <template #header>
                <h3 class="text-lg font-medium">{{ props.title ?? 'Confirm' }}</h3>
            </template>
            <p class="mb-6">{{ props.message }}</p>
            <div class="flex justify-end gap-2">
                <UButton color="gray" variant="ghost" @click="close">Cancel</UButton>
                <UButton color="red" @click="yes">Delete</UButton>
            </div>
        </UCard>
    </UModal>
</template>
