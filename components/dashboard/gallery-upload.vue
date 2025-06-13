<template>
    <div class="space-y-4">
        <UInput ref="fileInputRef" type="file" size="sm" icon="i-heroicons-folder" @change="handleFileChange" />
        <UButton @click="uploadImage" :disabled="!selectedFile">Upload</UButton>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div v-for="img in images" :key="img.url" class="relative group">
                <NuxtImg loading="lazy" :src="img.url" class="rounded shadow w-full h-auto" />
                <div class="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100">
                    <UButton size="sm" @click="copyToClipboard(img.url)">Copy URL</UButton>
                    <UButton size="sm" color="red" @click="deleteImage(img.name)">Delete</UButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const fileInputRef = ref()
const selectedFile = ref<File | undefined>(undefined)
const images = ref<{ name: string; url: string }[]>([])
const toast = useToast()

async function handleFileChange() {
    await nextTick()
    const inputEl = fileInputRef.value?.input
    selectedFile.value = inputEl?.files?.[0] || null
}

async function uploadImage() {
    if (!selectedFile.value) return
    const fileName = `${Date.now()}-${selectedFile.value.name}`
    const { error } = await supabase.storage.from('project').upload(fileName, selectedFile.value)
    if (error) {
        toast.add({
            title: 'Something went wrong !',
            description: 'Please try again later !',
            color: 'red'
        })
    } else {
        const { data } = supabase.storage.from('project').getPublicUrl(fileName)
        images.value.push({ name: fileName, url: data.publicUrl })
        toast.add({
            title: 'Adding successfully !',
            description: 'Adding to storage successfully !',
            color: 'green'
        })
        selectedFile.value = undefined
        const inputEl = fileInputRef.value?.input
        if (inputEl) inputEl.value = ''
    }
}

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    toast.add({
        title: 'Copied !',
        description: 'Copied successfully !',
        color: 'green'
    })
}

async function deleteImage(fileName: string) {
    const { error } = await supabase.storage.from('project').remove([fileName])
    if (error) {
        toast.add({
            title: 'Failed to delete !',
            description: 'Please try again later !',
            color: 'red'
        })
    } else {
        images.value = images.value.filter(img => img.name !== fileName)
        toast.add({
            title: 'Deleted !',
            description: 'Removed from storage',
            color: 'green'
        })
    }
}

onMounted(async () => {
    const { data } = await supabase.storage.from('project').list('')
    if (data) {
        images.value = data.map(file => ({
            name: file.name,
            url: supabase.storage.from('project').getPublicUrl(file.name).data.publicUrl
        }))
    }
})
</script>