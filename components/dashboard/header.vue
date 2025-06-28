<script setup lang="ts">
import { useAuth } from '~/stores/auth/useAuth';

const items = [
    [{
        label: 'Signout',
        icon: 'si:sign-out-alt-fill'
    }]
]
const signOut = async () => {
    const auth = useAuth()
    await auth.signOut()
    navigateTo('/login');
}
</script>

<template>
    <div class="bg-white shrink-0 border-b flex items-center justify-end py-3">
        <div class="mx-10">
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                <UAvatar src="/default.png" alt="Avatar" class="size-9" />
                <template #item="{ item }">
                    <div class="flex items-center gap-2 px-3 py-1 w-full"
                        :class="item.label === 'Signout' ? 'text-red-500 hover:bg-red-100' : 'text-gray-700 hover:bg-gray-100'"
                        @click="item.label === 'Signout' ? signOut() : null">
                        <UIcon :name="item.icon" class="w-5 h-5" />
                        <span>{{ item.label }}</span>
                    </div>
                </template>
            </UDropdown>
        </div>
    </div>
</template>