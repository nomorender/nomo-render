<script setup lang="ts">
import { useReCaptcha } from 'vue-recaptcha-v3';
import z from 'zod';
const toast = useToast()
const recaptchaInstance = useReCaptcha()

const props = defineProps<{
    modelValue: boolean
    title?: string
    message?: string
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'confirm'): void
}>()
const close = () => emit('update:modelValue', false)
const yes = () => { emit('confirm'); close() }

const state = reactive({
    email: '',
    agree: true
})
const schema = z.object({
    email: z.string().email()
});

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

const formSubmitting = ref(false)

const submitForm = async () => {
    if (!state.email || !state.email.includes('@')) {
        toast.add({
            title: 'Invalid email',
            description: 'Please enter a valid email address.',
            color: 'red'
        })
        return
    }
    formSubmitting.value = true
    try {
        await recaptchaInstance?.recaptchaLoaded()
        const token = await recaptchaInstance?.executeRecaptcha('download_form')
        if (!token) throw new Error('Failed to generate reCAPTCHA token')

        const res = await $fetch('/api/subscribe', {
            method: 'POST',
            body: { email: state.email, recaptchaToken: token },
        })

        if (res.success) {
            state.email = ''
            state.agree = false
            toast.add({
                title: 'Success!',
                description: 'Thank you for getting in touch. Our team will contact you shortly',
                color: 'green'
            })
            emit('confirm')
            close()
        } else {
            toast.add({
                title: 'Send email failed!',
                description: 'Something went wrong!',
                color: 'red'
            })
            close()
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
</script>

<template>
    <UModal v-model="props.modelValue" :ui="{
        rounded: 'rounded-[8px]',
        overlay: { background: 'bg-[#000000] opacity-[80%]' },
        container: 'border-none flex items-center justify-center shadow-none',
        base: 'bg-[#FAF8F5] rounded-xl'
    }">
        <UButton id="close-download-modal" aria-label="Click here to close download form" square size="xl"
            icon="i-heroicons-x-mark-20-solid" variant="ghost"
            class="absolute right-4 top-2 rounded-full text-black hover:bg-transparent" @click="close" />
        <div class="lg:my-[70px] my-10 flex flex-col gap-2">
            <div class="flex flex-col items-center justify-center">
                <NuxtImg src="/logo.png" class="w-[60px] h-[45px] mb-5" />
                <h1
                    class="text-[#8D7662] lg:text-[25px] md:text-[25px] text-[18px] leading-[100%] lg:leading-[200%] font-[600]">
                    Subscribe to view
                    full
                    documents
                </h1>
            </div>
            <div class="flex flex-col items-center justify-center">
                <UForm class="lg:w-[373px] md:w-[373px] w-[300px]" :schema="schema" :state="state">
                    <FormField name="email">
                        <UFormGroup name="email">
                            <UInput name="email" v-model="state.email" required variant="none" placeholder="Your email"
                                size="xl"
                                class="lg:mt-0 mt-2 w-full rounded-lg bg-[#D9D9D9] px-2 py-2 text-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" />
                        </UFormGroup>
                        <!-- <UFormGroup name="agree">
                            <UCheckbox class="mt-4"
                                :ui="{ border: 'border border-[#D9D9D9]', background: 'bg - white', wrapper: 'flex items - center', label: 'lg:text-[13px] md:text-[20px] text-[13px] italic leading-[150 %] font-[300]' }"
                                v-model="state.agree" label="I agree to the Terms of Use and the Privacy Policy*" />
                        </UFormGroup> -->
                    </FormField>
                </UForm>
                <div class="px-4 md:px-0 mx-auto lg:flex md:hidden hidden justify-center">
                    <UButton :loading="formSubmitting" :disabled="formSubmitting" id="submit-contact-form" color="gray"
                        @click="submitForm" variant="solid" type="submit" aria-label="Submit contact form"
                        class="bg-gradient-to-r from-[#8D7662] to-[#27211B] md:py-5 py-4 lg:px-[140px] lg:py-4 px-10 hover:bg-[#90755e] mt-7 md:rounded-[8px] rounded-[10px] md:w-auto">
                        <span
                            class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] text-[16px] lg:text-[18px]">
                            subscribe
                        </span>
                    </UButton>
                </div>

                <div class="max-w-[300px] md:max-w-[373px] px-4 md:px-0 mx-auto flex justify-center lg:hidden md:flex">
                    <UButton :loading="formSubmitting" :disabled="formSubmitting" id="submit-contact-form" color="gray"
                        @click="submitForm" variant="solid" type="submit" aria-label="Submit contact form"
                        class="bg-gradient-to-r flex items-center justify-center w-[300px] md:w-[373px] py-4 from-[#8D7662] to-[#27211B]  hover:bg-[#90755e] mt-7 md:rounded-[8px] rounded-[10px]">
                        <span
                            class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] text-[16px] lg:text-[18px]">
                            submit
                        </span>
                    </UButton>
                </div>
            </div>
        </div>
    </UModal>
</template>
