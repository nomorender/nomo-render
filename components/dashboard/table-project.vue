<script setup lang="ts">
import { useProjectStore } from '~/stores/project/useProject';
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

const store = useProjectStore();
const q = ref('')
const LIMIT = 6;
const page = ref(1);
const isOpen = ref<boolean>(false);
const openId = ref<string | null>(null)
const fetchData = () => {
    store.load({
        page: page.value,
        limit: LIMIT
    });
};

onMounted(() => {
    fetchData()
})

watch(page, () => {
    fetchData();
});

const filteredRows = computed(() => {
    if (!q.value) return store.res;
    return store.res.filter((project) =>
        Object.values(project).some((val) =>
            String(val).toLowerCase().includes(q.value.toLowerCase())
        )
    );
});

function openModal(id: string) {
    isOpen.value = true
    openId.value = id
}
function handleSaved() {
    fetchData()
    isOpen.value = false
}


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

    <UTable :rows="filteredRows" :columns="columns">
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
        <UPagination v-model="page" size="lg" :max="5" :page-count="LIMIT" :total="store.countTotal" />
    </div>

    <ModalEditProject v-model="isOpen" :id="openId" @saved="handleSaved" />
</template>