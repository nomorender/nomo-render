<script lang="ts" setup>
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const isScrolled = ref(false);
const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
const isOpen = ref(false)

const state = reactive({
    name: undefined,
    email: undefined,
    description: undefined,
    agree: false // Thêm trạng thái cho checkbox
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
    <div>
        <UButton v-if="isScrolled" @click="isOpen = true"
            class="block fixed md:bottom-10 md:right-10 bottom-6 right-6 bg-[#980C0C] text-[#F5F5F5] md:px-2 md:py-2 rounded-[10px] shadow-lg hover:bg-[#980C0C] transition z-50">
            <div
                class="uppercase text-[#F5F5F5] md:font-[500] font-[400] md:text-[18px] text-[13px] leading-[16px] px-[10px] py-[5px]">
                quote now
            </div>
        </UButton>

        <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-5xl', container: 'border-none flex items-center justify-center !shadow-none' }">
            <div class=" relative bg-[#FAF8F5]">
                <UButton square size="xl" icon="i-heroicons-x-mark-20-solid" variant="ghost"
                    class="absolute rounded-full right-4 top-4 text-black hover:bg-transperent"
                    @click="isOpen = false" />
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-[60%] p-10">
                        <div class="lg:mb-4 flex flex-col justify-center items-center lg:block">
                            <NuxtImg src="/logo.png" class="w-[65px] h-[45px] lg:mb-5 mb-4" />
                            <div class="uppercase text-[#8D7662] lg:text-[25px] text-[18px] font-[600] mb-4">Send the request</div>
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
                    <div class="lg:w-[40%]">
                        <NuxtImg src="/Form.png" class="w-full h-full hidden lg:block" />
                    </div>
                </div>
            </div>
        </UModal>
    </div>
</template>