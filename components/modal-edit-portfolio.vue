<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod'
import type { Portfolio } from '~/types/portfolio/portfolio';

const isOpen = defineModel<boolean>('modelValue', { default: false })
const props = defineProps<{
    id: string | null,
    project?: Portfolio | null,
    mode: string
}>()
const emit = defineEmits(['saved'])
const toast = useToast();

const schema = z.object({
    title: z.string().optional(),
    cover_url: z.string().optional(),
    location: z.string().optional(),
    founded: z.string().optional(),
    content: z.string().optional(),
    category: z.string().optional(),
    pics: z.array(z.string()).max(6)
})
const state = reactive({
    title: '',
    cover_url: '',
    location: '',
    founded: '',
    content: '',
    category: '',
    pics: ['']
})

const resetState = () => {
    Object.assign(state, {
        title: '',
        cover_url: '',
        location: '',
        founded: '',
        content: '',
        category: '',
        pics: ['']
    })
}
const supabase = useSupabaseClient<Portfolio>()
type Schema = z.output<typeof schema>
watch(
    () => [props.id, isOpen.value],
    async ([id, open]) => {
        if (props.mode === 'edit' && id && open) {
            resetState()
            const { data, error } = await supabase
                .from('portfolio')
                .select('*')
                .eq('id', id)
                .single()
            if (!error && data) {
                Object.assign(state, data)
            }
        } else if (props.mode === 'add' && open) {
            resetState()
        }
    },
    { immediate: true }
)


const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    if (props.mode === "edit") {
        const data = toRaw(event.data)
        try {
            const { error } = await supabase.from('portfolio').update(data).eq('id', props.id!).select().single()
            if (!error) {
                toast.add({
                    title: 'Updated successfull!',
                    description: 'Your data has been updated!',
                    color: 'green'
                })
                isOpen.value = false
                emit('saved')
                resetState()
            } else {
                toast.add({
                    title: 'Updated Failed!',
                    description: 'Update again later!',
                    color: 'red'
                })
            }
        } catch (error) {
            toast.add({
                title: 'Something went wrong!',
                description: 'Please try again later!',
                color: 'red'
            })
        }
    } else if (props.mode === "add" && props.project == null) {
        const data = toRaw(event.data)
        if (data === null) {
            toast.add({
                title: 'Added failed!',
                description: 'Please fill full data before add!',
                color: 'red'
            })
        } else {
            try {
                const { error } = await supabase.from('portfolio').insert(data).select().single()
                if (!error) {
                    toast.add({
                        title: 'Added successfull!',
                        description: 'Your data has been added!',
                        color: 'green'
                    })
                    isOpen.value = false
                    emit('saved')
                    resetState()
                } else {
                    toast.add({
                        title: 'Added Failed!',
                        description: 'Update again later!',
                        color: 'red'
                    })
                }
            } catch (error) {
                toast.add({
                    title: 'Something went wrong!',
                    description: 'Please try again later!',
                    color: 'red'
                })
            }
        }
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
                    <USelect v-model="state.category" :options="[
                        { label: 'Exterior', value: 'exterior' },
                        { label: 'Interior', value: 'interior' },
                        { label: 'Furniture', value: 'furniture' }
                    ]" placeholder="Select Category" />
                </UFormGroup>
                <UFormGroup label="Title" name="title">
                    <UInput v-model="state.title" />
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