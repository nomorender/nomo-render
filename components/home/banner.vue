<script lang="ts" setup>
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const isOpen = ref(false)

const state = reactive({
    name: undefined,
    email: undefined,
    description: undefined,
    agree: false
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.name) errors.push({ path: 'name', message: 'Required' })
    if (!state.agree) errors.push({ path: 'agree', message: 'You must agree to the Terms of Use and Privacy Policy' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    console.log(event.data)
}

async function onError(event: FormErrorEvent) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

</script>

<template>
    <div
        class="bg-[url(/mobile-background.png)] sm:bg-[url(/bg2.jpg)] h-screen overflow-hidden w-screen justify-center flex items-center bg-cover bg-center relative">
        <div class="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div class="w-full relative text-white mx-8 z-10 md:px-[180px]">
            <h1 class="text-4xl md:text-7xl font-bold mb-8">
                3D Visualization <br> Studio
            </h1>
            <UButton class="hidden sm:block hover:bg-[#1e1e1e] transition-all" color="white" variant="outline" size="xl"
                @click="isOpen = true">REQUEST A
                QUOTE</UButton>
            <UButton class="sm:hidden"  @click="isOpen = true" color="white" variant="outline">REQUEST A QUOTE</UButton>
        </div>

        <UModal v-model="isOpen" :ui="{
            overlay: { background: 'bg-[#000000] opacity-[80%]' },
            width: 'sm:max-w-5xl',
            height: '',
            container: 'border-none flex items-center justify-center shadow-none',
            base: 'bg-[#FAF8F5] rounded-xl'
        }">
            <UButton square size="xl" icon="i-heroicons-x-mark-20-solid" variant="ghost"
                class="absolute right-4 top-4 rounded-full text-black hover:bg-transparent" @click="isOpen = false" />
            <div class="flex flex-wrap">
                <div class="w-full md:p-10 py-6 px-5 lg:w-3/5">
                    <div class="mb-4 flex flex-col items-center lg:block">
                        <NuxtImg alt="logo" src="/logo.png" class="mb-4 h-[45px] w-[65px] lg:mb-5" />
                        <div class="mb-4 text-[18px] font-semibold uppercase text-[#8D7662] lg:text-[25px]">
                            Send the request
                        </div>
                    </div>
                    <UForm id="requestForm" :validate="validate" :state="state" class="space-y-4" @submit="onSubmit"
                        @error="onError">
                        <UFormGroup class="w-[100%]">
                            <UInput v-model="state.name" required variant="none" placeholder="Your name" size="xl"
                                class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-4 text-black placeholder-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" />
                            <UInput v-model="state.email" required variant="none" placeholder="Your email" size="xl"
                                class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-4 text-black placeholder-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" />
                            <UTextarea v-model="state.description" required variant="none" placeholder="Your message"
                                size="xl"
                                class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-4 text-black placeholder-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" :rows="6"
                                md:rows="8" />
                        </UFormGroup>
                        <div class="px-4 md:px-0 mx-auto flex justify-center lg:block">
                            <UButton color="gray" size="xl" variant="solid" type="submit" form="requestForm"
                                class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-3  hover:bg-[#90755e] mt-6 md:mt-10 lg:rounded-[12px] rounded-[8px]  px-10 py-3 md:w-auto max-w-xs">
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
    </div>
</template>