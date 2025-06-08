<script lang="ts" setup>
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const toast = useToast()
const isOpen = defineModel<boolean>('modelValue', { default: false })

const state = reactive({
    name: '',
    email: '',
    description: '',
    agree: true
})

const validate = (state: any) => {
    if (!state.email) {
        toast.add({
            title: 'Missing email !',
            description: 'Please fill email to send request!',
            color: 'red'
        })
    }
    if (!state.name) {
        toast.add({
            title: 'Missing name !',
            description: 'Please fill name to send request!',
            color: 'red'
        })
    }
    if (!state.agree) {
        toast.add({
            title: 'You need to agree !',
            description: 'Please agree to send request!',
            color: 'red'
        })
    }
}

async function onSubmit(event: FormSubmitEvent<any>) {
    const form = document.createElement('form')
    const { name, email, agree } = state
    if (!email) {
        toast.add({
            title: 'Missing email!',
            description: 'Please fill in your email to send the request.',
            color: 'red'
        })
        return
    }

    if (!name) {
        toast.add({
            title: 'Missing name!',
            description: 'Please fill in your name to send the request.',
            color: 'red'
        })
        return
    }

    if (!agree) {
        toast.add({
            title: 'Agreement required!',
            description: 'Please agree before sending the request.',
            color: 'red'
        })
        return
    }

    try {
        form.method = 'POST'
        form.action = 'https://mail.nomorender.com/form/submit?formId=4'
        form.style.display = 'none'
        form.target = '_blank'
        const appendField = (name: string, value: string) => {
            const input = document.createElement('input')
            input.type = 'hidden'
            input.name = name
            input.value = value
            form.appendChild(input)
        }
        appendField('mauticform[f_name]', state.name)
        appendField('mauticform[email]', state.email)
        appendField('mauticform[f_message]', state.description)
        appendField('mauticform[formId]', '3')
        appendField('mauticform[return]', '')
        appendField('mauticform[formName]', 'contactusnomorender')
        document.body.appendChild(form)
        form.submit()

        state.name = ''
        state.email = ''
        state.description = ''
        state.agree = true

        toast.add({
            title: 'Success',
            description: 'Thanks for sending us email!',
            color: 'green'
        })
        isOpen.value = false
    } catch (error) {
        toast.add({
            title: 'Error',
            description: 'Please try again later!',
            color: 'red'
        })
    }
}

function onError(event: FormErrorEvent) {
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
        <UButton square size="xl" icon="i-heroicons-x-mark-20-solid" variant="ghost"
            class="absolute right-4 top-4 rounded-full text-black hover:bg-transparent" @click="isOpen = false" />
        <div class="flex flex-wrap">
            <div class="w-full md:p-10 py-6 px-5 lg:w-3/5">
                <div class="mb-5 flex flex-col items-center lg:block">
                    <NuxtImg alt="logo" src="/logo.png" class="mb-4 h-[45px] w-[65px] lg:mb-2" />
                    <div class="text-[18px] font-semibold uppercase text-[#8D7662] lg:text-[25px]">
                        Send the request
                    </div>
                </div>
                <UForm id="requestForm" :state="state" class="space-y-4" @submit="onSubmit" @error="onError">
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
                        <UButton color="gray" size="xl" variant="solid" type="submit" form="requestForm"
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
                <NuxtImg src="/mobile-background.png" class="w-full h-[580px] rounded-xl object-cover object-bottom"
                    alt="Form Pic" />
            </div>
        </div>
    </UModal>
</template>
