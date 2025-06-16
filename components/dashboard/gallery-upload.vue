<template>
    <div class="space-y-4">
        <UInput ref="fileInputRef" type="file" size="sm" icon="i-heroicons-folder" @change="handleFileChange" />
        <UButton
            class="bg-black disabled:bg-black disabled:text-white text-white hover:bg-white hover:text-black transition-all"
            @click="uploadImage" :disabled="!selectedFile">
            Upload
        </UButton>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div v-for="img in images" :key="img.name" class="relative group">
                <NuxtImg loading="lazy" :src="img.url" class="rounded shadow w-full object-cover object-center" />
                <div class="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <UButton size="sm" @click="copyToClipboard(img.url)"
                        class="bg-black px-3 py-2 text-white hover:bg-white hover:text-black transition-all">
                        <Icon name="material-symbols:content-copy" />
                    </UButton>
                    <UButton size="sm" color="red" class="px-3 py-2" @click="deleteImage(img.name)">
                        <Icon name="material-symbols:delete-outline" />
                    </UButton>
                </div>
            </div>
        </div>

        <div class="w-full flex items-center justify-center">
            <UButton v-if="!isEnd" @click="loadImages" :loading="isLoading"
                class="bg-black text-white hover:bg-white hover:text-black transition-all">
                Load More
            </UButton>
            <UButton v-else disabled
                class="bg-black disabled:bg-black disabled:text-white text-white hover:bg-white hover:text-black transition-all">
                No more
            </UButton>
        </div>
    </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const fileInputRef = ref()
const selectedFile = ref<File | undefined>(undefined)
const images = ref<{ name: string; url: string }[]>([])
const toast = useToast()
const page = ref(1)
const pageSize = 12
const isLoading = ref(false)
const isEnd = ref(false)
const MAX_IMAGES = 60

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
            title: 'Something went wrong!',
            description: 'Please try again later!',
            color: 'red'
        })
    } else {
        const { data } = supabase.storage.from('project').getPublicUrl(fileName)
        images.value.unshift({ name: fileName, url: data.publicUrl }) // add to top
        if (images.value.length > MAX_IMAGES) {
            images.value = images.value.slice(0, MAX_IMAGES)
        }
        toast.add({
            title: 'Added successfully!',
            description: 'Image added to storage.',
            color: 'green'
        })
        selectedFile.value = undefined
        const inputEl = fileInputRef.value?.input
        if (inputEl) inputEl.value = ''
    }
}

async function loadImages() {
    if (isEnd.value || isLoading.value) return
    isLoading.value = true
    const fromIndex = (page.value - 1) * pageSize
    const { data, error } = await supabase
        .storage
        .from('project')
        .list('', {
            limit: pageSize,
            offset: fromIndex,
            sortBy: { column: 'name', order: 'desc' },
        })
    if (error || !data || data.length === 0) {
        isEnd.value = true
    } else {
        const newImages = data.map(file => ({
            name: file.name,
            url: supabase.storage.from('project').getPublicUrl(file.name).data.publicUrl
        }))
        images.value.push(...newImages)
        if (images.value.length > MAX_IMAGES) {
            images.value = images.value.slice(-MAX_IMAGES)
        }
        page.value++
    }
    isLoading.value = false
}

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    toast.add({
        title: 'Copied!',
        description: 'URL copied to clipboard.',
        color: 'green'
    })
}

async function deleteImage(fileName: string) {
    const { error } = await supabase.storage.from('project').remove([fileName])
    if (error) {
        toast.add({
            title: 'Failed to delete!',
            description: 'Please try again later!',
            color: 'red'
        })
    } else {
        images.value = images.value.filter(img => img.name !== fileName)
        toast.add({
            title: 'Deleted!',
            description: 'Removed from storage.',
            color: 'green'
        })
    }
}

onMounted(() => {
    loadImages()
})
</script>