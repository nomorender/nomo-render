<template>
    <div class="h-screen overflow-hidden flex bg-[#edf1f5]">
        <DashboardSidebar class="" />
        <div class="flex flex-col w-full h-full">
            <div class="flex-1 overflow-auto p-4">
                <slot />
            </div>
        </div>
    </div>
    <UNotifications />
</template>
