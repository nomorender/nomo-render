<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const state = reactive({
    name: undefined,
    email: undefined,
    description: undefined
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.name) errors.push({ path: 'name', message: 'Required' })
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
    <div class="bg-[#D9D9D9] py-10 md:py-20">
        <div class="md:px-8">
            <div>
                <p class="text-center text-xl md:text-3xl uppercase">contact</p>
                <div
                    class="text-center font-semibold text-3xl md:text-[64px] leading-[100%] mb-5 md:mb-20 text-[#8D7662] px-6 md:px-20">
                    Let’s bring your vision to life!
                </div>
            </div>
            <div class="block lg:flex lg:gap-[100px] lg:px-[150px]">
                <div class="lg:w-[50%]">
                    <p
                        class="text-justify font-[300] italic text-[15px] md:text-[25px] leading-[180%] md:leading-[150%] px-7 md:px-0 max-w-4xl mx-auto">
                        Have a project in mind? Whether you need stunning 3D renderings, detailed architectural visuals,
                        or custom design solutions, we’re here to help. Contact us, and let’s discuss how we can
                        transform your ideas into reality.
                    </p>
                    <div class="grid grid-cols-2 gap-2 mt-10 place-items-center md:place-items-start w-full px-0 mx-0">
                        <NuxtImg src="/contact/Pic1.png"
                            class="w-full max-w-[190px] h-auto md:max-w-[335px] object-cover" />
                        <NuxtImg src="/contact/Pic2.png"
                            class="w-full max-w-[190px] h-auto md:max-w-[335px] object-cover" />
                    </div>
                </div>

                <div class="lg:w-[50%] mt-6 lg:mt-0">
                    <UForm id="contactForm" :validate="validate" :state="state" class="space-y-4 px-4 md:px-0"
                        @submit="onSubmit" @error="onError">
                        <UFormGroup>
                            <UInput padded required color="white" variant="none" placeholder="Name (required)"
                                v-model="state.name" size="xl" class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-full"
                                :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                        </UFormGroup>

                        <UFormGroup>
                            <UInput padded required color="white" variant="none" placeholder="Email (required)"
                                v-model="state.email" size="xl" class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-full"
                                :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                        </UFormGroup>

                        <UFormGroup>
                            <UTextarea padded required color="white" variant="none" placeholder="Describe your project"
                                v-model="state.description" size="xl"
                                class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-full"
                                :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }"
                                :rows="8" md:rows="10" />
                        </UFormGroup>

                        <div class="px-4 md:px-0 mx-auto flex justify-center lg:block">
                            <UButton color="gray" size="xl" variant="solid" type="submit" form="contactForm"
                                class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-6 lg:py-4 px-10 py-6 hover:bg-[#90755e] mt-6 md:mt-10 rounded-[8px] w-full md:w-auto max-w-xs">
                                <div class="w-full flex justify-center items-center uppercase text-[#F5F5F5] text-[16px] md:text-[20px]">
                                    let’s work together!
                                </div>
                            </UButton>
                        </div>
                    </UForm>
                </div>
            </div>
        </div>
    </div>
</template>