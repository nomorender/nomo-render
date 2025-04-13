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
            <UButton class="hidden sm:block hover:bg-[#1e1e1e] transition-all" color="white" variant="outline" size="xl" @click="isOpen = true">REQUEST A
                QUOTE</UButton>
            <UButton class="sm:hidden" color="white" variant="outline">REQUEST A QUOTE</UButton>
        </div>

        <UModal v-model="isOpen" :ui="{base: 'rounded-[32px]', overlay: { background: 'bg-[#000000] opacity-[50%]' }, width: 'sm:max-w-5xl', container: 'border-none flex items-center justify-center !shadow-none' }">
            <div class="relative bg-[#FAF8F5] rounded-[32px]">
                <UButton square size="xl" icon="i-heroicons-x-mark-20-solid" variant="ghost"
                    class="absolute rounded-full right-4 top-4 text-black hover:bg-transperent"
                    @click="isOpen = false" />
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-[60%] p-10">
                        <div class="lg:mb-4 flex flex-col justify-center items-center lg:block">
                            <NuxtImg src="/logo.png" class="w-[65px] h-[45px] lg:mb-5 mb-4" />
                            <div class="uppercase text-[#8D7662] lg:text-[25px] text-[18px] font-[600] mb-4">Send the
                                request</div>
                        </div>
                        <div>
                            <UForm id="requestForm" :validate="validate" :state="state"
                                class="space-y-4 lg:px-0 md:px-0" @submit="onSubmit" @error="onError">
                                <UFormGroup>
                                    <UInput padded required color="white" variant="none" placeholder="Your name"
                                        v-model="state.name" size="xl"
                                        class="bg-gray-200 px-4  rounded-lg w-full text-black placeholder-black mb-2 shadow-lg"
                                        :ui="{ placeholder: 'placeholder-black font-[300] text-[16px] md:text-[18px]' }" />

                                    <UInput padded required color="white" variant="none" placeholder="Your email"
                                        v-model="state.email" size="xl"
                                        class="bg-gray-200 px-4  rounded-lg w-full text-black placeholder-black  mb-2 shadow-lg"
                                        :ui="{ placeholder: 'placeholder-black font-[300] text-[16px] md:text-[18px]' }" />

                                    <UTextarea padded required color="white" variant="none" placeholder="Your message"
                                        v-model="state.description" size="xl"
                                        class="bg-gray-200 px-4 rounded-lg w-full text-black placeholder-black  mb-2 shadow-lg"
                                        :ui="{ placeholder: 'placeholder-black font-[300] text-[16px] md:text-[18px]' }"
                                        :rows="6" md:rows="8" />

                                    <!-- <UCheckbox v-model="state.agree"
                                        label="I agree to the Terms of Use and the Privacy Policy *" required
                                        class="text-sm md:text-base text-gray-700" /> -->
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
                    </div>

                    <!-- ANH BEN TRAI -->
                    <div class="lg:w-[40%]">
                        <NuxtImg src="/Form.png" class="w-full h-full hidden lg:block object-cover object-center" />
                    </div>
                </div>
            </div>
        </UModal>
    </div>
</template>