<script setup lang="ts">
const items = [
    {
        label: 'What is 3D Architectural Visualization?',
        content: `
        <div>
            3D Architectural Visualization is a way to bring building designs to life before they’re even built.
        <div/>
        <div class ="flex flex-col pt-4">
            <div>
                1. Using advanced 3D rendering technology, architects and designers turn blueprints into realistic images, animations, or even virtual experiences. 
            </div>
            <div>
                2. This lets clients and stakeholders see and explore a project in detail - checking out materials, lighting, textures, and layouts with incredible clarity. 
            </div>
            <div>
                3. It helps with decision-making, fine-tuning designs, and presenting ideas in an engaging way.
            </div>
        <div class = "pt-4">
            Be it a cozy home, a stylish office, or a large development, 3D visualization makes it easy to turn ideas into something you can truly see and feel before construction begins
        </div>
    `
    },
    {
        label: 'What are the key stages in the 3D rendering workflow?',
        content: `
            <div>
                The 3D rendering workflow typically consists of several key stages, each essential for creating a realistic and visually compelling final image. While the process may vary depending on the type of project, it generally includes the following:
            </div>
            <div class = "flex flex-col pt-4">
                <div><span class="font-[500]">Step 1 - Modeling:</span> Creating the 3D structure of objects, whether it's an interior space, an exterior environment, or individual furniture pieces.</div>
                <div><span class="font-[500]">Step 2 - Scene Setup:</span> Placing elements in the scene, including the environment, background, and additional details to establish composition.</div>
                <div><span class="font-[500]">Step 3 - Lighting:</span> Adjusting light sources to achieve realistic illumination, shadows, and depth.</div>
                <div><span class="font-[500]">Step 4 - Texturing:</span> Applying materials and textures to surfaces to enhance realism and detail.</div>
                <div><span class="font-[500]">Step 5 - Final Refinements:</span> Adding decorative elements, fine-tuning the scene, and ensuring all components align with the desired aesthetic.</div>
                <div><span class="font-[500]">Step 6 - Rendering:</span> Generating the final high-quality image with all applied settings.</div>
                <div><span class="font-[500]">Step 7 - Post-Processing (Optional):</span> Enhancing the final output using tools like Photoshop for additional adjustments, color correction, or effects.</div>
            </div> 
            <div class = "pt-4">
                This structured workflow ensures that the final 3D render is both technically accurate and visually appealing.
            </div>
        `
    },
    {
        label: 'What software and technology do Nomo Render use for execution?',
        content: 'We use a combination of powerful software to create high-quality 3D visuals. For modeling, we work with SketchUp and 3Ds Max, while Corona for 3Ds Max helps us achieve realistic lighting and textures. We also use D5 Render for quick standalone rendering and Chaos Vantage for real-time visualization, either independently or alongside 3Ds Max and SketchUp. For technical drawings, we rely on AutoCAD to ensure precision. This toolkit allows us to bring designs to life with accuracy and stunning detail.'
    },
    {
        label: 'How long does a 3D rendering project usually take?',
        content: 'The timeline for a 3D rendering project depends on the complexity and type of work involved. On average, interior renderings take about 5 - 7 days, while exterior renderings require 7 - 10 days due to the additional detailing of surroundings. Furniture modeling and rendering typically takes 3 - 5 days. These timelines include the entire process, from receiving the brief to final delivery after double-checking and client feedback. More complex projects or multiple revisions may take longer.'
    },
    {
        label: 'What factors influence the pricing of a 3D rendering project?',
        content: `
            <div>At Nomo Render, our pricing depends on several key factors to ensure the best quality for your project. </div>
            <div class ="flex flex-col pt-4">
                <div><span class = "font-[500]">For interiors,</span> we consider the size of the space, the number and complexity of furniture pieces, and the design style. For example, a sleek modern look is usually simpler to render than a highly detailed classic style.</div>
                <div><span class = "font-[500]">For exteriors,</span> pricing is influenced by the scale and complexity of the building and the surrounding environment, including terrain and greenery.</div>
                <div><span class = "font-[500]">For furniture modeling,</span> the biggest factors are the shape complexity and, most importantly, the materials, which play a huge role in achieving a realistic finish.</div>
            </div>
            <div class ="pt-4">
                The more intricate the design, the more time and effort it takes to perfect every detail, which reflects in the pricing. We always aim to provide fair quotes based on your specific needs!
            </div>
        `
    },
    {
        label: 'What is the process for providing feedback to the project?',
        content: `We believe that great results come from smooth collaboration, so we make the feedback process as easy and flexible as possible. For interior and exterior renderings, we typically go through 5 rounds of revisions, with the first 2–3 rounds already included in the quoted price. For furniture modeling, we offer 3 free revision rounds, unless major design or material changes are requested after the initial concept is approved. We always encourage early and detailed feedback to keep the process efficient and ensure the final render matches your vision perfectly.`
    },
]
</script>

<template>
    <di class=" bg-[#FAF8F5] w-full flex items-center justify-center md:my-[5rem] mt-[45px]">
        <div class="px-10 py-[30px] md:py-[40px] lg:grid grid-cols-[auto,1fr] h-fit gap-20 w-[1207px]">
            <div
                class="lg:text-[64px] md:text-[50px] text-[30px] text-[#8D7662] font-[600] leading-[100%] text-center mt-5">
                FAQ</div>
            <div class="space-y-4 lg:mt-0 mt-3">
                <UAccordion :collapsible="false" :items="items">
                    <template #default="{ item, index, open }">
                        <div class="relative">
                            <div class="flex items-center justify-between py-2" id="watch-faq">
                                <div id="watch-faq"
                                    class="hover:cursor-pointer font-[500] md:text-[25px] text-[15px] h-fit md:w-full w-[270px] leading-[200%] whitespace-normal break-words">
                                    {{ item.label }}
                                </div>
                                <UIcon name="iconamoon:arrow-down-2-light" id="watch-faq"
                                    class="hover:cursor-pointer md:w-[48px] md:h-[48px] w-[38px] h-[38px] transform transition-transform duration-200"
                                    :class="{ 'rotate-180': open }" />
                            </div>
                            <span v-if="index !== items.length - 1 && !open"
                                class="lg:hidden block h-[1px] bg-[#8D7662] w-full my-2 transition-all"></span>
                        </div>
                    </template>
                    <template #item="{ item }">
                        <div class="md:text-[25px] text-[15px] font-[300] leading-[200%] text-justify text-[#000000]"
                            v-html="item.content"></div>
                        <span class="lg:hidden block h-[1px] bg-[#8D7662] w-full mt-2 transition-all"></span>
                    </template>
                </UAccordion>
            </div>
        </div>
    </di>
</template>
