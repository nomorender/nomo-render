<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const state = reactive({
    name: undefined,
    email: undefined,
    desciption: undefined
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
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
    <div class="bg-[#D9D9D9] py-20">
        <div>
            <div>
                <p class="text-center text-xl md:text-3xl uppercase">contact</p>
                <h2 class="text-center font-semibold text-3xl md:text-6xl mb-5 md:mb-20 text-[#8D7662]">
                    Let’s bring your vision to life!
                </h2>
            </div>

            <div class="flex px-[250px] gap-[100px]">
                <div class="w-[50%]">
                    <p class="text-justify font-[300] italic text-[25px] leading-[150%]">Have a project in mind? Whether
                        you need stunning 3D renderings, detailed architectural visuals,
                        or custom design solutions, we’re here to help. Contact us, and let’s discuss how we can
                        transform your ideas into reality.</p>
                    <div>
                        <div class="flex gap-4 mt-10">
                            <NuxtImg src="/contact/Pic1.png" class="w-[335px] h-[325px]" />
                            <NuxtImg src="/contact/Pic2.png" class="w-[335px] h-[325px]" />
                        </div>
                    </div>
                </div>

                <div class="w-[50%]">
                    <div>
                        <UForm id="contactForm" :validate="validate" :state="state" class="space-y-4" @submit="onSubmit"
                            @error="onError">
                            <UFormGroup>
                                <UInput padded required color="white" variant="none" placeholder="Name (required)"
                                    v-model="state.name" size="xl" class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg"
                                    :ui="{
                                        placeholder: 'placeholder-black font-[300] text-[25px] leading-[200%]',
                                    }" />
                            </UFormGroup>

                            <UFormGroup>
                                <UInput padded required color="white" variant="none" placeholder="Email (required)"
                                    v-model="state.name" size="xl" class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg"
                                    :ui="{
                                        placeholder: 'placeholder-black font-[300] text-[25px] leading-[200%]',
                                    }" />
                            </UFormGroup>

                            <UFormGroup>
                                <UTextarea padded required color="white" variant="none"
                                    placeholder="Describe your project" v-model="state.name" size="xl"
                                    class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg" :ui="{
                                        placeholder: 'placeholder-black font-[300] text-[25px] leading-[200%]',
                                    }" :rows="10" />
                            </UFormGroup>
                        </UForm>

                        <UButton color="gray" size="xl" variant="solid" type="submit" form="contactForm"
                                class="bg-gradient-to-r from-[#8D7662] to-[#27211B] uppercase text-[#F5F5F5] text-[20px] px-6 py-2 hover:bg-[#90755e] mt-10 rounded-[8px]">
                                <div class="uppercase">let’s work together!</div></UButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>