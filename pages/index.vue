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

useSeoMeta({
  title: 'Nomo Render Visualization',
  ogTitle: 'Nomo Render Visualization',
  description: 'Nomadic Creativity, Timeless Renders, More than just blueprints, it’s about storytelling',
  ogDescription: 'Nomadic Creativity, Timeless Renders, More than just blueprints, it’s about storytelling',
  ogImage: 'https://www.nomorender.com/inspire/banner.png',
  twitterTitle: 'Nomo Render Visualization',
  twitterCard: 'summary_large_image',
  twitterDescription: "Nomadic Creativity, Timeless Renders, More than just blueprints, it’s about storytelling",
  twitterImage: 'https://www.nomorender.com/inspire/banner.png'
})
</script>