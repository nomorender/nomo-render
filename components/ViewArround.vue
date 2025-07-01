<!-- components/CloudPanoEmbed.vue -->
<template>
    <div class="cloudpano-wrapper" ref="embedRef" />
</template>

<script setup>
import { onMounted, ref } from 'vue'

const embedRef = ref(null)

onMounted(() => {
    if (process.client) {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.dataset.short = 'J7bEUtbea'
        script.dataset.path = 'tours'
        script.dataset.isSelfHosted = 'false'
        script.src = 'https://app.cloudpano.com/public/shareScript.js'

        embedRef.value.appendChild(script)
    }
})
</script>

<style scoped>
.cloudpano-wrapper {
    width: 1200px;
    max-width: 1200px;
    height: auto;
}

@media (min-width: 768px) and (max-width: 1024px) {
    .cloudpano-wrapper {
        max-width: 700px;
    }
}

@media (max-width: 767px) {
    .cloudpano-wrapper {
        max-width: 640px;
        width: 100%;
    }
}

@media (max-width: 640px) {
    .cloudpano-wrapper {
        max-width: 300px;
    }
}
</style>
