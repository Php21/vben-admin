<template>
  <div>
    <GrowCard :loading="loading" class="mt-4" />
    <SiteAnalysis class="!my-4" :loading="loading" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import GrowCard from './components/GrowCard.vue';
import SiteAnalysis from './components/SiteAnalysis.vue';

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1500);
</script>
