<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'
import { useAuth } from '~/stores/auth/useAuth'
const state = reactive({
    email: undefined,
    password: undefined
})

const show = ref(false)

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return errors
}

const onSubmit = async (event: FormSubmitEvent<any>) => {
    const toast = useToast();
    const auth = useAuth();
    const { email, password } = event.data;
    try {
        auth.signIn({ email, password })
        await auth.load();
        navigateTo('/dashboard');
    } catch (error: Error | any) {
        toast.add({
            title: `Sign in error`,
            icon: 'line-md:alert-circle-loop',
            description: 'Message: ' + error.message,
            color: "red"
        });
        return;
    }
}

const onError = async (event: FormErrorEvent) => {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-[#f8fafc]">
        <div class="bg-white px-10 py-7 shadow-md rounded-2xl">
            <div class="w-full flex flex-col justify-center items-center">
                <div class="font-semibold tracking-tight text-[30px]">
                    welcome back
                </div>
                <div class="text-md text-[#64758b]">
                    Enter email and password to login
                </div>
            </div>
            <UForm :validate="validate" :state="state" class="space-y-4 w-[400px] mt-5" @submit="onSubmit"
                @error="onError">
                <UFormGroup label="Email" name="email" class="font-medium leading-1">
                    <UInput v-model="state.email" placeholder="name@example.com" size="xl" />
                </UFormGroup>
                <UFormGroup label="Password" name="password" class="font-medium leading-1">
                    <UInput v-model="state.password" :type="show ? 'text' : 'password'" placeholder="********"
                        size="xl" />
                </UFormGroup>
                <UButton type="submit"
                    class="w-full flex justify-center items-center bg-[#19194d] hover:bg-[#404291] transition-all py-3">
                    <span class="">Login</span>
                </UButton>
            </UForm>
        </div>
    </div>
</template>