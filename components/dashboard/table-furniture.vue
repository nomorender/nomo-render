<script setup lang="ts">
import type { Project } from '~/types/project/project';

const columns = [
    {
        key: 'stt',
        label: 'stt'
    },
    {
        key: 'src',
        label: 'src'
    }, {
        key: 'alt',
        label: 'alt'
    }, {
        key: 'mode',
        label: 'mode'
    }, {
        key: 'actions'
    }]

const {
    furnitureList,
    fetchFurnitureList,
} = useFurniture()

onMounted(() => {
    fetchFurnitureList()
})

const q = ref('')
const page = ref(1)
const pageCount = 5
const isOpen = ref<boolean>(false);
const openId = ref<string | null>(null)
function openModal(id: string) {
    isOpen.value = true
    openId.value = id
}
function handleSaved() {
    fetchFurnitureList()
    isOpen.value = false
}

const filteredRows = computed(() => {
    if (!q.value) return furnitureList.value || []
    return (furnitureList.value || []).filter(furniture =>
        Object.values(furniture).some(value =>
            String(value).toLowerCase().includes(q.value.toLowerCase())
        )
    )
})
const paginatedRows = computed(() => {
    const start = (page.value - 1) * pageCount
    const end = page.value * pageCount
    return filteredRows.value.slice(start, end)
})

const items = (row: Project) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => openModal(row.id!)
    }]
]
</script>

<template>
    <div class="flex px-3 py-3.5 border-b border-gray-200">
        <UInput padded variant="none" v-model="q" placeholder="Search project..." />
    </div>
    <UTable :rows="paginatedRows" :columns="columns">
        <template #src-data="{ row }">
            <NuxtImg :src="row.src" alt="Furniture" class="w-20 h-20 object-cover rounded" />
        </template>
        <template #alt-data="{ row }">
            <span>{{ row.alt }}</span>
        </template>
        <template #actions-data="{ row }">
            <UDropdown :items="items(row)">
                <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
            </UDropdown>
        </template>
    </UTable>

    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
        <UPagination show-last show-first size="md" :active-button="{ color: 'black' }"
            :inactive-button="{ color: 'gray' }" v-model="page" :page-count="pageCount" :total="filteredRows.length" />
    </div>
    <ModalEditFurniture v-model="isOpen" :id="openId" @saved="handleSaved" />
</template>