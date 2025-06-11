<script setup lang="ts">
const items = [
    { label: 'Connect', sub_label: `Let's get started`, icon: '/workflow/Connect.svg' },
    { label: 'Brief', sub_label: 'Understanding is key!', icon: '/workflow/Brief.svg' },
    { label: 'Crafting', sub_label: 'From vision to visuals', icon: '/workflow/Crafting.svg' },
    { label: 'Pay & Delivery', sub_label: 'Wrap it up', icon: '/workflow/Paying.svg' }
]
</script>

<template>
    <div>
        <div class="flex flex-col justify-center items-center">
            <div class="text-center mt-[100px]">
                <h1 class="uppercase font-[700] text-[72px] leading-[100%] text-[#8D7662]">Workflow</h1>
                <p class="text-[48px] leading-[150%] font-[600] italic">At Nomo Render: Great ideas start with a simple
                    chat</p>
            </div>
            <UTabs :items="items" orientation="vertical" class="mt-20" :ui="{
                wrapper: 'flex space-y-0 items-start justify-center w-[1200px] bg-[#FAF8F5] py-5',
                list: {
                    background: 'bg-[#FAF8F5]',
                    base: 'border border-y-0 border-l-0 border-r border-[#AFAFAF] h-[1220px] py-5',
                    width: 'w-[380px]',
                    height: 'h-fit',
                    rounded: 'rounded-none',
                    padding: 'p-0',
                    marker: { rounded: 'rounded-none' },
                    tab: {
                        base: 'relative inline-flex gap-5 items-center justify-center w-[380px]',
                        height: 'h-fit',
                        padding: 'p-4',
                        rounded: 'rounded-none',
                        active: 'bg-[#ECECEC] border-r-2 border-[#980C0C] -mr-[0px]',
                        icon: 'hidden'
                    }
                }
            }">
                <template #default="{ item }">
                    <nuxt-img :src="item.icon" class="w-[81px] h-[81px]" />
                    <div class="truncate flex flex-col items-start w-[200px]">
                        <span class="text-[28px] leading-[150%] font-[500]">{{ item.label }}</span>
                        <span class="font-angelface text-[35px] font-400 leading-[120%]">{{ item.sub_label }}</span>
                    </div>
                </template>
                <template #item="{ index }">
                    <div v-if="index === 0">
                        <WorkflowConnect />
                    </div>
                    <div v-else-if="index === 1">
                        <WorkflowBrief />
                    </div>
                    <div v-else-if="index === 2">
                        <WorkflowCrafting />
                    </div>
                </template>
            </UTabs>
        </div>
    </div>
</template>
