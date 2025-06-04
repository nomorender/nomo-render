<script setup lang="ts">
const data = {
    criteria: [
        "Quality Control",
        "Cost Efficiency",
        "Approx. Time to Finish",
        "Flexibility",
        "Project Commitment",
        "Transparency",
        "Turnover Rate",
    ],
    comparisonData: [
        {
            inHouse: "High, but limited to the artist's skillset",
            freelancer: "Varies greatly, may require close revisions",
            nomoRender: "High, with a structured quality check process",
        },
        {
            inHouse: "High due to salaries, software, and overhead",
            freelancer: "Lower, but inconsistent pricing",
            nomoRender: "Competitive, scalable pricing",
        },
        {
            inHouse: "Moderate, depends on workload",
            freelancer: "Varies, fast or slow based on availability",
            nomoRender: "Faster due to team & optimized workflow",
        },
        {
            inHouse: "Limited by work hours & project backlog",
            freelancer: "High, adaptable to urgent needs",
            nomoRender: "Scalable team ensures flexibility",
        },
        {
            inHouse: "Strong, fully dedicated",
            freelancer: "Varies, may prioritize other clients",
            nomoRender: "High, as part of the service model",
        },
        {
            inHouse: "Full control and oversight",
            freelancer: "Varies, some may lack structured updates",
            nomoRender: "Clear workflow, updates & progress tracking",
        },
        {
            inHouse: "High, hiring takes time if the artist leaves",
            freelancer: "High, freelancers may not be available later",
            nomoRender: "Low, stable team ensures continuity",
        },
    ],
    summaries: {
        inHouse: `Best for <span class="font-[500]">full control and consistency</span> but costly and less flexible`,
        freelancer: `Best for <span class="font-[500]">budget-conscious</span> projects, but quality, speed, and availability can be unpredictable`,
        nomoRender: `Best for <span class="font-[500]">scalability, structured workflows, and long-term reliability</span>`,
    },
};
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="md:w-[1150px] mt-5 md:mt-0">
            <div class="mt-20 flex flex-col items-center justify-center">
                <div
                    class="uppercase w-[306px] text-center text-[34px] font-semibold leading-[100%] text-[#8D7662] md:w-full md:text-[64px] md:leading-[150%]">
                    Pricing Plan
                </div>
            </div>
            <div class="flex justify-center py-[20px] text-center">
                <p
                    class="hidden md:block w-[300px] text-center text-[18px] font-[300] italic leading-[180%] md:w-full md:text-[32px] md:leading-[150%]">
                    Our pricing is clear, flexible, and built to deliver outstanding value. Whether you need
                    stunning interior renderings, eye-catching exteriors, or detailed furniture models, we
                    offer <span class="font-[600]">scalable solutions</span> tailored to your project's unique
                    needs and complexity.
                </p>

                <p class="md:hidden block w-[303px] text-center text-[15px] font-[300] italic leading-[150%]">
                    Whether you need stunning interior renderings, eye-catching exteriors, or detailed furniture models,
                    we offer <span class="font-[500]">scalable solutions</span> tailored to your project's unique needs
                    and complexity.
                </p>
            </div>
        </div>
    </div>

    <!-- PC -->
    <section class="md:block hidden mx-auto max-w-[1208px] mt-10 mb-20">
        <div class="w-full">
            <div class="relative shadow-[6px_0_8px_-4px_rgba(0,0,0,0.1)]">
                <div class="absolute top-[-40px] left-[75%] w-[25%] flex flex-col items-center z-10">
                    <span class="text-[15px] font-[500] uppercase leading-[180%] tracking-[7px] text-[#980C0C] mt-1">
                        best choice
                    </span>
                    <div class="h-[10px] w-full bg-[#980C0C]"></div>
                </div>
                <div class="min-h-screen">
                    <div class="flex sticky top-2 z-20 bg-black">
                        <div
                            class="w-[25%] bg-black md:px-20 md:py-5 text-[15px] md:text-[32px] font-[500] leading-[150%] text-[#faf8f5] flex items-center justify-center">
                            Criteria
                        </div>
                        <div
                            class="w-[25%] border-l border-white bg-black text-[15px] md:text-[32px] font-[500] leading-[150%] text-[#faf8f5] flex items-center justify-center">
                            In-house 3D Artist
                        </div>
                        <div
                            class="w-[25%] border-l border-white bg-black text-[15px] md:text-[32px] font-[500] leading-[150%] text-[#faf8f5] flex items-center justify-center">
                            Freelancer
                        </div>
                        <div
                            class="w-[25%] border-l border-white bg-white text-[15px] md:text-[32px] font-[500] leading-[150%] text-[#8d7662] flex items-center justify-center">
                            Nomo Render
                        </div>
                    </div>
                    <div>
                        <div v-for="(criterion, index) in data.criteria" :key="index" class="flex border-b text-left">
                            <div class="w-[25%] bg-[#d9d9d9] p-4 font-medium text-[14px] md:text-[25px] leading-[200%]">
                                {{ criterion }}
                            </div>
                            <div
                                class="w-[25%] bg-[#faf8f6] border-l border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light">
                                {{ data.comparisonData[index].inHouse }}
                            </div>
                            <div
                                class="w-[25%] bg-[#faf8f6] border-l border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light">
                                {{ data.comparisonData[index].freelancer }}
                            </div>
                            <div
                                class="w-[25%] bg-white border-l border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light shadow-side-column">
                                {{ data.comparisonData[index].nomoRender }}
                            </div>
                        </div>
                        <div class="flex text-left">
                            <div class="w-[25%] bg-[#d9d9d9] p-4 align-top"></div>
                            <div class="w-[25%] bg-[#faf8f5] border-l border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light align-top"
                                v-html="data.summaries.inHouse">
                            </div>
                            <div class="w-[25%] bg-[#faf8f5] border-l border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light align-top"
                                v-html="data.summaries.freelancer">
                            </div>
                            <div class="w-[25%] bg-white border-l border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light align-top shadow-side-column"
                                v-html="data.summaries.nomoRender">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- MOBILE -->
    <section class="md:hidden block mt-5 overflow-x-auto overflow-y-visible no-scrollbar">
        <div class="w-fit">
            <div class="inline-block w-fit relative">
                <div class="flex sticky top-3 z-30 bg-black">
                    <div
                        class="min-w-[130px] bg-black text-[15px] md:text-[32px] font-[500] text-[#faf8f5] flex items-center justify-center px-4 py-4 sticky left-0 z-30">
                        Criteria
                    </div>
                    <div
                        class="min-w-[130px] border-l border-white bg-black text-[15px] md:text-[32px] font-[500] text-[#faf8f5] flex items-center justify-center px-4">
                        In-house
                    </div>
                    <div
                        class="relative min-w-[130px] border-l border-white bg-white text-[15px] md:text-[32px] font-[500] text-[#8d7662] flex items-center justify-center px-4 z-10 shadow-[...]">
                        <div
                            class="absolute top-[-20px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-40">
                            <span
                                class="text-[9px] font-[500] uppercase leading-[180%] tracking-[3px] text-[#980C0C] mt-1">
                                best choice
                            </span>
                            <div class="h-[5px] w-full bg-[#980C0C]"></div>
                        </div>
                        Nomo Render
                    </div>
                    <div
                        class="min-w-[130px] overflow-visible border-l border-white bg-black text-[15px] md:text-[32px] font-[500] text-[#faf8f5] flex items-center justify-center px-4">
                        Freelancer
                    </div>
                </div>

                <div v-for="(criterion, index) in data.criteria" :key="index" class="flex border-b text-left">
                    <div
                        class="min-w-[130px] bg-[#d9d9d9] p-4 pt-6 font-medium text-[14px] md:text-[25px] leading-[200%] sticky left-0 z-20">
                        {{ criterion }}
                    </div>
                    <div
                        class="min-w-[130px] bg-[#faf8f6] border-l pt-6 border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light">
                        {{ data.comparisonData[index].inHouse }}
                    </div>
                    <div
                        class="min-w-[130px] bg-white border-l pt-6 border-white p-4 text-[14px] md:text-[25px] leading-[200%] z-10 font-light shadow-[4px_0_6px_-2px_rgba(0,0,0,0.06),_-4px_0_6px_-2px_rgba(0,0,0,0.06)]">
                        {{ data.comparisonData[index].nomoRender }}
                    </div>
                    <div
                        class="min-w-[130px] bg-[#faf8f6] border-l pt-6 border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light">
                        {{ data.comparisonData[index].freelancer }}
                    </div>
                </div>

                <div class="flex text-left">
                    <div class="min-w-[130px] bg-[#d9d9d9] p-4 sticky left-0 z-20">
                    </div>
                    <div class="min-w-[130px] bg-[#faf8f5] border-l pt-6 border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light"
                        v-html="data.summaries.inHouse">
                    </div>
                    <div class="min-w-[130px] bg-white border-l pt-6 border-white p-4 text-[14px] md:text-[25px] z-10 leading-[200%] font-light shadow-[4px_0_6px_-2px_rgba(0,0,0,0.06),_-4px_0_6px_-2px_rgba(0,0,0,0.06)]"
                        v-html="data.summaries.nomoRender">
                    </div>
                    <div class="min-w-[130px] bg-[#faf8f5] border-l border-white p-4 text-[14px] md:text-[25px] leading-[200%] font-light"
                        v-html="data.summaries.freelancer">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>