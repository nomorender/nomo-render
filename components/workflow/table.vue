<script setup lang="ts">
import WorkflowConnect from '~/components/workflow/connect.vue'
import WorkflowBrief from '~/components/workflow/brief.vue'
import WorkflowCrafting from '~/components/workflow/crafting.vue'
import WorkflowDelivery from '~/components/workflow/paying.vue'

const activeIndex = ref(null)
const items = [
    { label: 'Connect', sub_label: `Let's get started`, icon: '/workflow/Connect.svg', activeIcon: '/workflow/Connect-active.svg' },
    { label: 'Brief', sub_label: 'Understanding is key!', icon: '/workflow/Brief.svg', activeIcon: '/workflow/Brief-active.svg' },
    { label: 'Crafting', sub_label: 'From vision to visuals', icon: '/workflow/Crafting.svg', activeIcon: '/workflow/Crafting-active.svg' },
    { label: 'Pay & Delivery', sub_label: 'Wrap it up', icon: '/workflow/Payment.svg', activeIcon: '/workflow/Payment-active.svg' }
]

const items_mobile = [
    { label: 'Connect - Let’s get started' },
    { label: 'Brief - Understanding is key' },
    { label: 'Crafting - From vision to visuals' },
    { label: 'Pay & Delivery - Wrap it up' },
]
const componentMap: Record<string, any> = {
    'Connect - Let’s get started': WorkflowConnect,
    'Brief - Understanding is key': WorkflowBrief,
    'Crafting - From vision to visuals': WorkflowCrafting,
    'Pay & Delivery - Wrap it up': WorkflowDelivery,
}

const toggle = (index: any) => {
    if (activeIndex) {
        activeIndex.value = activeIndex.value === index ? null : index
    }
}
const selected = ref(0)
</script>
<template>
    <div class="lg:mb-20 mb-10">
        <div class="lg:flex hidden flex-col justify-center items-center">
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
                    <nuxt-img id="see-workflow" :alt="item.label" v-if="selected == index" :src="item.activeIcon"
                        class="w-[78px] h-[78px] border-2 rounded-full border-[#980b0d] p-1" />
                    <nuxt-img id="see-workflow" :alt="item.label" v-else :src="item.icon"
                        class="w-[78px] h-[78px] border-2 rounded-full border-[#6b7280] p-1" />
                    <div id="see-workflow" class="truncate flex flex-col items-start w-[200px]">
                        <span id="see-workflow" class="text-[28px] leading-[150%] font-[500]">{{ item.label }}</span>
                        <span id="see-workflow" class="font-angelface text-[35px] font-400 leading-[120%]">{{
                            item.sub_label }}</span>
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
        <!-- For Mobile -->
        <div class="block lg:hidden md:block max-w-[1280px] w-full mx-auto space-y-5">
            <div class="text-center mt-[100px] flex items-center justify-center flex-col gap-[10px]">
                <h1 class="uppercase font-[700] text-[34px] leading-[100%] text-[#8D7662]">Workflow</h1>
                <p class="text-[18px] leading-[150%] font-[600] max-w-[310px] italic">At Nomo Render: Great ideas start
                    with a
                    simple
                    chat</p>
            </div>
            <div class="">
                <NuxtImg src="./contact/Contact.jpg" alt="Picture of a 3D room"
                    class="w-full mb-[60px] object-contain object-center" />
            </div>
            <div class="md:max-w-[700px] max-w-[320px] mx-auto">
                <div v-for="(item, index) in items_mobile" :key="index"
                    class="accordion-item bg-[#D9D9D9] md:rounded-[20px] rounded-[16px] px-[10px] py-[17px] my-3">
                    <div class="flex items-center md:gap-[35px] gap-[15px] px-[15px] py-0 cursor-pointer"
                        @click="toggle(index)">
                        <div class="flex relative tems-center">
                            <UIcon :alt="item.label"
                                :name="activeIndex === index ? 'iconoir:minus-circle-solid' : 'iconoir:plus-circle-solid'"
                                class="md:w-[35px] md:h-[35px] w-[20px] h-[20px] transform transition-transform duration-200" />
                            <div v-if="index === 0"
                                class="md:hidden absolute -top-10 -left-[78px] z-10 text-xs text-[#8D7662] flex flex-col items-center">
                                <div
                                    class="-rotate-[0.1rad] mb-1 whitespace-nowrap translate-x-12 font-angelface text-black font-400 text-[24px]">
                                    Click here to see more
                                </div>
                                <nuxt-img src="/Furniture/Arrow.svg" alt="arrow this" class="size-7 rotate-3" />
                            </div>
                        </div>
                        <div
                            class="md:text-[32px] text-[16px] leading-[100%] md:leading-[150%] font-[400] md:font-[500]">
                            {{ item.label }}
                        </div>
                    </div>
                    <div class="md:text-[25px] text-[15px] font-light leading-[200%] text-justify text-[#000000]"
                        v-show="activeIndex === index">
                        <component :is="componentMap[item.label]" />
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:hidden lg:flex hidden justify-center text-center gap-10 mt-10">
            <UButton id="explore-more-projects" color="gray" variant="solid" to="/portfolio"
                class="bg-[#8D7662] uppercase text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 px-6 py-2 hover:bg-[#90755e]">
                explore our projects
            </UButton>
            <UButton id="check-pricing" color="gray" variant="solid" to="/pricing" class=" bg-[#8D7662] uppercase text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 px-6 py-2
                hover:bg-[#90755e]">
                check our pricing
            </UButton>
        </div>

        <div class="lg:hidden md:flex flex w-full items-center justify-center mt-9">
            <UButton id="explore-more-projects" color="gray" variant="solid" to="/portfolio"
                class="bg-[#8D7662] uppercase text-[#F5F5F5] md:text-[20px] text-[16px] font-[600] md:px-6 px-6 py-2 hover:bg-[#90755e]">
                explore our projects
            </UButton>
        </div>
    </div>
</template>