<script lang="ts" setup>
const sections = [
    {
        title: "📩 Communication Platform",
        content: `We’re happy to connect in a way that’s most convenient for you! Whether it’s 
      <span class='font-[500] italic'>Email, WhatsApp</span>, or even a 
      <span class='font-[500] italic'>Video meeting</span>, we’ll make sure everything flows smoothly.
      Just let us know your preferred way to stay in touch.`,
        image: "workflow/Communication.svg"
    },
    {
        title: "📝 Idea Form",
        content: `This is where you share your vision! We’ll ask 
      <span class='font-[500] italic'>a few key questions under a quick form about your project</span> - 
      style preferences, key requirements, and any inspiration you have in mind.
      No worries, it’s quick and helps us bring your ideas to life just the way you imagine.`,
        image: "workflow/Idea.svg"
    },
    {
        title: "💰 Budget",
        content: `To tailor the best solution for you, we’d love to know 
      <span class='font-[500] italic'>your budget range</span>. 
      This helps us suggest the most suitable package & ensures there are no surprises down the line.`,
        image: "workflow/Budget.svg"
    }
]
</script>

<template>
    <div class="h-fit bg-[#FAF8F5] px-10">
        <p class="text-[25px] font-[300] leading-[200%] text-justify mb-[30px]">
            Before we dive into creating stunning 3D visuals for your project, let’s make sure we're on the same page.
            This first step is all about setting up clear communication, understanding your ideas, & aligning
            expectations on budget.
        </p>
        <div class="flex flex-col gap-[30px]">
            <div v-for="(section, index) in sections" :key="index" class="flex flex-col gap-[10px]">
                <div class="font-[500] leading-[200%] text-[25px] text-[#980C0C]">
                    {{ section.title }}
                </div>
                <div class="flex gap-10 justify-center items-center">
                    <p class="font-[300] text-[25px] leading-[200%] text-justify" v-html="section.content" />
                    <nuxt-img :src="section.image" class="w-[140px] h-[120px]" />
                </div>
            </div>
        </div>
    </div>
</template>