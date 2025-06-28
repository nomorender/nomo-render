<script setup lang="ts">
import { useAuth } from '~/stores/auth/useAuth'

const links =
    [
        {
            label: 'NomoRender',
            icon: 'material-symbols:arrow-back',
            to: '/'
        },
        {
            label: 'Project',
            icon: 'fluent:tasks-app-24-filled',
            to: '/dashboard'
        }, {
            label: 'Furniture',
            icon: 'maki:furniture',
            to: '/dashboard/furniture'
        },
        {
            label: 'Portfolio',
            icon: 'material-symbols:contact-page-rounded',
            to: '/dashboard/portfolio'
        },
        {
            label: 'Blog',
            icon: 'mdi:blogger',
            to: '/dashboard/blog'
        },
        {
            label: 'Library',
            icon: 'ion:library',
            to: '/dashboard/library'
        },
        {
            label: 'Storage',
            icon: 'material-symbols:home-storage',
            to: '/dashboard/storage'
        }
    ]

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
    <aside class="w-50 bg-[#20222a] text-white shrink-0 h-full">
        <div>
            <div class="py-5 flex pl-2 items-center gap-2">
            </div>
            <div>
                <UVerticalNavigation :links="links" :ui="{
                    wrapper: 'w-[200px]',
                    base: 'px-10',
                    padding: 'px-2 py-5',
                    rounded: 'rounded-none',
                    inactive: 'text-[#f3f3f3] hover:bg-[#35363c]',
                    active: 'text-gray-900',
                    badge: {}
                }" />
            </div>

            <div>
                <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                    <UButton class="w-[200px] h-[50px] bg-[#20222a] hover:bg-white hover:text-black transition-all">
                        <UIcon name="ic:round-settings" class="w-5 h-5 text-gray-700" /> <span>Settings</span>
                    </UButton>
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
    </aside>
</template>