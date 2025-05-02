<template>
  <div class="pb-20">
    <div class=" pb-[80px] pt-[90px] flex justify-center items-center w-full">
      <div class="flex items-center justify-center gap-[30px] w-[81vw] max-w-[1200px] transition-all">
        <div class="flex flex-col w-[50%]">
          <div class="">
            <div class="font-[700] text-[72px] w-fit text-[#8D7662] uppercase">
              3d exterior
            </div>
            <div class="font-[600] text-[60px] w-fit leading-[150%] text-[#000000]">
              Rendering Service
            </div>
          </div>
          <div class="mt-7">
            <UButton class="hidden sm:block hover:bg-[#1e1e1e] hover:text-white transition-all" color="white"
              variant="outline" size="xl" @click="isOpen = true">REQUEST A
              QUOTE</UButton>
            <UButton class="sm:hidden" @click="isOpen = true" color="white" variant="outline">REQUEST A QUOTE</UButton>
          </div>
        </div>
        <div class="">
          <p class="text-[25px] w-[480px] font-[300] leading-[200%] text-justify"><span class="font-[500]">Top-notch
              quality</span>
            3D exterior visualizations bring architectural concepts to life with photorealistic
            renderings of buildings, landscapes, and urban spaces.</p>
        </div>
      </div>
    </div>
    <NuxtImg alt="heroPic" src="Extorior/HTL01.png" class="w-full h-[700px] rounded-[8px] object-cover object-center"
      draggable="false" />
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
        <div class="mb-5 flex flex-col items-center lg:block">
          <NuxtImg alt="logo" src="/logo.png" class="mb-4 h-[45px] w-[65px] lg:mb-2" />
          <div class="text-[18px] font-semibold uppercase text-[#8D7662] lg:text-[25px]">
            Send the request
          </div>
        </div>
        <UForm id="requestForm" :validate="validate" :state="state" class="space-y-4" @submit="onSubmit"
          @error="onError">
          <UFormGroup class="w-[100%]">
            <UInput v-model="state.name" required variant="none" placeholder="Your name" size="xl"
              class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-2 text-black placeholder-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" />
            <UInput v-model="state.email" required variant="none" placeholder="Your email" size="xl"
              class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-2 text-black placeholder-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" />
            <UTextarea v-model="state.description" required variant="none" placeholder="Your message" size="xl"
              class="mb-2 w-full rounded-lg bg-[#D9D9D9] px-2 text-black placeholder-black shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              :ui="{ placeholder: 'text-[#000000] font-[300] text-[15px] md:text-[16px]' }" :rows="6" md:rows="8" />
          </UFormGroup>
          <div class="px-4 md:px-0 mx-auto flex justify-center lg:block">
            <UButton color="gray" size="xl" variant="solid" type="submit" form="requestForm"
              class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-3  hover:bg-[#90755e] mt-6 md:mt-10 lg:rounded-[12px] rounded-[8px]  px-10 py-3 md:w-auto max-w-xs">
              <div class="w-full flex justify-center items-center uppercase text-[#F5F5F5] text-[16px] md:text-[20px]">
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