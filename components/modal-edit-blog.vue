<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'
import { z } from 'zod'
import type { Blog } from '~/types/inspire/blog';

const isOpen = defineModel<boolean>('modelValue', { default: false })
const props = defineProps<{
    id: string | null,
    blog?: Blog | null,
    mode: string
}>()
const emit = defineEmits(['saved'])
const toast = useToast();

const schema = z.object({
    title: z.string().min(1, { message: "Missing title!" }),
    cover_url: z.string().min(1, { message: "Missing cover_url!" }),
    tag: z.string().min(1, { message: "Missing tag!" }),
    slug: z.string().min(1, { message: "Missing slug!" }),
    content: z.string().min(1, { message: "Missing content!" }),
    description: z.string().min(1, { message: "Missing description!" }),
})
const state = reactive({
    title: '',
    tag: '',
    slug: '',
    cover_url: '',
    content: '',
    description: ''
})

const resetState = () => {
    Object.assign(state, {
        title: '',
        slug: '',
        tag: '',
        cover_url: '',
        content: '',
        description: ''
    })
}
const supabase = useSupabaseClient<Blog>()
type Schema = z.output<typeof schema>
watch(
    () => [props.id, isOpen.value],
    async ([id, open]) => {
        if (props.mode === 'edit' && id && open) {
            resetState()
            const { data, error } = await supabase
                .from('blog')
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

async function slugExists(slug: string, excludeId?: string) {
    let q = supabase
        .from('blog')
        .select('id', { count: 'exact', head: true })
        .eq('slug', slug)

    if (excludeId) q = q.neq('id', excludeId)

    const { count, error } = await q
    if (error) throw error
    return (count ?? 0) > 0
}

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    if (props.mode === "edit") {
        const data = toRaw(event.data)
        const slug = slugify(data.slug || '')
        const payload = {
            ...data,
            slug
        }
        try {
            const duplicated = await slugExists(
                slug,
                props.id || undefined
            )
            if (duplicated) {
                toast.add({
                    title: "Something went wrong!",
                    description: "That slug has been choosen before!"
                })
                return
            }
            const { update } = useBlog()
            const res = await update(payload, props.id!)
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
    } else if (props.mode === "add" && props.blog == null) {
        const data = toRaw(event.data)
        const slug = slugify(data.slug || '')
        const payload = {
            ...data,
            slug
        }
        try {
            const duplicated = await slugExists(
                slug,
                undefined
            )
            if (duplicated) {
                return
            }
            const { add, blog } = useBlog()
            add(payload);
            if (blog) {
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

const handleCloseModal = () => {
    isOpen.value = false
}

</script>
<template>
    <UModal v-model="isOpen" fullscreen>
        <UCard>
            <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
                <UFormGroup label="Tag" name="tag">
                    <USelect v-model="state.tag" :options="[
                        { label: 'Crafting', value: 'crafting' },
                        { label: 'Tips & Tricks', value: 'tips and tricks' },
                        { label: 'Trendy Style', value: 'trendy style' },
                        { label: 'Before After', value: 'before after' }
                    ]" placeholder="Select tag" />
                </UFormGroup>
                <UFormGroup label="Cover Image" name="cover_url">
                    <UInput v-model="state.cover_url" />
                    <UTooltip text="This will display in blog page and preview picture">
                        <Icon name="mingcute:information-line" class="w-[20px] h-[20px] mt-2" style="color: gray" />
                    </UTooltip>
                </UFormGroup>
                <UFormGroup label="Title" name="title">
                    <UInput v-model="state.title" />
                </UFormGroup>
                <UFormGroup label="Description" name="description">
                    <UInput v-model="state.description" />
                </UFormGroup>
                <UFormGroup label="Slug" name="slug">
                    <UInput v-model="state.slug" />
                    <UTooltip text="This is a link to SEO">
                        <Icon name="mingcute:information-line" class="w-[20px] h-[20px] mt-2" style="color: gray" />
                    </UTooltip>
                </UFormGroup>
                <UFormGroup label="Content" name="content">
                    <TextEditor v-model="state.content" />
                </UFormGroup>
                <div class="flex gap-5 justify-end">
                    <UButton aria-label="Submit the edit content" type="submit"
                        class="bg-black text-white hover:bg-white hover:text-black transition-all">
                        Submit
                    </UButton>
                    <UButton aria-label="Cancle the edit content" @click="handleCloseModal()"
                        class="bg-gray-200 text-black hover:bg-white hover:text-black transition-all">
                        Cancel
                    </UButton>
                </div>
            </UForm>
        </UCard>
    </UModal>
</template>