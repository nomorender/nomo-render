<template>
  <div class="overflow-hidden">
    <ExteriorHeroExterior></ExteriorHeroExterior>
    <WhatWeDoExterior></WhatWeDoExterior>
    <GaleryExterior></GaleryExterior>
    <ExteriorSlide></ExteriorSlide>
    <ExteriorTimeline></ExteriorTimeline>
    <ExteriorNeedExterior></ExteriorNeedExterior>
    <HomeContact></HomeContact>
    <ExteriorOtherService></ExteriorOtherService>
    <HomeQuoteButton></HomeQuoteButton>
  </div>
</template>

<script lang="ts" setup>
import GaleryExterior from '~/components/Exterior/galeryExterior.vue';
import WhatWeDoExterior from '~/components/Exterior/whatWeDoExterior.vue';

useHead({
  title: `Nomo Render | 3D visualization
studio`,
  meta: [
    {
      name: "description",
      content: `Nomadic Creativity, Timeless Renders, More than just blueprints, it’s about storytelling`,
    },
  ],
});</script>
