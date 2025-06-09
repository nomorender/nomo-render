<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import type { aboutus } from '~/types/homepage/aboutus'
import { useFetchAboutus } from '~/composables/homepage/aboutus/useFetchAboutus'
import { useUpdateAboutus } from '~/composables/homepage/aboutus/useUpdateAboutus'
definePageMeta({
    middleware: 'auth',
    layout: 'dashboard',
})

const form = ref<aboutus>({
    title: '',
    content: '',
    button_label: ''
})

const content = ref('')
const { res, fetchAboutus } = useFetchAboutus()
const { updateAboutus, loading } = useUpdateAboutus()

const editor = useEditor({
    content: '',
    extensions: [StarterKit, Underline],
    onUpdate({ editor }) {
        content.value = editor.getHTML()
    },
})

watch(content, (newVal) => {
    if (editor.value && newVal && editor.value.getHTML() !== newVal) {
        editor.value.commands.setContent(newVal)
    }
})

const onSubmit = async () => {
    if (!form.value) return
    form.value.content = content.value

    const updated = await updateAboutus({ ...form.value })
    if (updated) {
        form.value = updated
        content.value = updated.content || ''
    }
}

onMounted(async () => {
    await fetchAboutus()
    if (res.value) {
        form.value = { ...res.value }
        content.value = form.value.content || ''
        editor.value?.commands.setContent(content.value)
    }
})
</script>


<template>
    <UContainer class="max-w-3xl py-8 space-y-6">
        <UCard>
            <template #header>
                <div class="text-xl font-semibold">About Us Component Manager</div>
            </template>
            <UForm :state="form" class="space-y-5" @submit.prevent="onSubmit">
                <UFormGroup label="Title" name="title">
                    <UInput v-model="form.title" placeholder="Nhập tiêu đề..." />
                </UFormGroup>
                <div>
                    <div class="mb-4 flex flex-wrap gap-2">
                        <button @click="editor?.chain().focus().toggleBold().run()"
                            :class="{ 'font-[500]': editor?.isActive('bold') }">
                            Bold
                        </button>
                        <button @click="editor?.chain().focus().toggleItalic().run()"
                            :class="{ 'italic': editor?.isActive('italic') }">
                            Italic
                        </button>
                        <button @click="editor?.chain().focus().toggleUnderline().run()"
                            :class="{ 'underline': editor?.isActive('underline') }">
                            Underline
                        </button>
                    </div>
                    <EditorContent :editor="editor" class="border rounded" />
                </div>
                <UFormGroup label="Button label" name="title">
                    <UInput v-model="form.button_label" placeholder="Nhập tiêu đề..." />
                </UFormGroup>
                <UButton type="submit" color="black" :loading="loading">
                    Save change
                </UButton>
            </UForm>
        </UCard>
    </UContainer>
</template>
