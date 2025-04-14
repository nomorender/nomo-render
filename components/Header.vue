<template>
  <div class="fixed inset-x-0 top-0 z-50 duration-200 group -translate-y-0" :class="{ 'bg-white': isScrolled }">
    <div class="mx-auto w-full xl:max-w-7xl relative">
      <nav class="flex items-center justify-between gap-4 duration-200 p-4 w-full">
        <div class="flex gap-4 items-center">
          <NuxtLink to="/">
            <NuxtImg alt="Logo" preload class="w-10 lg:hidden" src="/logo.png" />
          </NuxtLink>
        </div>

        <div class="hidden gap-[100px] justify-center lg:flex">
          <div v-for="item in navList" :key="item.path">
            <p v-if="!item.childen" @click="$router.push(item.path)"
              class=" md:text-[20px] cursor-pointer hover:underline font-semibold"
              :class="isScrolled ? 'text-[#8D7662]' : 'text-white'">
              {{ item.name }}
            </p>
            <UDropdown :ui="{ width : 'w-fit', item: { padding: 'py-4 px-4', label : 'text-[#000000] text-[18px]' } }" v-else :items="item.childen"
              :popper="{ placement: 'bottom-start' }">
              <div class="flex items-center gap-2">
                <p class=" text-xl  hover:underline font-semibold"
                  :class="isScrolled ? 'text-[#8D7662]' : 'text-white'">
                  {{ item.name }}
                </p>
                <UIcon name="i-heroicons-chevron-down" class="w-5 h-5"
                  :class="isScrolled ? 'text-[#8D7662]' : 'text-white'" />
              </div>
            </UDropdown>
          </div>
        </div>

        <div class="h-fit">
          <UButton variant="ghost" color="gray" size="xl" icon="i-heroicons-bars-3-solid" class="lg:hidden text-white"
            :class="{ 'text-[#8D7662]': isScrolled }" square padded @click="isOpenMenu = true" />
          <USlideover v-model="isOpenMenu" :ui="{ wrapper: 'w-[300px] fixed right-0 left-auto' }" side="right">
            <div class="p-8 mb-">
              <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
                class="flex absolute end-5 top-5 z-10" square padded @click="isOpenMenu = false" />
              <div class="flex flex-1 flex-col gap-10 mt-10">
                <div v-for="item in navList" :key="item.path" class="relative flex flex-col items-end">
                  <p v-if="!item.childen" @click="$router.push(item.path)"
                    class="text-xl cursor-pointer font-semibold text-[#8D7662]">
                    {{ item.name }}
                  </p>
                  <div v-else class="flex flex-col items-end gap-3">
                    <div @click="open = item.name === open ? null : item.name"
                      class="flex items-center justify-end gap-4 cursor-pointer">
                      <div class="text-[20px] font-semibold text-[#8D7662]">
                        {{ item.name }}
                      </div>
                      <UIcon name="gridicons:dropdown" class="transition-transform duration-200 size-10 text-[#8D7662]"
                        :class="{ 'transform rotate-180': open === item.name }" />
                    </div>
                    <!-- Mobile -->
                    <div v-show="open === item.name" class="mt-2 pl-4 space-y-3 flex flex-col items-end">
                      <div v-for="child in item.childen[0]" :key="child.label"
                        class="text-[18px] text-[#8D7662] cursor-pointer font-[400] leading-[180%]">
                        {{ child.label }}
                      </div>
                    </div>
                  </div>
                  <span v-if="item !== navList[navList.length - 1]"
                    class="absolute left-0 bottom-[-10px] h-[1px] bg-[#8D7662] w-full"></span>
                </div>
              </div>
            </div>
          </USlideover>
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const open = ref<string | null>(null);
const navList = [
  {
    path: "/",
    name: "HOME",
  },
  {
    name: "SERVICES",
    childen: [
      [
        {
          label: "3D Exterior Rendering",
          click: () => {
            router.push({ path: "/exterior" });
          },
        },
        {
          label: "3D Interior Rendering",
          click: () => {
            router.push({ path: "/interior" });
          },
        },
        {
          label: "3D Furniture Modeling",
          click: () => {
            router.push({ path: "/furniture" });
          },
        },
        {
          label: "Pricing Plan",
          click: () => {
            router.push({ path: "/Pricing-plan" });
          },
        },
      ],
    ],
  },
  {
    name: "OUR WORK",
    childen: [
      [
        {
          label: "Portfolio",
          click: () => {
            router.push({ path: "/portfolio" });
          },
        },
        {
          label: "Workflow",
          click: () => {
            router.push({ path: "/workflow" });
          },
        },
      ],
    ],
  },
  {
    name: "EXPLORE",
    childen: [
      [
        {
          label: "Inspire Space",
          click: () => {
            router.push({ path: "/inspire" });
          },
        },
        {
          label: "Library",
          click: () => {
            router.push({ path: "/library" });
          },
        },
      ],
    ],
  },
  {
    path: "/about",
    name: "ABOUT US",
  },
  {
    path: "/contact",
    name: "CONTACT",
  },
];

const isOpenMenu = ref(false);


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
