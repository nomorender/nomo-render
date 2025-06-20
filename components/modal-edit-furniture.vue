<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod'
import type { Project } from '~/types/project/project';

const isOpen = defineModel<boolean>('modelValue', { default: false })
const props = defineProps<{
    id: string | null,
    project?: Project | null
}>()

const emit = defineEmits(['saved'])
const toast = useToast();

const schema = z.object({
    stt: z.number(),
    src: z.string(),
    alt: z.string(),
    mode: z.string()
})

const state = reactive({
    stt: 0,
    src: '',
    alt: '',
    mode: ''
})

const resetState = () => {
    Object.assign(state, {
        stt: 0,
        src: '',
        alt: '',
        mode: ''
    })
}
const supabase = useSupabaseClient<Project>()
type Schema = z.output<typeof schema>
watch(
    () => [props.id, isOpen.value],
    async ([id, open]) => {
        if (id && open) {
            resetState()
            const { data, error } = await supabase
                .from('furniture')
                .select('*')
                .eq('id', id)
                .single()
            if (!error && data) {
                Object.assign(state, data)
            }
        }
    },
    { immediate: true }
)

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    const data = toRaw(event.data)
    const { error } = await supabase.from('furniture').update(data).eq('id', props.id).select().single()
    // const { error } = await supabase.from('furniture').insert(data).select().single()
    if (!error) {
        toast.add({
            title: 'Updated successfull!',
            description: 'Your data has been updated!',
            color: 'green'
        })
        isOpen.value = false
        emit('saved')
        resetState()
    }
}

</script>
<template>
    <UModal v-model="isOpen">
        <UCard>
            <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
                <UFormGroup label="Stt" name="stt">
                    <UInput v-model="state.stt" type="number" />
                </UFormGroup>
                <UFormGroup label="Src" name="src">
                    <UInput v-model="state.src" />
                </UFormGroup>
                <UFormGroup label="Alt" name="alt">
                    <UInput v-model="state.alt" />
                </UFormGroup>
                <UFormGroup label="Page" name="page">
                    <USelect v-model="state.mode" :options="[
                        { label: 'Show all', value: 'all' },
                        { label: 'Show Desktop Only', value: 'desktop' },
                        { label: 'Show Mobile Only', value: 'mobile' }
                    ]" placeholder="Select mode display" />
                </UFormGroup>
                <UButton aria-label="Submit the edit content" type="submit"
                    class="bg-black text-white hover:bg-white hover:text-black transition-all">
                    Submit
                </UButton>
            </UForm>
        </UCard>
    </UModal>
</template>