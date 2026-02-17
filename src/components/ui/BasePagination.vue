<template>
  <nav aria-label="Page navigation example" v-if="(totalPages > 1)">
    <ul class="pagination">
      <li class="page-item" @click="backPage"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item" v-for="value in totalPages"><a class="page-link" @click="gotopage(value)">{{ value }}</a>
      </li>
      <!-- <li class="page-item" v-for="value in totalPage"><a class="page-link" href="#">{{ value }}</a></li> -->
      <li class="page-item" @click="nextpage"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>
<script setup>
import { ref, watch } from 'vue';
let emit = defineEmits(['update:page'])
let props = defineProps({
  totalPages: { type: Number, default: 0 },
  current: { type: Number, default: 0 }
})
let currentPage = ref(props.current)

watch(() => props.current, (val) => currentPage.value = val);

const nextpage = () => {
  if (currentPage.value < props.totalPages) {
    let page = currentPage.value + 1;
    emit('update:page', page)
  }
}

const backPage = () => {
  if (currentPage.value > 1) {
    let page = currentPage.value - 1;
    emit('update:page', page)
  }
}
const gotopage = (page) => {
  currentPage.value = page;
  emit('update:page', page);
}




</script>