<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
    modelValue: string[]
}>()
const emit = defineEmits(['update:modelValue'])
const removingImageUrl = ref<string | null>(null)

const supabase = useSupabaseClient()
const uploading = ref(false)
const images = ref<string[]>([...props.modelValue])

watch(() => props.modelValue, (newVal) => {
    images.value = [...newVal]
})

const handleFileChange = async (e: Event) => {
    const files = (e.target as HTMLInputElement).files
    if (!files || files.length === 0) return
    uploading.value = true
    for (const file of files) {
        try {
            const ext = file.name.split('.').pop()
            const fileName = `projects/${Date.now()}_${Math.random().toString(36).substring(2)}.${ext}`
            const bucket = 'homepage'

            const { error } = await supabase.storage
                .from(bucket)
                .upload(fileName, file, { upsert: true, cacheControl: '3600' })

            if (error) throw error

            const { data } = supabase.storage.from(bucket).getPublicUrl(fileName)
            if (data.publicUrl) {
                const newList = [...images.value, data.publicUrl]
                emit('update:modelValue', newList)
                images.value = newList
            }
        } catch (err) {
            console.error('Upload failed:', err)
        }
    }
    uploading.value = false
}

const removeImage = async (url: string) => {
    try {
        removingImageUrl.value = url
        const bucket = 'homepage'

        const { data: bucketUrl } = supabase.storage.from(bucket).getPublicUrl('')
        const baseUrl = bucketUrl.publicUrl
        const path = url.replace(baseUrl + '/', '')

        const { error } = await supabase.storage.from(bucket).remove([path])
        if (error) throw error

        const newList = images.value.filter((img) => img !== url)
        emit('update:modelValue', newList)
        images.value = newList
    } catch (err) {
        console.error('Failed to remove image:', err)
    } finally {
        removingImageUrl.value = null
    }
}

</script>

<template>
    <div class="space-y-4">
        <div>
            <input type="file" multiple accept="image/*" @change="handleFileChange"
                class="block w-full text-sm text-gray-500" />
            <p class="text-xs text-gray-400 mt-1">You can upload multiple images.</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div v-for="(img, index) in images" :key="index" class="relative group">
                <img :src="img" alt="Uploaded" class="rounded shadow-md object-cover w-full h-[180px]" />
                <Button @click="removeImage(img)" :disabled="removingImageUrl === img"
                    class="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition">
                    <span v-if="removingImageUrl === img">...</span>
                    <span v-else>✕</span>
                </Button>

            </div>
        </div>

        <div v-if="uploading" class="text-sm text-gray-500">Uploading...</div>
    </div>
</template>