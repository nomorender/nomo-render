<template>
  <div class="flex justify-center items-center mb-20 mt-10">
    <div>
      <div class="md:columns-3 columns-2 gap-1 space-y-1">
        <div class="relative group md:w-full md:h-[706.98828125px] h-[265px] cursor-pointer" @click="openModal(1)">
          <NuxtImg src="/HAR011.png" class="w-full h-full object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">Elevate NY</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="md:size-5 size-[15px] text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: DEMO Arch</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Project 5 -->
        <div class="relative group md:w-full md:h-[592px] cursor-pointer" @click="openModal(5)">
          <NuxtImg src="/Extorior/4.png" class="md:w-full md:h-[592px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">Brightnest</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: UK</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: Platform 3 Studio</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="relative group md:w-full md:h-[467px] h-[152px] cursor-pointer" @click="openModal(2)">
          <NuxtImg src="/HAR07.png"
            class="md:w-full md:h-[467px] h-[152px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">The Gilded Entrance</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: frenchCALIFORNIA</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="relative group md:w-full md:h-[396px] h-[110px] cursor-pointer" @click="openModal(4)">
          <NuxtImg src="/Extorior/5.png"
            class="md:w-full md:h-[396px] h-[110px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">The Stonehaven</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: Parlato Development Group</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 9 -->
        <div class="relative group md:w-full md:h-[432px] cursor-pointer">
          <NuxtImg src="/Extorior/8.png" class="md:w-full md:h-[432px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">Name</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: Luke</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="relative group md:w-full md:h-[353px] h-[155px] cursor-pointer" @click="openModal(3)">
          <NuxtImg src="/Extorior/6.png"
            class="md:w-full md:h-[353px] h-[155px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]]">Elevate NY</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: DEMO Arch</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 6 -->
        <div class="relative group md:w-full md:h-[588.2685546875px] h-[170px] cursor-pointer" @click="openModal(6)">
          <NuxtImg src="/Extorior/7.png"
            class="md:w-full md:h-[588.2685546875px] h-[170px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">Modern Haven Residences</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: Germany</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: MF</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 7 -->
        <div class="relative group md:w-full md:h-[353.488px] h-[186px] cursor-pointer" @click="openModal(7)">
          <NuxtImg src="/Extorior/3.png" class="md:w-full md:h-[353.488px] h-[186px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">The Manor</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: Jeffrey Bruce Baker</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden block relative group md:w-full md:h-[480px] h-[180px] cursor-pointer">
          <NuxtImg src="/Extorior/9.png"
            class="md:w-full md:h-[480px] h-[180px] break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">Name</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: Luke</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden block relative group md:w-full md:h-[480px] h-[125.5px] cursor-pointer" @click="openModal(8)">
          <NuxtImg src="/Feedback/UserFeedback/15.jpg"
            class="md:w-full md:h-[480px] h-full break-inside-avoid object-cover object-center" />
          <div
            class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
            <div>
              <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                <div class="flex justify-between">
                  <div class="font-[600] md:leading-[200%]">Frame & Ridge</div>
                  <div class="flex justify-center items-center">
                    <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                  </div>
                </div>
                <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                <div class="flex justify-between">
                  <div class="font-[300] leading-[180%]">Client: Elephant Town Studio</div>
                  <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                    2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mt-[1.2px] gap-1">
        <!-- Project 10 -->
        <div class="w-[60%]">
          <div class="hidden md:block relative group md:w-full md:h-[480px] h-[180px] cursor-pointer">
            <NuxtImg src="/Extorior/9.png"
              class="md:w-full md:h-[480px] h-[180px] break-inside-avoid object-cover object-center" />
            <div
              class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
              <div>
                <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                  <div class="flex justify-between">
                    <div class="font-[600] md:leading-[200%]">Name</div>
                    <div class="flex justify-center items-center">
                      <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                    </div>
                  </div>
                  <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                  <div class="flex justify-between">
                    <div class="font-[300] leading-[180%]">Client: Luke</div>
                    <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                      2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[40%]">
          <!-- Project 8 -->
          <div class="hidden md:block relative group md:w-full md:h-[480px] cursor-pointer" @click="openModal(8)">
            <NuxtImg src="/Feedback/UserFeedback/15.jpg"
              class="w-full h-[480px] break-inside-avoid object-cover object-center" />
            <div
              class="md:pt-8 md:px-10 px-[15px] md:pb-5 pt-[9px] pb-[9px] absolute bottom-0 left-0 w-full h-fit bg-black bg-opacity-[50%] opacity-0 group-hover:opacity-100 transition-opacity">
              <div>
                <div class="text-[#FFFFFF] text-justify md:text-[20px] text-[10px]">
                  <div class="flex justify-between">
                    <div class="font-[600] md:leading-[200%]">Frame & Ridge</div>
                    <div class="flex justify-center items-center">
                      <Icon name="heroicons:arrows-pointing-out-16-solid" class="size-5 text-[#F97316]" />
                    </div>
                  </div>
                  <div class="font-[300] leading-[180%] md:leading-[120%]">Location: USA</div>
                  <div class="flex justify-between">
                    <div class="font-[300] leading-[180%]">Client: Elephant Town Studio</div>
                    <div class="flex items-center justify-center font-[300] leading-[180%] text-[#D9D9D9]">
                      2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex w-full justify-center items-center pt-10">
          <UButton color="gray" variant="solid"
            class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
            <div
              class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
              see more our projects
            </div>
          </UButton>
        </div>
      </div>
    </div>


    <!-- MODAL -->
    <UModal v-model="isOpen"
      :ui="{ overlay: { background: 'bg-black/80' }, background: '!shadow-none bg-transparent', container: 'border-none flex items-center justify-center !shadow-none modal-container pb-[120px]', width: '' }">
      <div class="flex md:gap-2.5 mb-8 justify-between">
        <div class="flex items-center justify-center md:gap-12 gap-3">
          <div class="md:p-5 p-2 bg-[#FAF8F5] rounded-full">
            <nuxt-img class="md:size-[81px] size-[33px]" src="/Logo3.svg" alt="Logo" />
          </div>
          <div>
            <p
              class="md:text-[25px] text-[18px] text-[#FAF8F5] md:font-[500] font-[600] md:leading-[200%] leading-[100%]">
              {{ selectedItem?.name }}</p>
            <p class="font-[300] md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] text-[#FAF8F5]">Nomo Render
              -
              3D Visualization Studio</p>
          </div>
        </div>

        <div class="fixed md:translate-x-[64.1rem] md:-translate-y-[-30px] -translate-x-[-19.5rem]">
          <UButton variant="ghost" size="xl" class=" " @click="isOpen = false" :ui="{
            base: 'md:!p-[15px] !p-[6px] !focus:outline-none hover:none border-none md:!bg-[#8D7662] !bg-[#D9D9D9] !rounded-full hover:bg-none !ring-0',
          }">
            <UIcon name="i-heroicons-x-mark-20-solid" class="size-7 md:text-white text-[#1D1B20]" />
          </UButton>
        </div>
      </div>

      <div class="bg-[#FAF8F5] rounded-[8px] md:w-[960px] w-[355px]">
        <div class="md:px-[4rem] px-[35px] md:pt-[55px] pt-[40px] md:pb-5 pb-3">
          <p class="text-[#8D7662] md:text-[32px] text-[16px] font-[600] mb-5 uppercase leading-[150%]">{{
            selectedItem?.name }}</p>
          <div class="md:text-[25px] text-[15px] leading-[200%] font-[300] text-justify"
            v-html="selectedItem?.content1">
          </div>
        </div>
        <div class="bg-[#FAF8F5]">
          <div class="md:w-[960px] h-full w-[355px]">
            <NuxtImg alt="PicHouse" :src="selectedItem?.picDes.pic1" class="w-full h-auto object-cover object-center" />
          </div>
        </div>
        <div class="md:px-[4rem] px-[35px] py-[30px]">
          <div class="md:text-[25px] text-[15px] md:leading-[200%] leading-[180%] font-[300] text-justify"
            v-html="selectedItem?.content2"></div>
        </div>

        <div v-if="Object.keys(selectedItem?.picDes || {}).length === 3" class="flex gap-1">
          <div class="w-[50%]">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
          </div>
          <div class="w-[50%]">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
          </div>
        </div>

        <div v-if="Object.keys(selectedItem?.picDes || {}).length === 4" class="grid grid-cols-2 gap-2">
          <div class="col-span-2">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
          </div>
          <div class="col-span-1">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-auto object-cover" />
          </div>
          <div class="col-span-1">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-auto object-cover" />
          </div>
        </div>

        <div v-if="Object.keys(selectedItem?.picDes || {}).length === 5" class="grid grid-cols-2 gap-2">
          <div class="col-span-2">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic2" class="w-full h-auto object-cover" />
          </div>
          <div class="col-span-1 md:h-[357px] h-[131px]">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic3" class="w-full h-full object-cover" />
          </div>
          <div class="col-span-1 ">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic4" class="w-full h-auto object-cover" />
          </div>
          <div class="col-span-2">
            <NuxtImg alt="picDes" :src="selectedItem?.picDes.pic5" class="w-full h-auto object-cover" />
          </div>
        </div>

        <div class="flex w-full justify-center items-center py-10">
          <UButton color="gray" variant="solid" type="submit" form="contactForm"
            class="bg-gradient-to-r from-[#8D7662] to-[#27211B] lg:px-8 lg:py-5 px-6 py-4 hover:bg-[#90755e] rounded-[8px] md:w-auto">
            <div
              class="w-full flex justify-center items-center uppercase text-[#F5F5F5] leading-[16px] font-[600] md:text-[28px] text-[16px]">
              see more our projects
            </div>
          </UButton>
        </div>

      </div>


      <!-- 2 BUTTON NEXT TO THE MODAL PC -->
      <div class="fixed -translate-x-[-1000px] -translate-y-[-140px] hidden md:flex">
        <!-- TWO BUTTON SOCIAL -->
        <div class="md:flex flex-col gap-7">
          <div class="flex flex-col items-center justify-center">
            <NuxtLink to="https://wa.me/84967563407" target="_blank">
              <UButton
                class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                <UIcon name="material-symbols:mail" class="size-12 text-[#8D7662]" />
              </UButton>
            </NuxtLink>
            <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5]">Message</div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <UButton class="bg-[#FFFFFF] p-[20px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
              <UIcon name="hugeicons:flowchart-02" class="size-12 text-[#8D7662]" />
            </UButton>
            <div class="font-[300] text-[20px] leading-[150%] text-[#FAF8F5] items-center justify-center">Our workflow
            </div>
          </div>
        </div>
      </div>

      <!-- BAR FOR MODAL MOBILE  -->
      <div v-if="isOpen" class="w-full fixed bottom-0 left-0 py-3 md:hidden bg-[#D9D9D9]">
        <!-- TWO BUTTON SOCIAL -->
        <div class="flex w-full justify-center items-center gap-10">
          <div class="flex flex-col items-center justify-center gap-1">
            <UButton class="flex items-center justify-center p-3 bg-white/80 hover:bg-white rounded-full shadow-2xl"
              @click="">
              <div class="text-[#8D7662] flex justify-center">
                <UIcon name="mdi-light:arrow-left" class="size-4" />
              </div>
            </UButton>
            <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Back</div>
          </div>

          <div class="flex flex-col items-center justify-center gap-1">
            <NuxtLink to="https://wa.me/84967563407" target="_blank">
              <UButton
                class="bg-[#FFFFFF] md:p-[20px] p-[10px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
                <UIcon name="material-symbols:mail" class="md:size-12 size-5 text-[#8D7662]" />
              </UButton>
            </NuxtLink>
            <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Message</div>
          </div>
          <div class="flex flex-col items-center justify-center gap-1">
            <UButton
              class="bg-[#FFFFFF] md:p-[20px] p-[10px] rounded-full shadow-lg hover:bg-[#FFFFFF] hover:scale-105 transition">
              <UIcon name="hugeicons:flowchart-02" class="md:size-12 size-5 text-[#8D7662]" />
            </UButton>
            <div class="font-[300] text-[10px] leading-[150%] text-[#000000] items-center justify-center">Our workflow
            </div>
          </div>

          <div class="flex flex-col items-center justify-center gap-1">
            <UButton
              class="flex items-center justify-center p-3 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
              @click="">
              <div class="text-[#FFFFFF] flex justify-center">
                <UIcon name="mdi-light:arrow-right" class="size-4" />
              </div>
            </UButton>
            <div class="font-[300] text-[10px] leading-[150%] text-[#000000]">Next</div>
          </div>
        </div>
      </div>

      <!-- Next Previous -->
      <div class="fixed translate-x-[60.7rem] translate-y-[30rem] hidden md:flex flex-col gap-7">
        <UButton
          class="hidden md:flex items-center justify-center p-2 absolute right-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-[#8D7662] hover:bg-[#8D7662] rounded-full shadow-2xl"
          @click="goToNextItem">
          <div class="text-[#FFFFFF] flex justify-center">
            <UIcon name="mdi-light:arrow-right" class="size-10" />
          </div>
        </UButton>
      </div>
      <div class="fixed translate-x-[-0.7rem] translate-y-[30rem] hidden md:flex flex-col gap-7">
        <UButton
          class="hidden md:flex items-center justify-center p-2 absolute left-[-7rem] top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow-2xl"
          @click="goToPrevItem">
          <div class="text-[#8D7662] flex justify-center">
            <UIcon name="mdi-light:arrow-left" class="size-10" />
          </div>
        </UButton>
      </div>
      <!-- 2 BUTTON NEXT TO THE MODAL MOBILE -->
    </UModal>
  </div>
</template>


<script setup lang="ts">

interface Item {
  id: number
  name: string
  content1: any
  content2: any
  picDes: any
}

const items: Item[] = [
  {
    id: 1,
    name: 'Elevate NY',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">New York, USA</span>
          <br/>Client: <span class = "font-[500]">DEMO Arch</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        This project is an architectural fusion blending historic charm of classic New York City with innovation, to preserve the character of the brick element while introducing a bold, geometric extension.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300]">
          At street level, the restored arches and brickwork honor the fabric of the neighborhood, maintaining a sense of familiarity. Above a sleek geometric addition made by metal, creates a dynamic interplay of light and shadow.
      </div>

      <div class = "font-[300] my-4">
          While working with Demo Arch, we as Nomo Render follow their vision as a signature design on urban visualization, where heritage meets forward-thinking design to redefine contemporary city living.
      </div>
  `,
    picDes: {
      pic1: `/Service1Pic1.png`,
      pic2: `/HAR01.jpg`,
      pic3: '/HAR02.jpg',
    }
  },
  {
    id: 2,
    name: 'The Gilded Entrance',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior & Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">San Francisco, USA</span>
          <br/>Client: <span class = "font-[500]">frenchCALIFORNIA</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Steeped in elegance, this design shows the threshold between the bustling city and a sanctuary of sophistication. Designed to present grandeur and intimacy, the entrance blended Art Deco influences with contemporary refinement.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300]">
        A tribute to luxury and urban living, The Gilded Entrance sets the tone for an experience, capturing the essences of San Francisco's element through the timeless mindset of frenchCALIFORNIA: <span class = "font-[500] italic">The striking black canopy, Geometric lighting, Intricate glass and metal work on the doors</span> 
      </div>
      <div class = "font-[300] mt-4">
        All reflect in the polished surfaces, invite guests into space and have the best experience of history and modernity. 
      </div>
      <div class = "font-[300] mt-4">
        frenchCALIFORNIA also partnered up with us in rendering the interior for this luxury project. Inside, the lobby unfolds as a welcoming space with <span class="font-[500] italic">Plush, Sculptural furnishings, Warm lightings, A palette of rich textures</span>
      </div>
      <div class = "font-[300] mt-4">
        Every detail, from the intricate floor patterns to artworks, offer a colourful yet chic retreat in the heart of the city.
      </div>
  `,
    picDes: {
      pic1: `/HAR07.png`,
      pic2: '/HAR08.jpg',
      pic3: '/HAR9.jpg',
      pic4: '/HAR10.jpg',
      pic5: '/HAR11.jpg',
    }
  },
  {
    id: 3,
    name: 'Terrace Vista',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">California, USA</span>
          <br/>Client: <span class = "font-[500]">Wendi Ellen Sue</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Working with Wendi Ellen Sue Architect on this hillside residence was an opportunity to refine our approach to architectural visualization in a dynamic landscape. Set against the steep, rolling hills of California, we design a structure that harmonizes with its sloped terrain while ensuring structural integrity.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300] my-4">
        The project required a precise balance of excavation and elevation, integrating tiered levels that follow the natural contours of the hillside. A highly detailed visualization that capture: <span class ="font-[500]">The warm of wood, The transparency of the glass, The solidity of the stone foundation </span>
      </div>

      <div class = "font-[300] my-4">
        It required an approach to lighting, reflection and material accuracy to convey the showcase between natural elements and architectural form.
      </div>
  `,
    picDes: {
      pic1: `/Extorior/6.png`,
      pic2: `/Extorior/EX1.png`,
      pic3: '/Extorior/EX2.png',
    }
  },
  {
    id: 4,
    name: 'The Stonehaven',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">New York, USA</span>
          <br/>Client: <span class = "font-[500]">Parlato Development Group</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Standing as a design for luxury living in New York Residence, this design is a perfect mixture of natural stone, rich wood accents and expansive glass elements.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300] my-4">
        The residence features a balanced composition of central entrance and a gravel driveway with structured landscaping. Floor-to-ceiling windows and sliding glass doors, which blur the boundary between interior and exterior to optimize views and daylighting.
      </div>

      <div class = "font-[300] my-4">
        Designed in partnership with Parlato Development Group, this stunning 2-story estate showcases: <span class = "font-[500]">Symmetrical facade with dual chimneys, Gabled rooflines, A spacious outdoor living area with poolside and large windows</span> which connects every detail reflecting its creator and the lifestyle of those who will call it home.
      </div>
  `,
    picDes: {
      pic1: `/Extorior/5.png`,
      pic2: `/Extorior/EX3.jpg`,
      pic3: '/Extorior/EX4.jpg',
    }
  },
  {
    id: 5,
    name: 'Brightnest',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior & Interior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">West Sussex, UK</span>
          <br/>Client: <span class = "font-[500]">Platform 3 Studio</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        What an experience! BrightNest is our design project in collaboration with Platform 3. It is a vibrant and engaging elementary school classroom design, crafted to nurture young minds in a dynamic learning environment.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300] my-4">
        This project is a perfect blend of creativity, functionality and warmth, which we use playful colours, natural light and interactive elements as the foundation. 
      </div>

      <div class = "font-[300] my-4">
        From cozy reading room to lively group activity spaces, each area is carefully curated to support learning experience, with: <span class = "font-[500]">Large south-facing windows, Acoustic panels, The polyurethane flooring.</span> The completed design reflects where design meets function to empower the next generation of learners
      </div>
  `,
    picDes: {
      pic1: `/Extorior/XRL01.png`,
      pic2: `/Extorior/EX5.png`,
      pic3: '/Extorior/EX6.png',
      pic4: '/Extorior/EX7.png',
    }
  },
  {
    id: 6,
    name: 'Modern Haven Residences',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Ulm, Germany</span>
          <br/>Client: <span class = "font-[500]">MF</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        With a commitment to functional elegance and sustainable design, this collaboration of MF with us brings innovative architectural concepts to life.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300] my-4">
        A blend of modern minimalism and aesthetic appeal with practicality, Nomo Render worked closely with MF to bring their architectural vision through landscape <span class = "font-[500]">featuring lush greenery, soft contours creating a welcoming atmosphere</span>
      </div>

      <div class = "font-[300] my-4">
        By understanding their intent and project goals, we crafted every detail, from the strategic lighting to the realistic reflection with <span class = "font-[500]">clean geometric lines, expansive glass windows, and sleek back railings</span>, to emphasize openness and natural light.
      </div>
  `,
    picDes: {
      pic1: `/Extorior/7.png`,
      pic2: `/Extorior/EX8.png`,
      pic3: '/Extorior/EX9.png',
      pic4: '/Extorior/EX10.png',
    }
  },

  {
    id: 7,
    name: 'The Manor',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">Georgia, USA</span>
          <br/>Client: <span class = "font-[500]">Jeffrey Bruce Baker</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        Fusion of European style and Southern charm? Why not? The Manor is a distinguished architectural vision brought to life through our teamwork with Jeffrey Bruce Baker Company. Inspired by the timeless beauty of Old-World estates, this residences shows <span class = "font-[500]">warm brick textures, sculptural rooflines, copper details</span> to create a sense of refined beauty
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300] my-4">
        We focus on capturing the soft, neutral complementary with rich earthy materials through precise visualization. From the curved brick parapet to the turret-style bay window, each detail is crafted to reflect the architectural narrative envisioned by the client.
      </div>
  `,
    picDes: {
      pic1: `/Extorior/3.png`,
      pic2: `/Extorior/EX11.png`,
      pic3: '/Extorior/EX12.png',
      pic4: '/Extorior/EX13.png',
    }
  },

  {
    id: 8,
    name: 'Frame & Ridge',
    content1: `
    <div>
      <div class = "font-[300]">
          Typology: <span class = "font-[500]">Exterior</span>
          <br/>Status: <span class = "font-[500]">Completed</span>
          <br/>Location: <span class = "font-[500]">San Francisco, USA</span>
          <br/>Client: <span class = "font-[500]">Elephant Town Studio</span>
          <br/>Visualization: <span class = "font-[500]">Nomo Render</span>
      </div>

      <div class = "font-[300] my-4">
        This project explores how structural precision and environmental integration create a home that feels both grounded and creative. Elephant Town Studio designed a residence that adapts to nature while standing out, brought to life by Nomo Render’s blend of form and function.
      </div>
    </div>
  `,
    content2: `
      <div class = "font-[300] my-4">
        The steel-framed overhangs are an aesthetic choice for us, which optimize shading angles for seasonal efficiency. Floor-to-ceiling glazing is not only about openness, but also strategically frames the landscape, turning every window into a living portrait of San Francisco’s terrain: <span class = "font-[500]">The material (including raw stone, warm wood and industrial steel), Lighting simulation and texture mapping</span> create a touchable contrast and contribute a dynamic interplay of light and shadow. 
      </div>
  `,
    picDes: {
      pic1: `/Feedback/UserFeedback/15.jpg`,
      pic2: `/Feedback/UserFeedback/16.jpg`,
      pic3: '/Feedback/UserFeedback/17.jpg',
    }
  },
]


const isOpen = ref(false)
const selectedItem = ref<Item | undefined>(undefined)

const selectedIndex = ref<number | null>(null)

const openModal = (id: number): void => {
  const item = items.find(i => i.id === id)
  selectedItem.value = item
  selectedIndex.value = items.findIndex(i => i.id === id)
  isOpen.value = true
}

const goToNextItem = () => {
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value + 1) % items.length
    selectedItem.value = items[selectedIndex.value]
    const modal = document.querySelector('.modal-container')
    if (modal) {
      modal.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

const goToPrevItem = () => {
  if (selectedIndex.value !== null) {
    selectedIndex.value = (selectedIndex.value - 1 + items.length) % items.length
    selectedItem.value = items[selectedIndex.value]

    const modal = document.querySelector('.modal-container')
    if (modal) {
      modal.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>