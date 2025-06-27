<script lang="ts" setup>
import { useReCaptcha } from 'vue-recaptcha-v3'
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'
const recaptchaInstance = useReCaptcha()
import z from 'zod'

const toast = useToast()
const isOpen = defineModel<boolean>('modelValue', { default: false })
const formSubmitting = ref(false)
const state = reactive({
    name: '',
    email: '',
    description: '',
    agree: true
})
const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    description: z.string(),
    agree: z.boolean()
});

onMounted(() => {
    if (typeof window !== 'undefined' && typeof (window as any).MauticSDKLoaded === 'undefined') {
        (window as any).MauticSDKLoaded = true
        const script = document.createElement('script')
        script.src = 'https://mail.nomorender.com/media/js/mautic-form.js?v59acfc6c'
        script.onload = () => {
            if ((window as any).MauticSDK && typeof (window as any).MauticSDK.onLoad === 'function') {
                (window as any).MauticSDK.onLoad()
            }
        }
        document.head.appendChild(script)
    } else if (typeof (window as any).MauticSDK !== 'undefined') {
        (window as any).MauticSDK?.onLoad()
    }
})

const onSubmit = async (event: FormSubmitEvent<any>) => {
    if (!state.email || !state.email.includes('@')) {
        toast.add({
            title: 'Invalid email!',
            description: 'Please enter a valid email address.',
            color: 'red'
        })
        return
    }
    formSubmitting.value = true
    try {
        await recaptchaInstance?.recaptchaLoaded()
        const token = await recaptchaInstance?.executeRecaptcha('contact_form')
        if (!token) throw new Error('Failed to generate reCAPTCHA token')

        const res = await $fetch('/api/contact', {
            method: 'POST',
            body: { name: state.name, email: state.email, description: state.description, recaptchaToken: token },
        })
        if (res.success) {
            state.email = ''
            state.name = ''
            state.description = ''
            state.agree = false
            toast.add({
                title: 'Success!',
                description: 'Thank you for getting in touch. Our team will contact you shortly',
                color: 'green'
            })
        } else {
            toast.add({
                title: 'Send email failed!',
                description: 'message' in res && res.message
                    ? res.message
                    : 'Something went wrong!',
                color: 'red'
            })
            return
        }
    } catch (error) {
        toast.add({
            title: 'Send email failed!',
            description: 'Something went wrong!',
            color: 'red'
        })
    } finally {
        formSubmitting.value = false
    }
}
const onError = async (event: FormErrorEvent) => {
    const firstError = event.errors[0]
    const element = document.querySelector(`[name="${firstError.id}"]`) as HTMLElement
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
    <UModal v-model="isOpen" :ui="{
        overlay: { background: 'bg-[#000000] opacity-[80%]' },
        width: 'sm:max-w-5xl',
        container: 'border-none flex items-center justify-center shadow-none',
        base: 'bg-[#FAF8F5] rounded-xl'
    }">
        <UButton id="open-modal-quote" aria-label="Click here open quote form" square size="xl"
            icon="i-heroicons-x-mark-20-solid" variant="ghost"
            class="absolute right-4 top-4 rounded-full text-black hover:bg-transparent" @click="isOpen = false" />
        <div class="flex flex-wrap">
            <div class="w-full md:p-10 py-6 px-5 lg:w-3/5">
                <div class="mb-5 flex flex-col items-center lg:block">
                    <NuxtImg format="webp" alt="logo" src="/logo.png" class="mb-4 h-[45px] w-[65px] lg:mb-2" />
                    <div class="text-[18px] font-semibold uppercase text-[#8D7662] lg:text-[25px]">
                        Send the request
                    </div>
                </div>
                <UForm id="requestForm" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit"
                    @error="onError">
                    <UFormGroup name="name">
                        <UInput name="name" v-model="state.name" required variant="none" placeholder="Your name"
                            size="xl"
                            class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-2 text-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                            :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" />
                    </UFormGroup>
                    <UFormGroup name="email">
                        <UInput name="email" v-model="state.email" required variant="none" placeholder="Your email"
                            size="xl"
                            class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-2 text-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                            :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" />
                    </UFormGroup>
                    <UFormGroup name="description">
                        <UTextarea name="description" v-model="state.description" required variant="none"
                            placeholder="Your message" size="xl"
                            class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-2 text-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                            :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" :rows="6"
                            md:rows="8" />
                    </UFormGroup>

                    <div class="px-4 md:px-0 mx-auto flex justify-center lg:block">
                        <UButton :loading="formSubmitting" :disabled="formSubmitting" id="submit-form-quote"
                            aria-label="Click here submit quote form to Nomorender" color="gray" size="xl"
                            variant="solid" type="submit" form="requestForm"
                            class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-3 hover:bg-[#90755e] mt-6 md:mt-10 lg:rounded-[12px] rounded-[8px] px-10 py-3 md:w-auto max-w-xs">
                            <div
                                class="w-full flex justify-center items-center uppercase text-[#F5F5F5] text-[16px] md:text-[20px]">
                                submit
                            </div>
                        </UButton>
                    </div>
                </UForm>
            </div>
            <div class="hidden lg:block lg:w-2/5">
                <NuxtImg format="webp" src="/mobile-background.png"
                    class="w-full h-[580px] rounded-xl object-cover object-bottom"
                    alt="Nomorender form quote picture" />
            </div>
        </div>
    </UModal>
</template>
