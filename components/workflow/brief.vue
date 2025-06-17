<script setup lang="ts">
const sections = [
    {
        title: "Client’s Quality Expectations",
        items: [
            "What level of detail and realism is required for the final render?",
            "Do you prefer a photo-realistic or stylized look?",
            "Are there any specific textures, lighting conditions, or atmospheres you want us to focus on?",
            "Do you have reference images or previous works that showcase your preferred style?"
        ]
    },
    {
        title: "Deadline",
        items: [
            "What’s expected deadline for the final deliverables?",
            "Do you need progress updates at specific stages (modeling, texturing, lighting, etc.)?",
            "How many review rounds would you like?",
            "Are there any upcoming presentations/marketing deadlines we should be aware of?"
        ]
    },
    {
        title: "Other Technical Requirements",
        items: [
            "Blueprints",
            "Model",
            "Specification Sheet",
            "Furniture List",
            "Landscape Design"
        ]
    }
]
</script>

<template>
    <div class="h-fit bg-[#FAF8F5] px-10">
        <p class="text-[25px] font-[300] leading-[200%] text-justify mb-[30px]">
            Now that we’re connected, it’s time to dive deeper! This step helps us understand your specific needs,
            expectations, and timelines so we can craft the perfect 3D render for you. We work with different types of
            clients, and we know that each has unique priorities. Here’s how we tailor our approach based on your needs:
        </p>

        <div class="flex flex-col gap-[20px]">
            <div v-for="(section, index) in sections" :key="index"
                class="bg-[#D9D9D9] p-[25px] flex flex-col gap-[10px] rounded-[8px]">
                <span class="font-[600] text-[25px] leading-[150%] text-[#980C0C]">
                    {{ section.title }}
                </span>

                <div class="flex flex-col gap-3 items-start justify-start">
                    <UCheckbox v-for="(question, index) in section.items" :key="index" :ui="{
                        wrapper: 'flex items-center w-[595px]',
                        base: 'h-[25px] w-[25px] mr-5',
                        background: 'bg-[#D9D9D9]',
                        border: 'border border-[#000000]',
                        rounded: 'rounded-none'
                    }">
                        <template #label>
                            <span class="text-black font-[300] text-[25px] leading-[200%] text-justify">
                                {{ question }}
                            </span>
                        </template>
                    </UCheckbox>
                </div>
            </div>
        </div>
    </div>
</template>