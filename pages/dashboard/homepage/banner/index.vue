<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Banner } from '~/types/homepage/banner'
import { useFetchBanner } from '~/composables/homepage/banner/useFetchBanner'
import { useUpdateBanner } from '~/composables/homepage/banner/useUpdateBanner'

definePageMeta({ layout: 'dashboard', middleware: 'auth' })
const { banner, fetchBanner, loading: loadingBanner } = useFetchBanner()
const { updateBanner, loading, success, updateError } = useUpdateBanner()

const form = ref<Banner>({
    title: '',
    img: '',
    button_label: '',
})

const imageFile = ref<File | null>(null)

function handleFileChange(e: Event) {
    const target = e.target as HTMLInputElement
    imageFile.value = target.files?.[0] || null
}

onMounted(async () => {
    await fetchBanner()
    if (banner.value) {
        form.value = { ...banner.value }
    }
})

const onSubmit = async () => {
    if (!form.value.title.trim()) {
        return
    }
    const updated = await updateBanner({ ...form.value }, imageFile.value)
    if (updated) {
        form.value = updated
    } else {
    }
}
</script>

<template>
    <UContainer class="max-w-3xl py-8 space-y-6">
        <UCard>
            <template #header>
                <div class="text-xl font-semibold">Banner Component Manager</div>
            </template>
            <UForm :state="form" class="space-y-5" @submit.prevent="onSubmit">
                <UFormGroup label="Title" name="title">
                    <UInput v-model="form.title" placeholder="Nhập tiêu đề..." />
                </UFormGroup>

                <UFormGroup label="Button label" name="button_label">
                    <UInput v-model="form.button_label" placeholder="Nhập button label..." />
                </UFormGroup>

                <UFormGroup label="Banner image" name="img">
                    <div class="space-y-2">
                        <input type="file" accept="image/*" @change="handleFileChange" />
                        <div v-if="form.img" class="mt-3">
                            <p class="text-gray-500 text-sm mb-1">Current banner: </p>
                            <img :src="form.img" alt="Banner hiện tại" class="w-full max-w-md rounded-lg border" />
                        </div>
                    </div>
                </UFormGroup>

                <UButton type="submit" color="black" :loading="loading">
                    Save change
                </UButton>

                <p v-if="updateError" class="text-red-500 text-sm">{{ updateError.message }}</p>
            </UForm>
        </UCard>
    </UContainer>
</template>
