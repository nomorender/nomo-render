<script setup lang="ts">
import { useReCaptcha } from 'vue-recaptcha-v3';
import z from 'zod';
const toast = useToast()
const recaptchaInstance = useReCaptcha()

const state = reactive({
  email: ''
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
    const token = await recaptchaInstance?.executeRecaptcha('subscribe_form')
    if (!token) throw new Error('Failed to generate reCAPTCHA token')

    const res = await $fetch('/api/subscribe', {
      method: 'POST',
      body: { email: state.email, recaptchaToken: token },
    })

    if (res.success) {
      state.email = ''
      toast.add({
        title: 'Success!',
        description: 'Thank you for getting in touch. Our team will contact you shortly',
        color: 'green'
      })
    } else {
      toast.add({
        title: 'Send email failed!',
        description: 'Something went wrong!',
        color: 'red'
      })
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
  <div class="flex items-center justify-center py-[45px] md:pb-[5rem] md:py-0">
    <div class="bg-[#eeeeee] md:p-8 text-center rounded-xl md:px-20 pb-10 pt-3 md:w-[1360px] w-[90%] h-fit">
      <div class="px-8 md:px-0  mx-auto lg:flex lg:items-center lg:justify-between">
        <div class="mt-5 mb-5 lg:w-[50%]">
          <div class="text-left">
            <div class="flex gap-4 md:mb-0">
              <div class="md:text-[32px] text-[15px]">Subscribe to</div>
              <nuxt-img alt="Plane" src="/Plane.svg" class="md:w-[136px] md:h-[62px] w-[66px] h-[30px] rotate-2" />
            </div>
            <div class="md:text-[64px] text-[30px] font-semibold text-[#8d7661] md:mb-5 mb-3">Nomo Render</div>
            <div class="flex md:block">
              <p class="italic md:text-[20px] text-[15px] font-light">Subscribe now & start creating
                stunning visuals with ease!</p>
            </div>
          </div>
          <div class="flex md:mt-10 mt-5">
            <div class="flex items-start">
              <UAvatar alt="picture of user a" src="/Avatar/Sub1.jpg" class="bg-black border-2 border-white md:w-[100px] md:h-[100px] w-[64px] h-[64px]
           [&>img]:!w-full [&>img]:!h-full [&>img]:object-cover [&>img]:object-center" />
              <UAvatar alt="picture of user b" src="/Avatar/Sub2.jpg" class="-ml-3 md:-ml-8 bg-black border-2 border-white md:w-[100px] md:h-[100px] w-[64px] h-[64px]
           [&>img]:!w-full [&>img]:!h-full [&>img]:object-cover [&>img]:object-center" />
              <UAvatar alt="picture of user c" src="/Avatar/Sub3.jpg" class="-ml-3 md:-ml-8 bg-black border-2 border-white md:w-[100px] md:h-[100px] w-[64px] h-[64px]
           [&>img]:!w-full [&>img]:!h-full [&>img]:object-cover [&>img]:object-center" />
            </div>
            <div class="md:ml-5 ml-3">
              <div class="flex">
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
                <UIcon name="ic:baseline-star" class="text-[#FFE100] w-6 h-6 md:w-12 md:h-12" />
              </div>
              <div class="flex items-start">
                <p class="font-[300] mt-2 items-start text-[15px]">200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[50%]">
          <div class="md:text-[25px] text-[15px] font-light text-justify leading-[200%]">
            <span class="font-medium">FREE CHECKLIST AND GOODIES</span> including pricing guides, templates, checklists,
            and exclusive freebies - to streamline your workflow and enhance your 3D projects.
          </div>
          <div class="italic md:text-[25px] text-[15px] font-light text-justify mt-2">No fluff, just the good stuff
          </div>
          <div class="flex items-center justify-center md:block">
            <div
              class="mt-10 flex items-center bg-[#D9D9D9] md:py-3 py-2 pr-2 md:pr-3 rounded-lg shadow-lg w-full md:w-full">
              <UForm class="w-full" :schema="schema" :state="state">
                <FormField name="email">
                  <UFormGroup class="flex items-center justify-center md:block ">
                    <UInput padded required color="white" variant="none" placeholder="Your email" v-model="state.email"
                      size="xl" class="bg-none md:pr-2 rounded-[8px] w-[150px] md:w-full"
                      :ui="{ placeholder: 'placeholder-black font-[300] text-[20px] md:text-[25px] leading-[200%]' }" />
                  </UFormGroup>
                </FormField>
              </UForm>
              <UButton aria-label="Click here to send an email to Nomorender" :loading="formSubmitting"
                @click="submitForm" :disabled="formSubmitting"
                class="md:px-5 md:py-6 bg-[#8D7662] text-white uppercase rounded-[8px] px-4 py-3 hover:bg-[#000000] transition-all">
                <div class="text-[#F5F5F5] font-semibold md:text-[28px] text-[16px]">Subscribe</div>
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>