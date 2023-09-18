<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue"

import { useCategoryStore } from '@/stores/category'
import { onMounted } from "vue";
// action发送仓库
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 不再复用,:key="$route.fullPath" -->
  <RouterView />
  <LayoutFooter />
</template>