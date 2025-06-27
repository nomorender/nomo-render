<script lang="ts" setup>
const isScrolled = ref(false);
const isOpen = ref(false);
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
        <UButton id="open-quote-button" v-if="isScrolled" @click="isOpen = true"
            aria-label="Click here to open modal quote"
            class="block fixed md:bottom-10 md:right-10 bottom-6 right-6 bg-[#980C0C] text-[#F5F5F5] md:px-2 md:py-2 rounded-[10px] shadow-lg hover:bg-[#980C0C] transition z-50">
            <div id="open-quote-button"
                class="uppercase text-[#F5F5F5] md:font-[500] font-[400] md:text-[18px] text-[13px] leading-[16px] px-[10px] py-[5px]">
                quote now
            </div>
        </UButton>
        <ModalQuote v-model="isOpen" />
    </div>
</template>