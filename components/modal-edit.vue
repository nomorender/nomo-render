<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod'
import type { Project } from '~/types/project/project';

const isOpen = defineModel<boolean>('modelValue', { default: false })
const toast = useToast()

const props = defineProps<{
    id: string | null
}>()
const emit = defineEmits(['saved'])

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
    stt: 0,
    title: '',
    client: '',
    cover_url: '',
    location: '',
    founded: '',
    page: '',
    content: '',
    pics: ['']
})
const supabase = useSupabaseClient<Project>()
type Schema = z.output<typeof schema>
const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    const data = toRaw(event.data)
    console.log(data)
    const { error } = await supabase.from('project').insert(data)
    if (error) {
        toast.add({
            title: 'Add error',
            color: 'red'
        })
        console.log(error)
    } else {
        toast.add({
            title: 'Added',
            color: 'green'
        })
        emit('saved')
        isOpen.value = false
        state.stt = 0
        state.title = ''
        state.client = ''
        state.cover_url = ''
        state.location = ''
        state.founded = ''
        state.page = ''
        state.content = ''
        state.pics = ['']
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
                <UFormGroup label="Stt" name="stt">
                    <UInput v-model="state.stt" type="number" />
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
                <UButton type="submit" class="bg-black text-white hover:bg-white hover:text-black transition-all">
                    Submit
                </UButton>
            </UForm>
        </UCard>
    </UModal>
</template>