<script setup lang="ts">
import type { Project } from '~/types/project/project';

const columns = [
    {
        key: 'title',
        label: 'Title'
    },
    {
        key: 'location',
        label: 'location'
    },
    {
        key: 'client',
        label: 'client'
    }, {
        key: 'founded',
        label: 'founded'
    }, {
        key: 'page',
        label: 'page'
    }, {
        key: 'actions'
    }]

const {
    projectList,
    fetchProjectList,
} = useProject()

onMounted(() => {
    fetchProjectList()
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
    fetchProjectList()
    isOpen.value = false
}

const filteredRows = computed(() => {
    if (!q.value) return projectList.value || []
    return (projectList.value || []).filter(project =>
        Object.values(project).some(value =>
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
        <template #name-data="{ row }">
            <span>{{ row.name }}</span>
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
    <ModalEditProject v-model="isOpen" :id="openId" @saved="handleSaved" />
</template>