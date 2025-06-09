<script setup lang="ts">
import PictureUpload from '~/components/dashboard/picture-upload.vue';
definePageMeta({ layout: 'dashboard', middleware: 'auth' })
const form = ref({
    name: '',
    location: '',
    mainPic: '',
    content1: '',
    content2: '',
    picDes: [] as string[]
})
const submit = async () => {
}
</script>

<template>
    <UForm :state="form" @submit.prevent="submit" class="space-y-6">
        <UFormGroup label="Gallery images">
            <PictureUpload v-model="form.picDes" />
        </UFormGroup>
        <UButton type="submit" color="black">Save</UButton>
    </UForm>
</template>