<template>
    <div class="rounded-lg border bg-white p-4 shadow-sm space-y-2">
        <div class="flex flex-wrap gap-2">
            <UButton class="text-black" @click="exec('toggleBold')" :variant="is('bold') ? 'solid' : 'ghost'">Bold
            </UButton>
            <UButton class="text-black" @click="exec('toggleItalic')" :variant="is('italic') ? 'solid' : 'ghost'">Italic
            </UButton>
            <UButton class="text-black" @click="exec('toggleUnderline')" :variant="is('underline') ? 'solid' : 'ghost'">
                Underline</UButton>
            <UDivider orientation="vertical" />
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="exec('toggleBulletList')">
                Bullet</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="exec('toggleOrderedList')">Numbered</UButton>
            <UDivider orientation="vertical" />
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="exec('setParagraph')">P</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="exec('toggleHeading1')">H1</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="exec('toggleHeading2')">H2</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="exec('toggleCodeBlock')">Code</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="exec('toggleBlockquote')">Quote</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="setAlign('left')">Align Left</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="setAlign('center')">Center</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all"
                @click="setAlign('right')">Right</UButton>
            <UButton @click="exec('insertBreak')">↵ Break</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all" @click="insertImage">
                Image</UButton>
        </div>
        <div class="flex gap-2">
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all" @click="exec('undo')">↺
                Undo</UButton>
            <UButton class="bg-black hover:bg-white text-white hover:text-black transition-all" @click="exec('redo')">↻
                Redo</UButton>
            <UDivider />
        </div>
        <editor-content :editor="editor"
            class="focus:ring-0 focus:outline-none border border-gray-200 rounded-md px-3 prose editor-content" />
    </div>
</template>

<script setup lang="ts">
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import Typography from '@tiptap/extension-typography'
import History from '@tiptap/extension-history'
import FloatingMenu from '@tiptap/extension-floating-menu'
import HardBreak from '@tiptap/extension-hard-break'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])

const editor = new Editor({
    content: props.modelValue,
    extensions: [
        StarterKit.configure({
            history: false,
        }),
        History,
        Underline,
        Highlight,
        Link.configure({ openOnClick: false }),
        Image.configure({ inline: false }),
        Placeholder.configure({ placeholder: 'Type something…' }),
        FontFamily.configure({
            types: ['textStyle'],
        }),
        TextStyle,
        Typography,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        FloatingMenu.configure({
            shouldShow: ({ editor }) => editor.isFocused,
        }),
        HardBreak.configure({
            HTMLAttributes: {
                class: 'break',
            },
        }),
    ],
    onUpdate({ editor }) {
        emit('update:modelValue', editor.getHTML())
    },
})

const commandMap = {
    toggleBold: () => editor?.chain().focus().toggleBold().run(),
    toggleItalic: () => editor?.chain().focus().toggleItalic().run(),
    toggleUnderline: () => editor?.chain().focus().toggleUnderline().run(),
    toggleBulletList: () => editor?.chain().focus().toggleBulletList().run(),
    toggleOrderedList: () => editor?.chain().focus().toggleOrderedList().run(),
    setParagraph: () => editor?.chain().focus().setParagraph().run(),
    toggleHeading1: () => editor?.chain().focus().toggleHeading({ level: 1 }).run(),
    toggleHeading2: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(),
    toggleBlockquote: () => editor?.chain().focus().toggleBlockquote().run(),
    toggleCodeBlock: () => editor?.chain().focus().toggleCodeBlock().run(),
    undo: () => editor?.chain().focus().undo().run(),
    redo: () => editor?.chain().focus().redo().run(),
    insertBreak: () => editor?.chain().focus().setHardBreak().run(),
}



watch(() => props.modelValue, (newVal) => {
    if (editor && newVal !== editor.getHTML()) {
        editor.commands.setContent(newVal)
    }
})

onBeforeUnmount(() => {
    editor?.destroy()
})

function exec(cmd: keyof typeof commandMap) {
    commandMap[cmd]?.()
}
function is(type: string) {
    return editor?.isActive(type)
}

function insertImage() {
    const url = prompt('Image URL:')
    if (url) {
        editor?.chain().focus().setImage({ src: url }).run()
    }
}
function setAlign(value: 'left' | 'center' | 'right') {
    editor?.chain().focus().setTextAlign(value).run()
}
</script>