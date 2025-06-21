<script setup lang="ts">
import { useReCaptcha } from 'vue-recaptcha-v3'
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'
const toast = useToast()
const recaptchaInstance = useReCaptcha()

onMounted(() => {
    if (typeof window !== 'undefined' && typeof (window as any).MauticSDKLoaded === 'undefined') {
        (window as any).MauticSDKLoaded = true
        const script = document.createElement('script')
        script.src = 'https://mail.nomorender.com/media/js/mautic-form.js?v59acfc6c'
        script.onload = function () {
            if ((window as any).MauticSDK && typeof (window as any).MauticSDK.onLoad === 'function') {
                (window as any).MauticSDK.onLoad()
            }
        }
        document.head.appendChild(script)
    } else if (typeof (window as any).MauticSDK !== 'undefined') {
        (window as any).MauticSDK?.onLoad()
    }
})


const state = reactive({
    name: '',
    email: '',
    description: '',
    agree: true
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Required' })
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    return errors
}
const formSubmitting = ref(false)

async function onSubmit(event: FormSubmitEvent<any>) {
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

async function onError(event: FormErrorEvent) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
    <div class="lg:mt-0 md:mt-0 mt-2">
        <div
            class="flex items-center lg:items-start justify-center lg:justify-start w-full  lg:text-justify text-center font-[300] lg:text-[25px] md:text-[25px] text-[15px] lg:leading-[200%] md:leading-[200%] leading-[180%]">
            <div class="w-[300px] md:w-[600px] lg:w-full">Or simply fill out the form below, and we’ll get back to you
                as
                soon as
                possible.
            </div>
        </div>
        <div
            class="flex gap-[20px] lg:max-w-[1200px] mt-5 lg:items-stretch items-center lg:justify-normal justify-center">
            <div class="lg:w-[600px]">
                <UForm id="contactForm" :validate="validate" :state="state"
                    class="space-y-4 md:px-0 max-w-[600px] w-full flex flex-col h-full" @submit="onSubmit"
                    @error="onError">
                    <UFormGroup class="flex items-center justify-center md:block">
                        <UInput padded required color="white" variant="none" placeholder="Name (required)"
                            v-model="state.name" size="xl"
                            class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg md:w-[600px] w-[300px] lg:w-full"
                            :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                    </UFormGroup>

                    <UFormGroup class="flex items-center justify-center md:block">
                        <UInput padded required color="white" variant="none" placeholder="Email (required)"
                            v-model="state.email" size="xl"
                            class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg md:w-[600px] w-[300px] lg:w-full"
                            :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                    </UFormGroup>

                    <UFormGroup class="flex items-center justify-center md:block">
                        <UTextarea padded required color="white" variant="none" placeholder="Describe your project"
                            v-model="state.description" size="xl"
                            class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg md:w-[600px] w-[300px] lg:w-full"
                            :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }"
                            :rows="10" md:rows="20" />
                    </UFormGroup>
                    <!-- <UFormGroup name="agree">
                        <UCheckbox
                            :ui="{ border: 'border border-black', background: 'bg-[#D9D9D9]', wrapper: 'flex items-center', label: 'lg:text-[20px] md:text-[20px] text-[13px] italic leading-[150%] font-[300]' }"
                            v-model="state.agree" label="I agree to the Terms of Use and the Privacy Policy*" />
                    </UFormGroup> -->
                </UForm>
            </div>
            <div class="w-1/2 h-[405px] lg:block md:hidden hidden">
                <NuxtImg src="/contact/contact_form.jpg" class="w-full h-full object-cover rounded-[8px]" />
            </div>
        </div>

        <div class="flex items-center justify-center lg:mt-5 mt-2 lg:mb-20 mb-10">
            <UButton id="submit-contact-form" color="gray" variant="solid" type="submit" form="contactForm"
                aria-label="Submit contact form"
                class="bg-gradient-to-r from-[#8D7662] to-[#27211B] md:py-5 py-4 lg:px-8 lg:py-5 px-10 hover:bg-[#90755e] mt-6 lg:mt-8 md:rounded-[8px] rounded-[10px] md:w-auto">
                <span
                    class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] text-[16px] md:text-[28px]">
                    let’s work together!
                </span>
            </UButton>
        </div>
    </div>
</template>