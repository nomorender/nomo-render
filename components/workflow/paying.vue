<template>
    <div class="h-fit lg:bg-[#FAF8F5] md:bg-[#D9D9D9] bg-[#D9D9D9] lg:px-10 md:px-5 px-5 lg:mt-0 md:mt-5 mt-5">
        <div class="flex flex-col gap-[5px]">
            <p
                class="lg:text-[25px] md:text-[25px] text-[15px] font-[300] leading-[200%] text-justify lg:mb-[30px] mb-[20px]">
                Once you're happy with the final render, it's time to complete the payment so we can deliver the
                high-resolution files.
            </p>
            <div class="flex flex-col gap-[20px]">
                <div class="lg:bg-[#D9D9D9] bg-[#FAF8F5] lg:p-[25px] p-[15px] flex flex-col gap-[10px] rounded-[8px]">
                    <div>
                        <div class="font-[600] lg:text-[25px] md:text-[25px] text-[15px] leading-[150%] text-[#980C0C]">
                            Payment Process
                        </div>
                    </div>
                    <div class="flex flex-col gap-[25px]">
                        <div>
                            <div class="font-[300] leading-[200%] lg:text-[25px] md:text-[25px] text-[15px] mb-[15px]">
                                1. We’ll send you a Payoneer
                                request with
                                the final
                                invoice.</div>
                            <NuxtImg format="webp" src="/workflow/paying.png"
                                class="lg:block md:block hidden w-full h-auto" />
                            <NuxtImg src="workflow/payment_mobile.png"
                                class="lg:hidden block md:hidden w-full h-auto" />
                        </div>

                        <div>
                            <div class="font-[300] leading-[200%] lg:text-[25px] md:text-[25px] text-[15px] mb-[15px]">
                                2. You can complete the
                                transaction easily using your preferred payment method within Payoneer.</div>
                            <div class="flex flex-col items-center justify-center gap-[20px]">
                                <div class="flex lg:gap-[70px]">
                                    <div class="flex flex-col justify-center items-center lg:gap-0 gap-2">
                                        <nuxt-img src="/workflow/card.svg"
                                            class="lg:w-[48px] lg:h-[35px] w-[22px] h-[16px]" />
                                        <span
                                            class="text-[#980C0C] text-center lg:leading-[180%] leading-[150%]  lg:text-[20px] text-[12px]  font-[500]">Credit/Debit
                                            Card</span>
                                    </div>
                                    <div class="flex flex-col justify-center items-center lg:gap-0 gap-2">
                                        <nuxt-img src="/workflow/bank.svg"
                                            class="lg:w-[48px] lg:h-[35px] w-[22px] h-[16px]" />
                                        <span
                                            class="text-[#980C0C] text-center lg:leading-[180%] leading-[150%] lg:text-[20px] text-[12px]  font-[500]">Bank
                                            transfer</span>
                                    </div>
                                    <div class="flex flex-col justify-center items-center lg:gap-0 gap-2">
                                        <nuxt-img src="/workflow/coin.svg"
                                            class="lg:w-[48px] lg:h-[35px] w-[22px] h-[16px]" />
                                        <span
                                            class="text-[#980C0C] text-center lg:leading-[180%] leading-[150%] lg:text-[20px] text-[12px] font-[500]">Payoneer
                                            balance</span>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <NuxtImg format="webp" src="/workflow/visa.png" class="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="font-[300] leading-[200%] lg:text-[25px] md:text-[25px] text-[15px] mb-[15px]">
                                3. Once payment is confirmed,
                                we'll deliver the final file.</div>
                        </div>
                    </div>
                </div>

                <div class="lg:bg-[#D9D9D9] bg-[#FAF8F5] p-[25px] flex flex-col gap-[25px] rounded-[8px]">
                    <div>
                        <div
                            class="font-[600] lg:text-[25px] md:text-[25px] text-[15px] leading-[150%] mb-[20px] text-[#980C0C]">
                            File Delivery
                        </div>
                        <p class="font-[300] lg:text-[25px] md:text-[25px] text-[15px] leading-[200%]">
                            You will receive high-resolution final renders in the agreed format (JPG, PNG, TIFF, or
                            other formats as requested)
                        </p>
                    </div>
                    <div>
                        <div class="font-[300] lg:text-[25px] md:text-[25px] text-[15px] leading-[200%] text-justify">
                            <span class="font-[500]">Payment Terms:</span> A 50% deposit is required to confirm the
                            start
                            of the project.
                            After final
                            adjustments are made and the client approves the result, the remaining balance is due.
                        </div>
                        <p class="lg:text-[13px] text-[12px] font-[300] italic leading-[150%] text-justify mt-[15px]">
                            Revisions After Payment: Any additional changes requested post-delivery may be subject to
                            extra fees.
                            Secure & Global Payments: Payoneer ensures smooth transactions no matter where you are.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>