<script setup lang="ts">
import { useFurnitureStore } from '~/stores/furniture/useFurniture';
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
const store = useFurnitureStore();
const q = ref('')
const LIMIT = 6;
const page = ref(1);
const isOpen = ref<boolean>(false);
const openId = ref<string | null>(null)
const openModal = (id: string) => {
    isOpen.value = true
    openId.value = id
}

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
    return store.res.filter((furniture) =>
        Object.values(furniture).some((val) =>
            String(val).toLowerCase().includes(q.value.toLowerCase())
        )
    );
});
const handleSaved = () => {
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
        <template #src-data="{ row }">
            <NuxtImg format="webp" :src="row.src" alt="Furniture" class="w-20 h-20 object-cover rounded" />
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
        <UPagination v-model="page" size="lg" :max="5" :page-count="LIMIT" :total="store.countTotal" />
    </div>
    <ModalEditFurniture v-model="isOpen" :id="openId" @saved="handleSaved" />
</template>