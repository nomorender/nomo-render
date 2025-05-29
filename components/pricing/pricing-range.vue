<template>
    <div class="w-full flex flex-col items-center justify-center md:my-[5rem] mt-[45px] px-4">
        <div class="font-[600] text-[40px] leading-[100%] text-[#8D7662] mb-10 uppercase">
            price range for each category
        </div>
        <div class="max-w-[1280px] w-full mx-auto space-y-5">
            <div v-for="(item, index) in items" :key="index"
                class="accordion-item bg-[#D9D9D9] rounded-[20px] py-[20px] px-[30px]">
                <div class="flex items-center gap-[35px] py-2 cursor-pointer" @click="toggle(index)">
                    <UIcon :name="activeIndex === index ? 'iconoir:minus-circle-solid' : 'iconoir:plus-circle-solid'"
                        class="md:w-[35px] md:h-[35px] transform transition-transform duration-200" />
                    <div class="text-[32px] leading-[150%] font-[500]">
                        {{ item.label }}
                    </div>
                </div>
                <div class="accordion-content md:text-[25px] text-[15px] font-light leading-[200%] text-justify text-[#000000]"
                    v-show="activeIndex === index">
                    <div v-html="item.des" v-if="item.des"></div>
                    <div class="grid grid-cols-2 gap-[25px] mt-[20px]">
                        <div v-for="(box) in item.boxs" v-if="item.boxs">
                            <div class="bg-[#FFFFFF] col-span-1 rounded-[16px]">
                                <div v-if="box.title"
                                    class="w-full flex item-center justify-center text-[32px] font-[600] leading-[150%] py-10">
                                    {{ box.title }}
                                </div>
                                <div v-if="box.pic">
                                    <NuxtImg :src="box.pic" class="h-[550px] w-full object-center object-cover" />
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
                    <div v-if="item.subtitle"
                        class="font-[600] text-[32px] leading-[150%] text-[#8D7662] mt-[70px] mb-3">
                        {{ item.subtitle }}
                    </div>
                    <div v-if="item.content" class="text-[25px] leading-[200%] font-[300] flex flex-col"
                        v-html="item.content"></div>
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
                price: 'Price: $120 - $220 | 2-3 days',
                including: 'Including: ($80 - $120)/Area Fee',
                plus: '+ ($40 - $100) / Modeling Furniture Fee'
            },
            {
                title: 'Medium Size Interior',
                des: '(Living Room, Bedroom, Master Bath, Kitchen)',
                pic: '/pricing/pic2.jpg',
                price: 'Price: $200 - $300 | 3-5 days',
                including: 'Including: ($150 - $200)/Area Fee',
                plus: '+ ($50 - $100) / Modeling Furniture Fee'
            }, {
                title: 'Large Size Interior',
                des: '(Living & Dining Room, Open Spaces)',
                pic: '/pricing/pic4.jpg',
                price: 'Price: $300 - $450 | 5-8 days',
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
                price: 'Price: $300 - $600',
                time: 'Time: 4-7 days'
            }, {
                title: 'Large Size Exterior',
                pic: '/pricing/pic7.png',
                price: 'Price: $600 - $1000',
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
                <div><span class = "font-[500]">Extorior Render:</span> $30 - $80 per additional revision per image/photo. (Each image/photo includes 2-3 revisions by default at no additional cost) </div>   
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
            <div class="italic">
                We’re here to help bring your vision to life with precision and creativity. 
            </div>
            <div class="italic">
                Contact us for a personalized consultation and a tailored pricing estimate based on your project’s needs.
            </div>
        `,
    }
]
</script>