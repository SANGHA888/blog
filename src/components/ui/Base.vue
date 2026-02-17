<template>
    {{ current }}
    <nav aria-label="Page navigation example" v-if="totalPages > 1">
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous" @click.prevent="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="page-item" v-for="(page, index) in totalPages" :class="{ active: value === currentPage }"><a class="page-link" href="#">{{ index + 1 }}</a></li>
            <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li> -->
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import { watch , ref} from 'vue';
let prop = defineProps({
    totalPages:{totalPages: Number, default: 1},
    current:{current:Number, default: 1}
});
const emit = defineEmits(["update:page"]);
const currentPage = ref(prop.current);
watch(() => prop.current, (val) => currentPage.value = val);
// console.log(prop.current);
let nextPage = () =>{
    console.log(currentPage.value);
    if(currentPage.value < prop.totalPages){
        let page = currentPage.value + 1;
          emit("update:page", page);
    }
}
let Previous = () =>{
    if(currentPage.value > 1){
        let page = currentPage.value - 1;
          emit("update:page", page);
    }
}
const goToPage = (page) => {
  currentPage.value = page;
  emit("update:page", page);
};
</script>