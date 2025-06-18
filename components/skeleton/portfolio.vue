<template>
    <div>
        <div class="lg:max-w-screen-xl md:w-full w-full flex flex-col gap-[25px]">
            <div class="lg:w-[360px] lg:h-[515px] md:w-full md:h-[515px] w-full h-[520px] object-cover object-center">
                <USkeleton class="h-full" />
            </div>
            <div class="flex flex-col items-center">
                <div class="h-6 w-full">
                    <USkeleton class="h-full" />
                </div>
                <div class="h-6 w-full">
                    <USkeleton class="h-full" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
