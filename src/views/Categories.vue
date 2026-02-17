<template>
    <Navbar></Navbar>
    <div class="d-flex">
        <Sidebar></Sidebar>
        <div class="flex-grow-1 content">
            <h1>Categories</h1>
            <hr>
            <BaseTable :columns="columns" :rows="catogoriesStore.categories" @delete="handleDelete">
                <template #col-name="value">
                    {{ value.row.name }}
                </template>
            </BaseTable>
        </div>
    </div>
    

</template>
<script setup>
    import Navbar from '@/components/layout/Navbar.vue';
    import Sidebar from '@/components/layout/Sidebar.vue';

</script>