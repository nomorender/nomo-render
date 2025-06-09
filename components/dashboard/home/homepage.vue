<template>
    <div class="flex flex-col gap-5">
        <div>
            <div class="w-full h-[200px] border-2 border-dashed flex justify-center items-center hover:cursor-pointer"
                @click="navigateTo('/dashboard/homepage/banner')">
                <div class="">Edit banner</div>
            </div>
        </div>

        <div>
            <div class="w-full h-[150px] border-2 border-dashed flex justify-center items-center hover:cursor-pointer"
                @click="navigateTo('/dashboard/homepage/slogan')">
                <div class="">Edit Slogan</div>
            </div>
        </div>

        <div>
            <div class="w-full h-[150px] border-2 border-dashed flex justify-center items-center hover:cursor-pointer"
                @click="navigateTo('/dashboard/homepage/aboutus')">
                <div class="">Edit About us</div>
            </div>
        </div>

        <div>
            <div class="w-full h-[500px] border-2 border-dashed flex hover:cursor-pointer p-5"
                @click="navigateTo('/dashboard/homepage/project')">
                <div class="w-full h-full border-2 border-dashed">
                </div>
                <div class="w-full h-full mx-5 border-2 border-dashed flex justify-center items-center">
                    Edit Project
                </div>
                <div class="w-full h-full border-2 border-dashed">
                </div>
            </div>
        </div>
    </div>
</template>