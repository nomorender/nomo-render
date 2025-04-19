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

// const state = reactive({
//     name: undefined,
//     email: undefined,
//     description: undefined,
//     agree: false
// })

async function onError(event: FormErrorEvent) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
    <div class="bg-[#D9D9D9] md:py-[60px] py-[45px]">
        <div class="md:px-8 flex items-center justify-center">
            <div class="w-[1072px]">
                <div class="px-20">
                    <p class="text-center text-xl md:text-3xl md:mb-[20px] uppercase">contact</p>
                    <div
                        class="text-center font-semibold text-3xl md:text-[64px] w-[220px] md:w-full leading-[100%] mb-5 md:mb-20 text-[#8D7662]  md:px-6">
                        Let’s bring your vision to life!
                    </div>
                </div>
                <div class="block lg:flex lg:gap-[100px]">
                    <div class="lg:w-[50%]">
                        <p
                            class="text-justify font-[300] italic text-[15px] md:text-[25px] leading-[180%] md:leading-[150%] px-10 md:px-0 max-w-4xl mx-auto">
                            Have a project in mind? Whether you need stunning 3D renderings, detailed architectural
                            visuals,
                            or custom design solutions, we’re here to help. Contact us, and let’s discuss how we can
                            transform your ideas into reality.
                        </p>
                        <div
                            class="flex items-center justify-center md:grid grid-cols-2 gap-2 mt-5 place-items-center md:place-items-start w-full px-0 mx-0 max-w-[470px] md:max-w-none">
                            <NuxtImg src="/contact/contact1.jpg" class="md:rounded-[8px] lg:h-[325px] lg:w-[235px] w-[50%] h-[252px] md:w-full md:h-full object-cover"
                                alt="Contact Image 1" />
                            <NuxtImg src="/contact/contact2.jpg" class="md:rounded-[8px] lg:h-[325px] lg:w-[235px] w-[50%] h-[252px]  md:w-full md:h-full  object-cover"
                                alt="Contact Image 2" />
                        </div>
                    </div>
                    <div class="lg:w-[50%] w-full mt-[40px] lg:mt-0 md:px-0">
                        <UForm id="contactForm" :validate="validate" :state="state" class="space-y-4 md:px-0 w-full"
                            @submit="onSubmit" @error="onError">
                            <UFormGroup class="flex items-center justify-center md:block ">
                                <UInput padded required color="white" variant="none" placeholder="Name (required)"
                                    v-model="state.name" size="xl"
                                    class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-[320px] md:w-full"
                                    :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                            </UFormGroup>

                            <UFormGroup class="flex items-center justify-center md:block">
                                <UInput padded required color="white" variant="none" placeholder="Email (required)"
                                    v-model="state.email" size="xl"
                                    class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-[320px] md:w-full"
                                    :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                            </UFormGroup class="flex items-center justify-center md:block">

                            <UFormGroup class="flex items-center justify-center md:block">
                                <UTextarea padded required color="white" variant="none"
                                    placeholder="Describe your project" v-model="state.description" size="xl"
                                    class="bg-[#C6C6C6] px-2 rounded-[8px] shadow-lg w-[320px] md:w-full"
                                    :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }"
                                    :rows="7" md:rows="20" />
                            </UFormGroup>

                            <div class="px-4 md:px-0 mx-auto flex justify-center lg:block">
                                <!-- <UCheckbox
                                    label="I agree to the Terms of Use and the Privacy Policy *" required
                                    class="text-[12px] italic lg:text-[20px] text-gray-700 mt-9" /> -->
                                <UButton color="gray" variant="solid" type="submit" form="contactForm"
                                    class="bg-gradient-to-r from-[#8D7662] to-[#27211B] md:py-0 py-4 lg:px-8 lg:py-5 px-10 hover:bg-[#90755e] mt-6 lg:mt-8 md:rounded-[8px] rounded-[10px] md:w-auto">
                                    <div
                                        class=" w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] text-[16px] md:text-[28px]">
                                        let’s work together!
                                    </div>
                                </UButton>
                            </div>
                        </UForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>