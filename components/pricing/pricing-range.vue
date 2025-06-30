<template>
    <div class="w-full flex flex-col items-center justify-center px-4 md:pt-[20px] md:pb-[70px] pt-[40px] pb-[45px]">
        <div
            class="font-[600] text-[30px] text-center leading-[130%] md:text-[35px] lg:text-[40px] md:leading-[100%] text-[#8D7662] md:mb-10 mb-[45px] uppercase">
            price range for each category
        </div>
        <div class="max-w-[1280px] w-full mx-auto space-y-5">
            <div v-for="(item, index) in items" :key="index" id="watch-price-range"
                class="accordion-item bg-[#D9D9D9] md:rounded-[20px] rounded-[16px] md:py-[20px] md:px-[30px] px-[10px]">
                <div id="watch-price-range"
                    class="flex items-center md:gap-[35px] gap-[15px] md:py-2 md:px-0 px-[15px] py-[20px] cursor-pointer"
                    @click="toggle(index)">
                    <div id="watch-price-range" class="flex relative tems-center">
                        <UIcon id="watch-price-range"
                            :name="activeIndex === index ? 'iconoir:minus-circle-solid' : 'iconoir:plus-circle-solid'"
                            class="md:w-[35px] md:h-[35px] w-[20px] h-[20px] transform transition-transform duration-200" />
                        <div id="watch-price-range" v-if="index === 0"
                            class="md:hidden absolute -top-10 -left-[78px] z-10 text-xs text-[#8D7662] flex flex-col items-center">
                            <div
                                class="-rotate-[0.1rad] mb-1 whitespace-nowrap translate-x-12 font-angelface text-black font-400 text-[24px]">
                                Click here to see more
                            </div>
                            <nuxt-img src="/Furniture/Arrow.svg" class="size-7 rotate-3" />
                        </div>
                    </div>
                    <div id="watch-price-range"
                        class="md:text-[32px] text-[16px] leading-[100%] md:leading-[150%] font-[400] md:font-[500]">
                        {{ item.label }}
                    </div>
                </div>
                <div class="md:text-[25px] text-[15px] font-light leading-[200%] text-justify text-[#000000]"
                    v-show="activeIndex === index">
                    <div class="px-3" v-html="item.des" v-if="item.des"></div>
                    <!-- PC -->
                    <div class="lg:grid hidden grid-cols-2 gap-[25px] mt-[20px]">
                        <div v-for="(box) in item.boxs" v-if="item.boxs" :key="box.title">
                            <div id="watch-price-range" class="bg-[#FFFFFF] col-span-1 rounded-[16px]">
                                <div id="watch-price-range" class="py-10">
                                    <div v-if="box.title" id="watch-price-range"
                                        class="w-full flex item-center justify-center text-[32px] font-[600] leading-[150%]">
                                        {{ box.title }}
                                    </div>
                                    <div v-if="box.des"
                                        class="w-full flex item-center justify-center text-[25px] italic font-[300] leading-[150%]">
                                        {{ box.des }}
                                    </div>
                                </div>
                                <div v-if="box.pic">
                                    <NuxtImg format="webp" :src="box.pic"
                                        class="h-[550px] w-full object-center object-cover" />
                                </div>
                                <div class="w-full">
                                    <div v-if="box.price || box.time || box.including || box.plus"
                                        class="flex flex-col justify-center items-center gap-[10px] h-[200px]">
                                        <div class="font-[500] text-[25px] leading-[200%]" v-if="box.price">{{ box.price
                                            }}
                                        </div>
                                        <div class="font-[500] text-[25px] leading-[200%]" v-if="box.time">{{ box.time
                                            }}
                                        </div>
                                        <div class="h-[76px]" v-if="box.including || box.plus">
                                            <div class="font-[300] text-[25px] leading-[150%] italic text-center"
                                                v-if="box.including">{{
                                                    box.including }}</div>
                                            <div class="font-[300] text-[25px] leading-[150%] italic text-center"
                                                v-if="box.plus">{{
                                                    box.plus }}</div>
                                        </div>
                                    </div>
                                    <div class="h-[200px] flex justify-center items-center" v-if="box.subdes">
                                        <div class="font-[500] text-[25px] leading-[200%]">{{ box.subdes
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- MOBILE -->
                    <div class="lg:hidden md:block block" v-if="hasPic(item.boxs)">
                        <div class="relative pt-2 mx-auto">
                            <UCarousel :items="item.boxs" arrows :ui="{
                                item: 'basis-full px-3',
                                arrows: {
                                    wrapper: 'flex items-center justify-center md:mt-2 sm:hidden gap-[15px] pb-5'
                                }
                            }" ref="carousel">
                                <template #default="{ item }">
                                    <div
                                        class="flex flex-col justify-center w-full bg-[#ffffff] rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-5">
                                        <div v-if="item.title || item.des" class="py-5">
                                            <div v-if="item.title"
                                                class="w-full flex item-center justify-center md:text-[30px] text-[18px] font-[600] leading-[100%]">
                                                {{ item.title }}
                                            </div>
                                            <div v-if="item.des"
                                                class="mt-2 w-full flex item-center justify-center md:text-[22px] text-[12px] italic font-[300] leading-[150%]">
                                                {{ item.des }}
                                            </div>
                                        </div>
                                        <div v-if="item.pic">
                                            <NuxtImg format="webp" :src="item.pic"
                                                class="h-[260px] md:h-[500px] w-full object-center object-cover" />
                                        </div>
                                        <div class="w-full">
                                            <div v-if="item.price || item.time || item.including || item.plus"
                                                class="flex flex-col justify-center items-center gap-[10px] h-[120px] md:h-[200px]">
                                                <div class="font-[500] text-[15px] md:text-[25px] leading-[180%]"
                                                    v-if="item.price">
                                                    {{ item.price }}
                                                </div>
                                                <div class="font-[500] text-[15px] md:text-[25px] leading-[180%]"
                                                    v-if="item.time">
                                                    {{ item.time }}
                                                </div>
                                                <div class="h-[35px] md:h-[60px]" v-if="item.including || item.plus">
                                                    <div class="font-[300] text-[12px] md:text-[22px] leading-[150%] italic text-center"
                                                        v-if="item.including">{{ item.including }}</div>
                                                    <div class="font-[300] text-[12px] md:text-[22px] leading-[150%] italic text-center"
                                                        v-if="item.plus">{{ item.plus }}</div>
                                                </div>
                                            </div>
                                            <div class="h-[120px] md:h-[200px] flex justify-center items-center"
                                                v-if="item.subdes">
                                                <div class="font-[500] text-[15px] md:text-[25px] leading-[180%]">{{
                                                    item.subdes }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template #prev="{ onClick, disabled }">
                                    <UButton id="watch-previous-project"
                                        class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#FFFFFF] hover:bg-white text-[#8D7662] text-2xl p-2 h-[41px] w-[41px] flex items-center justify-center"
                                        color="white" :disabled="disabled" @click="onClick" square>
                                        <UIcon id="watch-previous-project" name="mingcute:arrow-left-fill"
                                            class="size-5" />
                                    </UButton>
                                </template>
                                <template #next="{ onClick, disabled }">
                                    <UButton id="watch-next-project"
                                        class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#8D7662] disabled:text-[#8D7662] hover:bg-[#8D7662] text-[#FFFFFF] p-2 h-[41px] w-[41px] flex items-center justify-center"
                                        color="white" :disabled="disabled" @click="onClick" square>
                                        <UIcon id="watch-next-project" name="mingcute:arrow-right-fill"
                                            class="size-5" />
                                    </UButton>
                                </template>
                            </UCarousel>
                        </div>
                    </div>
                    <div class="md:mt-0 md:pb-0 pb-5 px-3 md:px-0">
                        <div v-if="item.subtitle"
                            class="font-[600] md:mt-10 md:text-[32px] text-[18px] leading-[150%] text-[#8D7662] md:mb-3 mb-2">
                            {{ item.subtitle }}
                        </div>
                        <div v-if="item.content"
                            class="md:text-[25px] text-[14px] leading-[200%] font-[300] flex flex-col"
                            v-html="item.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>
const activeIndex = ref(null)

const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
}

const items = [
    {
        label: 'Interior Rendering Project',
        boxs: [
            {
                title: 'Small Size Interior',
                des: '(Small Bathroom, Powder Room, Pantry)',
                pic: '/pricing/door.jpg',
                price: 'Price: $130 - $150/view | 2-3 days',
                including: 'Including: ($80 - $120)/Area Fee',
                plus: '+ ($40 - $100)/Modeling Furniture Fee'
            },
            {
                title: 'Standard Size Interior',
                des: '(Living Room, Bedroom, Master Bath, Kitchen)',
                pic: '/pricing/pic2.jpg',
                price: 'Price: $150/view | 3-5 days',
                including: 'Including: ($150 - $200)/Area Fee',
                plus: '+ ($50 - $100)/Modeling Furniture Fee'
            }, {
                title: 'Large Size Interior',
                des: '(Living & Dining Room, Open Spaces)',
                pic: '/pricing/pic4.jpg',
                price: 'Price: $180 - $250/view | 5-8 days',
                including: 'Including: ($200 - $300)/Area Fee',
                plus: '+ ($100 - $150)/Modeling Furniture Fee'
            }, {
                title: 'Massive Area',
                des: '(Restaurants, Commercial space)',
                pic: '/pricing/pic3.jpg',
                price: 'Negotiable Price and Time',
                including: '*Send project details to get quote',
                plus: ''
            }
        ],
        subtitle: 'Additional Price',
        content:
            `
                    <div><span class = "font-[500]">Additional View:</span> $30 - $50/view within the same space</div>
                    <div><span class = "font-[500]">Custom Furniture Modeling:</span> $10 - $30/piece for bespoke designs</div>
                    <div><span class = "font-[500]">Video Walk-through</span> = Render Fees + $12 - $20 per second (each revision requires separate negotiation)</div>
                    <div><span class = "font-[500]">Virtual Tour</span> = Render Fees*30% (each revision requires separate negotiation)</div>
                    <div><span class = "font-[500]">Interior Render:</span> $30 - $50 per additional revision per image/photo. (Each image/photo includes 2-3 revisions by default at no additional cost) </div>   
            `
    },
    {
        label: 'Exterior Rendering Project',
        boxs: [
            {
                title: 'Small Size Exterior',
                pic: '/pricing/pic5.jpg',
                price: 'Price: $200 - $300',
                time: 'Time: 2-3 days'
            },
            {
                title: 'Medium Size Exterior',
                pic: '/pricing/pic6.png',
                price: 'Price: $300 - $500',
                time: 'Time: 4-7 days'
            }, {
                title: 'Large Size Exterior',
                pic: '/pricing/pic7.png',
                price: 'Price: $500 - $700',
                time: 'Time: 8-10 days'
            }, {
                title: 'Massive Area',
                pic: '/pricing/pic8.jpg',
                subdes: 'Negotiable Price and Time'
            }
        ],
        subtitle: 'Additional Price',
        content:
            `
                <div><span class = "font-[500]">Video Walk-through</span> = Render Fees + $20 - $40 per second (each revision requires separate negotiation)</div>
                <div><span class = "font-[500]">Exterior Render:</span> $30 - $80 per additional revision per image/photo. (Each image/photo includes 2-3 revisions by default at no additional cost)</div>   
            `
    },
    {
        label: 'Furniture Modeling',
        boxs: [
            {
                title: 'Low Complexity',
                pic: '/pricing/pic9.jpg',
                price: 'Price: $10-$12/hour',
                time: 'Time: 2-4 hours'
            },
            {
                title: 'Medium Complexity',
                pic: '/pricing/pic10.jpg',
                price: 'Price: $10-$12/hour',
                time: 'Time: 5-8 hours'
            }, {
                title: 'High Complexity',
                pic: '/pricing/pic11.jpg',
                price: 'Price: $12-$15/hour',
                time: 'Time: 9-12 hours'
            }, {
                title: 'Very High Complexity',
                pic: '/pricing/pic12.jpg',
                price: 'Price: $12-$15/hour',
                time: 'Time: 12-24 hours'
            }
        ],
        subtitle: 'Additional Price',
        content:
            `
                <div><span class = "font-[500]">Furniture Render:</span> Each revision requires separate negotiation</div>
            `
    },
    {
        label: 'CAD Drawings',
        des: `
            <div>
                Prices range from <span class="font-[500]">$30 - $50 per drawing</span>, depending on complexity
            </div>
        `,
        boxs: [
            {
                pic: '/pricing/pic13.jpg',
            },
            {
                pic: '/pricing/pic14.jpg',
            },
        ]
    },
    {
        label: 'Customized Request',
        content: `
            <div class="italic mb-[15px]">
                We’re here to help bring your vision to life with precision and creativity. 
            </div>
            <div class="italic">
                Contact us for a personalized consultation and a tailored pricing estimate based on your project’s needs.
            </div>
        `,
    }
]

const hasPic = (boxs) => {
    return Array.isArray(boxs) && boxs.some(box => !!box.pic)
}
</script>