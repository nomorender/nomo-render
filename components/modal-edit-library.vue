<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod'
import type { Library } from '~/types/library/library';

const isOpen = defineModel<boolean>('modelValue', { default: false })
const props = defineProps<{
    id: string | null,
    library?: Library | null,
    mode: string
}>()
const emit = defineEmits(['saved'])
const toast = useToast();

const schema = z.object({
    title: z.string().optional(),
    cover_url: z.string().optional(),
    tag: z.string().optional(),
    description: z.string().optional(),
    link_download: z.string().optional(),
})
const state = reactive({
    title: '',
    tag: '',
    cover_url: '',
    description: '',
    link_download: ''
})

const resetState = () => {
    Object.assign(state, {
        title: '',
        tag: '',
        cover_url: '',
        description: '',
        link_download: ''
    })
}
const supabase = useSupabaseClient<Library>()
type Schema = z.output<typeof schema>
watch(
    () => [props.id, isOpen.value],
    async ([id, open]) => {
        if (props.mode === 'edit' && id && open) {
            resetState()
            const { data, error } = await supabase
                .from('library')
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
            const { update } = useLibrary()
            const res = await update(data, props.id!)
            if (res) {
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
                isOpen.value = false
                resetState()
            }
        } catch (error) {
            toast.add({
                title: 'Something went wrong!',
                description: 'Please try again later!',
                color: 'red'
            })
            isOpen.value = false
        }
    } else if (props.mode === "add" && props.library == null) {
        const data = toRaw(event.data)
        if (data === null) {
            toast.add({
                title: 'Added failed!',
                description: 'Please fill full data before add!',
                color: 'red'
            })
            isOpen.value = false
        } else {
            try {
                const { add, library } = useLibrary()
                add(data);
                if (library) {
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
                        description: 'Add again later!',
                        color: 'red'
                    })
                    isOpen.value = false
                    resetState()
                }
            } catch (error) {
                toast.add({
                    title: 'Something went wrong!',
                    description: 'Please try again later!',
                    color: 'red'
                })
                isOpen.value = false
            }
        }
    }
}

</script>
<template>
    <UModal v-model="isOpen">
        <UCard>
            <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
                <UFormGroup label="Tag" name="tag">
                    <USelect v-model="state.tag" :options="[
                        { label: 'Handbook 101', value: 'handbook-101' },
                        { label: 'Should-have Checklist', value: 'should-have-checklist' },
                        { label: 'Visual Style', value: 'visual-style' },
                        { label: 'Software Used', value: 'software-used' }
                    ]" placeholder="Select tag" />
                </UFormGroup>
                <UFormGroup label="Cover Image" name="cover_url">
                    <UInput v-model="state.cover_url" />
                </UFormGroup>
                <UFormGroup label="Title" name="title">
                    <UInput v-model="state.title" />
                </UFormGroup>
                <UFormGroup label="Description" name="description">
                    <UInput v-model="state.description" />
                </UFormGroup>
                <UFormGroup label="Link download" name="link-download">
                    <UInput v-model="state.link_download" />
                    <UTooltip text="Make sure that your link is alive">
                        <Icon name="mingcute:information-line" class="w-[20px] h-[20px] mt-2" style="color: gray" />
                    </UTooltip>
                </UFormGroup>
                <UButton aria-label="Submit the edit content" type="submit"
                    class="bg-black text-white hover:bg-white hover:text-black transition-all">
                    Submit
                </UButton>
            </UForm>
        </UCard>
    </UModal>
</template>