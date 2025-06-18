<script setup lang="ts">
import { usePortfolio } from '~/stores/portfolio/usePortfolio';
import type { Portfolio } from '~/types/portfolio/portfolio';


const columns = [
    {
        key: 'id',
        label: 'id'
    },
    {
        key: 'title',
        label: 'title'
    },
    {
        key: 'location',
        label: 'location'
    }, {
        key: 'founded',
        label: 'founded'
    }, {
        key: 'category',
        label: 'category'
    }, {
        key: 'actions'
    }]

const store = usePortfolio();
const q = ref('')
const LIMIT = 6;
const page = ref(1);
const isOpen = ref<boolean>(false);
const openId = ref<string | null>(null)
const mode = ref<string>('');
const toast = useToast()
const supabase = useSupabaseClient()
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
    return store.res.filter((item) =>
        Object.values(item).some((val) =>
            String(val).toLowerCase().includes(q.value.toLowerCase())
        )
    );
});

function openModal(id: string) {
    mode.value = 'edit'
    openId.value = id
    isOpen.value = true
}
function handleSaved() {
    fetchData()
    isOpen.value = false
}

const handleDelete = async (id: string) => {
    const confirmDelete = confirm('Are you sure you want to delete this project?');
    if (!confirmDelete) return;
    const { error } = await supabase.from('portfolio').delete().eq('id', id);
    if (!error) {
        toast.add({
            title: 'Deleted successfully!',
            color: 'green',
        });
        fetchData();
    } else {
        toast.add({
            title: 'Delete failed!',
            description: error.message,
            color: 'red',
        });
    }
}

const items = (row: Portfolio) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => openModal(row.id!)
    },
    {
        label: 'Delete',
        icon: 'material-symbols:delete-outline-sharp',
        click: () => handleDelete(row.id!),
        color: 'red',
    }]
]

const handleAddMode = () => {
    mode.value = 'add'
    openId.value = null
    isOpen.value = true
}
</script>

<template>
    <div class="flex px-3 py-3.5 border-b border-gray-200 justify-between">
        <UInput padded variant="none" v-model="q" placeholder="Search project..." />
        <UButton class="bg-black text-white hover:bg-black px-5 py-2" @click="handleAddMode">Add</UButton>
    </div>
    <UTable :rows="filteredRows" :columns="columns">
        <template #name-data="{ row }">
            <span>{{ row.name }}</span>
        </template>
        <template #actions-data="{ row }">
            <UDropdown :items="items(row)">
                <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                <template #item="{ item }">
                    <div class="flex items-center space-x-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                        :class="item.label === 'Delete' ? 'text-red-500 hover:bg-red-50' : ''" @click="item.click">
                        <UIcon :name="item.icon" class="w-4 h-4" />
                        <span>{{ item.label }}</span>
                    </div>
                </template>
            </UDropdown>
        </template>
    </UTable>

    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
        <UPagination v-model="page" size="lg" :max="5" :page-count="LIMIT" :total="store.countTotal" />
    </div>

    <ModalEditPortfolio v-if="isOpen" :mode="mode" v-model="isOpen" :id="openId" @saved="handleSaved" />
</template>