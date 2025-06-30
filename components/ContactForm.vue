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

const props = defineProps<{
    title?: string
    subtitle?: string
    description?: string
    buttonText?: string
    images?: string[]
    color_background?: string
}>()

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
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
    <div :class="[props.color_background || 'bg-[#FAF8F5]', 'md:py-[60px]', 'py-[45px]']">
        <div class="md:px-8 flex items-center justify-center">
            <div class="w-[1072px]">
                <div class="px-20 md:block flex flex-col justify-center items-center">
                    <p class="text-center text-xl lg:text-3xl md:text-[25px] md:mb-[20px] uppercase">
                        {{ title || 'contact' }}
                    </p>
                    <div
                        class="text-center font-semibold text-3xl lg:text-[64px] md:text-[50px] w-[220px] md:w-full leading-[100%] mb-5 md:mb-[40px] lg:mb-20 text-[#8D7662] md:px-6">
                        {{ subtitle || "Let’s bring your vision to life!" }}
                    </div>
                </div>

                <div class="block lg:flex lg:gap-[100px]">
                    <div class="lg:w-[50%]">
                        <p
                            class="text-justify font-[300] italic text-[15px] md:text-[25px] leading-[180%] md:leading-[150%] px-10 md:px-0 max-w-4xl mx-auto">
                            {{ description || "Have a project in mind? Whether you need stunning 3D renderings, etc." }}
                        </p>

                        <div
                            class="flex items-center justify-center gap-2 md:grid grid-cols-2 mt-5 place-items-center md:place-items-start w-full px-0 mx-0 md:max-w-none">
                            <NuxtImg v-for="(img, i) in props.images || []" :key="i" :src="img"
                                class="md:rounded-[8px] lg:h-[325px] lg:w-[235px] w-[48%] h-[252px] md:w-full md:h-full object-cover"
                                :alt="`Contact Image ${i + 1}`" loading="lazy" />
                        </div>
                    </div>

                    <div class="lg:w-[50%] w-full mt-[40px] lg:mt-0 md:px-0">
                        <UForm id="contactForm" :validate="validate" :state="state" class="space-y-4 md:px-0 w-full"
                            @submit="onSubmit" @error="onError">
                            <UFormGroup class="flex items-center justify-center md:block ">
                                <UInput padded required color="white" variant="none" placeholder="Name (required)"
                                    v-model="state.name" size="xl"
                                    class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-[380px] md:w-full"
                                    :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                            </UFormGroup>

                            <UFormGroup class="flex items-center justify-center md:block">
                                <UInput padded required color="white" variant="none" placeholder="Email (required)"
                                    v-model="state.email" size="xl"
                                    class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-[380px] md:w-full"
                                    :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                            </UFormGroup>

                            <UFormGroup class="flex items-center justify-center md:block">
                                <UTextarea padded required color="white" variant="none"
                                    placeholder="Describe your project" v-model="state.description" size="xl"
                                    class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-[380px] md:w-full"
                                    :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }"
                                    :rows="7" md:rows="20" />
                            </UFormGroup>

                            <div class="px-4 md:px-0 mx-auto flex justify-center lg:block">
                                <UButton :loading="formSubmitting" :disabled="formSubmitting" id="submit-contact-form"
                                    color="gray" variant="solid" type="submit" form="contactForm"
                                    aria-label="Submit contact form"
                                    class="bg-gradient-to-r from-[#8D7662] to-[#27211B] md:py-5 py-4 lg:px-8 lg:py-5 px-10 hover:bg-[#90755e] mt-6 lg:mt-8 md:rounded-[8px] rounded-[10px] md:w-auto">
                                    <span id="submit-contact-form"
                                        class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] text-[16px] md:text-[28px]">
                                        {{ buttonText || "let’s work together!" }}
                                    </span>
                                </UButton>
                            </div>
                        </UForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
