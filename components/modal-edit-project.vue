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
    stt: z.number().optional(),
    title: z.string().optional(),
    client: z.string().optional(),
    cover_url: z.string().optional(),
    location: z.string().optional(),
    founded: z.string().optional(),
    page: z.string().min(1, 'Page can not be undefined!'),
    content: z.string().optional(),
    pics: z.array(z.string()).max(6)
})
const state = reactive({
    title: '',
    client: '',
    cover_url: '',
    location: '',
    founded: '',
    page: '',
    content: '',
    pics: ['']
})

const resetState = () => {
    Object.assign(state, {
        title: '',
        client: '',
        cover_url: '',
        location: '',
        founded: '',
        page: '',
        content: '',
        pics: ['']
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
                .from('project')
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
    const { error } = await supabase.from('project').update(data).eq('id', props.id).select().single()
    // const { error } = await supabase.from('project').insert(data).select().single()
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

const addPictureInput = () => {
    if (state.pics.length < 6) {
        state.pics.push('')
    }
}
const removePictureInput = (index: number) => {
    state.pics.splice(index, 1)
}

</script>
<template>
    <UModal v-model="isOpen">
        <UCard>
            <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
                <UFormGroup label="Page" name="page">
                    <USelect v-model="state.page" :options="[
                        { label: 'Home', value: 'home' },
                        { label: 'Exterior', value: 'exterior' },
                        { label: 'Interior', value: 'interior' },
                        { label: 'Project', value: 'project' }
                    ]" placeholder="Select page" />
                </UFormGroup>
                <UFormGroup label="Title" name="title">
                    <UInput v-model="state.title" />
                </UFormGroup>
                <UFormGroup label="Client" name="client">
                    <UInput v-model="state.client" />
                </UFormGroup>
                <UFormGroup label="Cover Image" name="cover_url">
                    <UInput v-model="state.cover_url" />
                </UFormGroup>
                <UFormGroup label="Location" name="location">
                    <UInput v-model="state.location" />
                </UFormGroup>
                <UFormGroup label="Founded" name="founded">
                    <UInput v-model="state.founded" />
                </UFormGroup>
                <UFormGroup label="Content" name="content">
                    <TextEditor v-model="state.content" />
                </UFormGroup>
                <UFormGroup label="Pictures" name="picDes">
                    <div class="space-y-2">
                        <div v-for="(pic, index) in state.pics" :key="index" class="flex items-center space-x-2">
                            <UInput v-model="state.pics[index]" placeholder="Image URL" class="flex-1" />
                            <UButton icon="material-symbols:delete-outline" color="red" variant="ghost"
                                @click="removePictureInput(index)" v-if="state.pics.length > 1" />
                        </div>
                        <UButton icon="i-heroicons-plus" @click="addPictureInput" :disabled="state.pics.length >= 6"
                            variant="ghost" color="primary" class="text-black">
                            Add Picture
                        </UButton>
                    </div>
                </UFormGroup>
                <UButton aria-label="Submit the edit content" type="submit"
                    class="bg-black text-white hover:bg-white hover:text-black transition-all">
                    Submit
                </UButton>
            </UForm>
        </UCard>
    </UModal>
</template>