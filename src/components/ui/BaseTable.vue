<template>
  <!-- {{ rows }} -->
  <table class="table table-bordered table-hover">
    <thead class="table-light">
      <!-- {{ columns }} -->
      <tr>
        <td v-for="col in columns">{{ col.label }}</td>
        <td>Action</td>
      </tr>
    </thead>
     <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="col in columns" :key="col.key">
          <slot :name="`col-${col.key}`" :row="row" :value="row[col.key]">
            {{ row[col.key] }}
          </slot>

        </td>
        <td class="text-center">
            <button class="btn btn-sm btn-outline-secondary me-2" @click="$emit('editArticle', row.id)">Edit</button>
            <button class="btn btn-sm btn-outline-danger" 
            @click="$emit('deleteArticle', row.id)">Delete</button>
        </td>
      </tr>
     
    </tbody>
  </table>
</template>
<script setup>
defineEmits(["deleteArticle", "editArticle"])

defineProps(
  {
    columns: Array,default:[],
    rows: Array,default:[]
  },
)
</script>