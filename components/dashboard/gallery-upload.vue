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
                <NuxtImg quality="10" format="webp" loading="lazy" :src="img.url"
                    class="rounded shadow w-full object-cover object-center" />
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
import { useStorageStore } from '~/stores/useStorage/useStorage';
const images = ref<{ name: string; url: string }[]>([]);
const LIMIT = 6;
const page = ref(1);
const isLoading = ref(false);
const isEnd = ref(false);
const selectedFile = ref<File | undefined>(undefined);
const fileInputRef = ref();
const toast = useToast();
const supabase = useSupabaseClient();

const store = useStorageStore();

async function fetchData() {
    isLoading.value = true;
    await store.load({ page: page.value, limit: LIMIT });

    const newImages = store.res.map((file) => {
        const { data } = supabase.storage.from('project').getPublicUrl(file.name);
        return {
            name: file.name,
            url: data.publicUrl,
        };
    });
    if (page.value === 1) {
        images.value = newImages;
    } else {
        images.value = [...images.value, ...newImages];
    }
    if (newImages.length < LIMIT) {
        isEnd.value = true;
    }
    isLoading.value = false;
}

onMounted(fetchData);

watch(page, () => {
    fetchData();
});

async function loadImages() {
    page.value += 1;
}

async function uploadImage() {
    if (!selectedFile.value) return;
    const fileName = `${Date.now()}-${selectedFile.value.name}`;
    const { error } = await supabase.storage.from('project').upload(fileName, selectedFile.value);
    if (error) {
        toast.add({ title: 'Upload failed', description: error.message, color: 'red' });
        return;
    }
    const { data } = supabase.storage.from('project').getPublicUrl(fileName);
    images.value.unshift({ name: fileName, url: data.publicUrl });
    toast.add({ title: 'Uploaded!', description: 'Image added to storage.', color: 'green' });
    selectedFile.value = undefined;
    const inputEl = fileInputRef.value?.input;
    if (inputEl) inputEl.value = '';
}

async function handleFileChange() {
    await nextTick();
    const inputEl = fileInputRef.value?.input;
    selectedFile.value = inputEl?.files?.[0] || null;
}

async function deleteImage(fileName: string) {
    const { error } = await supabase.storage.from('project').remove([fileName]);
    if (error) {
        toast.add({ title: 'Failed to delete!', description: error.message, color: 'red' });
        return;
    }
    images.value = images.value.filter((img) => img.name !== fileName);
    toast.add({ title: 'Deleted!', description: 'Removed from storage.', color: 'green' });
}

function copyToClipboard(url: string) {
    navigator.clipboard.writeText(url);
    toast.add({ title: 'Copied!', description: 'URL copied to clipboard.', color: 'green' });
}

</script>