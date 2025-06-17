<script setup lang="ts">
const items = [
    { label: 'Connect', sub_label: `Let's get started`, icon: '/workflow/Connect.svg', activeIcon: '/workflow/Connect-active.svg' },
    { label: 'Brief', sub_label: 'Understanding is key!', icon: '/workflow/Brief.svg', activeIcon: '/workflow/Brief-active.svg' },
    { label: 'Crafting', sub_label: 'From vision to visuals', icon: '/workflow/Crafting.svg', activeIcon: '/workflow/Crafting-active.svg' },
    { label: 'Pay & Delivery', sub_label: 'Wrap it up', icon: '/workflow/Payment.svg', activeIcon: '/workflow/Payment-active.svg' }
]

const selected = ref(0)
</script>
<template>
    <div class="mb-20">
        <div class="flex flex-col justify-center items-center">
            <div class="text-center mt-[100px]">
                <h1 class="uppercase font-[700] text-[72px] leading-[100%] text-[#8D7662]">Workflow</h1>
                <p class="text-[48px] leading-[150%] font-[600] italic">At Nomo Render: Great ideas start with a simple
                    chat</p>
            </div>
            <UTabs v-model="selected" :items="items" orientation="vertical" class="mt-20" :ui="{
                wrapper: 'flex space-y-0 items-start justify-center lg:max-w-[1200px] md:max-w-[800px] bg-[#FAF8F5] py-5',
                list: {
                    background: '',
                    base: 'py-5',
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
                <template #default="{ item, index }">
                    <nuxt-img v-if="selected == index" :src="item.activeIcon"
                        class="w-[78px] h-[78px] border-2 rounded-full border-[#980b0d] p-1" />
                    <nuxt-img v-else :src="item.icon"
                        class="w-[78px] h-[78px] border-2 rounded-full border-black p-1" />
                    <div class="truncate flex flex-col items-start w-[200px]">
                        <span class="text-[28px] leading-[150%] font-[500]">{{ item.label }}</span>
                        <span class="font-angelface text-[35px] font-400 leading-[120%]">{{ item.sub_label }}</span>
                    </div>
                </template>
                <template #item="{ index }">
                    <div v-if="index === 0" class="border border-y-0 border-r-0 border-l border-[#AFAFAF]">
                        <WorkflowConnect />
                    </div>
                    <div v-else-if="index === 1" class="border border-y-0 border-r-0 border-l border-[#AFAFAF]">
                        <WorkflowBrief />
                    </div>
                    <div v-else-if="index === 2" class="border border-y-0 border-r-0 border-l border-[#AFAFAF]">
                        <WorkflowCrafting />
                    </div>
                    <div v-else-if="index === 3" class="border border-y-0 border-r-0 border-l border-[#AFAFAF]">
                        <WorkflowPaying />
                    </div>
                </template>
            </UTabs>
        </div>
        <div class="w-full flex justify-center text-center gap-10 mt-10">
            <UButton color="gray" variant="solid" to="/portfolio"
                class="bg-[#8D7662] uppercase text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 px-6 py-2 hover:bg-[#90755e]">
                explore our projects
            </UButton>
            <UButton color="gray" variant="solid" to="/pricing" class=" bg-[#8D7662] uppercase text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 px-6 py-2
                hover:bg-[#90755e]">
                check our pricing
            </UButton>
        </div>
    </div>
</template>
