<script lang="ts" setup>
const isScrolled = ref(false);
const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};
onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div>
        <UButton v-if="isScrolled"
            class="block fixed md:bottom-10 md:right-10 bottom-6 right-6 bg-[#980C0C] text-[#F5F5F5] md:px-4 md:py-3 rounded-[10px] shadow-lg hover:bg-[#980C0C] transition z-50">
            <div class="uppercase text-[#F5F5F5] md:font-[500] font-[400]  md:text-[18px] text-[13px] leading-[16px] px-[10px] py-[5px]">quote now
            </div>
        </UButton>
    </div>
</template>