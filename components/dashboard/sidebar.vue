<script setup lang="ts">
const links =
    [
        {
            label: 'NomoRender',
            icon: 'material-symbols:arrow-back',
            to: '/'
        },
        {
            label: 'Dashboard',
            icon: 'material-symbols:dashboard',
            to: '/dashboard'
        }, {
            label: 'Homepage',
            icon: 'material-symbols-light:other-houses',
            to: '/dashboard/homepage'
        }, {
            label: 'Exterior Rendering',
            icon: 'i-heroicons-command-line',
            to: '/dashboard/exterior-rendering'
        },
        {
            label: 'Interior Rendering',
            icon: 'i-heroicons-command-line',
            to: '/dashboard/interior-rendering'
        },
        {
            label: 'Furniture',
            icon: 'i-heroicons-command-line',
            to: '/dashboard/furniture'
        },
        {
            label: 'Pricing Plan',
            icon: 'i-heroicons-command-line',
            to: '/components/pricing-plan'
        }
    ]

</script>

<template>
    <aside class="w-50 bg-gray-200 text-white shrink-0 h-full">
        <div>
            <div class="py-5 flex pl-2 items-center gap-2">
                <nuxt-img alt="Logo" src="/Logo3.svg" class="w-[70px] h-[44px]"></nuxt-img>
                <div class='border-2 border-gray-300 rounded-lg px-2'>
                    <span class="font-semibold text-sm truncate text-gray-700">
                        &lt; Admin/&gt;
                    </span>
                </div>
            </div>
            <div>
                <UVerticalNavigation :links="links">
                    <template #default="{ link }">
                        <div class="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
                            <span class="group-hover:text-black relative text-black">
                                {{ link.label }}
                            </span>
                        </div>
                    </template>
                </UVerticalNavigation>
            </div>
        </div>
    </aside>
</template>