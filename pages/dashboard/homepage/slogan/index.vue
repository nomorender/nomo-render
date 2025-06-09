<script setup lang="ts">
import { useFetchSlogan } from '~/composables/homepage/slogan/useFetchSlogan';
import { useUpdateSlogan } from '~/composables/homepage/slogan/useUpdateSlogan';
import type { slogan } from '~/types/homepage/slogan';

definePageMeta({ layout: 'dashboard', middleware: 'auth' })
const { slogan: data, fetchSlogan, loading: loadingBanner } = useFetchSlogan()
const { updateSlogan, loading, success, updateError } = useUpdateSlogan()
const form = ref<slogan>({
    img: '',
    slogan: '',
    sub_slogan: ''
})

const imageFile = ref<File | null>(null)

function handleFileChange(e: Event) {
    const target = e.target as HTMLInputElement
    imageFile.value = target.files?.[0] || null
}

onMounted(async () => {
    await fetchSlogan()
    if (data.value) {
        form.value = { ...data.value }
    }
})

const onSubmit = async () => {
    if (!form.value) {
        return
    }
    const updated = await updateSlogan({ ...form.value }, imageFile.value)
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
                <div class="text-xl font-semibold">Slogan Component Manager</div>
            </template>
            <UForm :state="form" class="space-y-5" @submit.prevent="onSubmit">
                <UFormGroup label="Title" name="title">
                    <UInput v-model="form.slogan" placeholder="Enter slogan..." />
                </UFormGroup>

                <UFormGroup label="Button label" name="button_label">
                    <UInput v-model="form.sub_slogan" placeholder="Enter sub slogan..." />
                </UFormGroup>

                <UFormGroup label="Banner image" name="img">
                    <div class="space-y-2">
                        <input type="file" accept="image/*" @change="handleFileChange" />
                        <div v-if="form.img" class="mt-3">
                            <p class="text-gray-500 text-sm mb-1">Current logo: </p>
                            <img :src="form.img" alt="Banner hiện tại" class="w-full max-w-md rounded-lg border" />
                        </div>
                    </div>
                </UFormGroup>

                <UButton type="submit" color="black">
                    Save change
                </UButton>

                <!-- <p v-if="updateError" class="text-red-500 text-sm">{{ updateError.message }}</p> -->
            </UForm>
        </UCard>
    </UContainer>
</template>
