<script setup lang="ts">
const columns = [{
    key: 'name',
    label: 'Name'
}, {
    key: 'title',
    label: 'Title'
}, {
    key: 'email',
    label: 'Email'
}, {
    key: 'role',
    label: 'Role'
}, {
    key: 'actions'
}]

const people = [
    { id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { id: 2, name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    { id: 3, name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
    { id: 4, name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
    { id: 5, name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
    { id: 6, name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' }
]

const q = ref('')
const page = ref(1)
const pageCount = 5

// Lọc theo từ khóa
const filteredRows = computed(() => {
    if (!q.value) return people
    return people.filter(person =>
        Object.values(person).some(value =>
            String(value).toLowerCase().includes(q.value.toLowerCase())
        )
    )
})

// Phân trang sau khi đã lọc
const paginatedRows = computed(() => {
    const start = (page.value - 1) * pageCount
    const end = page.value * pageCount
    return filteredRows.value.slice(start, end)
})

// Dropdown items
const items = (row: typeof people[number]) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => alert(`Edit ID: ${row.id}`)
    }, {
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        click: () => alert(`Delete ID: ${row.id}`)
    }]
]
</script>


<template>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
        <UInput v-model="q" placeholder="Filter people..." />
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
        <UPagination v-model="page" :page-count="pageCount" :total="filteredRows.length" />
    </div>
</template>