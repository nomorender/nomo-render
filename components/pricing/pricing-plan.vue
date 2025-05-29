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
        inHouse: `Best for <strong>full control and consistency</strong> but costly and less flexible`,
        freelancer: `Best for <strong>budget-conscious</strong> projects, but quality, speed, and availability can be unpredictable`,
        nomoRender: `Best for <strong>scalability, structured workflows, and long-term reliability</strong>`,
    },
};
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <div class="md:w-[1150px]">
            <div class="mt-20 flex flex-col items-center justify-center">
                <div
                    class="w-[306px] text-center text-[30px] font-semibold leading-[130%] text-[#8D7662] md:w-full md:text-[64px] md:leading-[150%]">
                    Pricing Plan
                </div>
            </div>
            <div class="flex justify-center py-[20px] text-center">
                <p
                    class="w-[1192px] text-center text-[18px] font-[300] italic leading-[180%] md:w-full md:text-[32px] md:leading-[150%]">
                    Our pricing is clear, flexible, and built to deliver outstanding value. Whether you need
                    stunning interior renderings, eye-catching exteriors, or detailed furniture models, we
                    offer <span class="font-[600]">scalable solutions</span> tailored to your project's unique
                    needs and complexity.
                </p>
            </div>
        </div>
    </div>
    <section class="mx-auto w-full max-w-[1208px]">
        <div class="relative w-full">
            <div class="relative mb-[45px] flex flex-col items-center justify-center">
                <span
                    class="absolute right-[3.5rem] top-2 text-[15px] font-[500] uppercase leading-[180%] tracking-[7px] text-[#980C0C]">
                    best choice
                </span>
            </div>
            <!-- shadow-[0_4px_12.2px_4px_rgba(0,0,0,0.25)] -->
            <div class="overflow-x-auto">
                <table class="w-full text-center">
                    <thead>
                        <tr>
                            <th
                                class="w-[200px] bg-black px-20 py-5 text-[32px] font-[500] leading-[150%] text-[#faf8f5]">
                                <span>Criteria</span>
                            </th>
                            <th
                                class="w-[250px] bg-black text-center text-[32px] font-[500] leading-[150%] text-[#faf8f5]">
                                <span> In-house 3D Artist</span>
                            </th>
                            <th
                                class="w-[250px] bg-black text-center text-[32px] font-[500] leading-[150%] text-[#faf8f5]">
                                <span>Freelancer</span>
                            </th>
                            <th
                                class="shadow-side-column w-[250px] border-t-[10px] border-[#980C0C] bg-white text-center text-[32px] font-[500] leading-[150%] text-[#8d7662] shadow-side-column">
                                <span>Nomo Render</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(criterion, index) in data.criteria" :key="index" class="border-b text-left">
                            <td class="bg-[#d9d9d9] p-4 font-medium text-[25px] leading-[200%]">{{ criterion }}</td>
                            <td class="bg-[#faf8f6] p-4 text-[25px] leading-[200%] font-light">{{
                                data.comparisonData[index].inHouse }}</td>
                            <td class="bg-[#faf8f6] p-4 text-[25px] leading-[200%] font-light">{{
                                data.comparisonData[index].freelancer }}</td>
                            <td class="bg-white p-4 text-[25px] leading-[200%] font-light shadow-side-column">{{
                                data.comparisonData[index].nomoRender
                            }}</td>
                        </tr>
                        <tr class="text-left">
                            <td class="bg-[#d9d9d9] p-4"></td>
                            <td class="bg-[#faf8f5] p-4 text-[25px] leading-[200%] font-light"
                                v-html="data.summaries.inHouse" />
                            <td class="bg-[#faf8f5] p-4 text-[25px] leading-[200%] font-light"
                                v-html="data.summaries.freelancer" />
                            <td class="bg-white p-4 text-[25px] leading-[200%] font-light shadow-side-column"
                                v-html="data.summaries.nomoRender" />
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
