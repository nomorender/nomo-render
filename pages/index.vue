<template>
  <div class="overflow-hidden relative">
    <HomeBanner />
    <HomeSlogan></HomeSlogan>
    <HomeAbout></HomeAbout>
    <HomeProject></HomeProject>
    <HomeServices></HomeServices>
    <HomeTest />
    <HomeFeedBack />
    <HomeContact></HomeContact>
    <HomeFaq />
    <HomeSubcribe />
  </div>

</template>
<script lang="ts" setup>

useHead({
  title: `Nomo Render | 3D visualization
studio`,
  meta: [
    {
      name: "description",
      content: `Nomadic Creativity, Timeless Renders, More than just blueprints, it’s about storytelling`,
    },
    { name: 'robots', content: 'index, follow' }
  ],
});
</script>