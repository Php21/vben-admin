<template>
  <div>
    <div class="pt-5 bg-white rounded-lg">
      <BasicForm :labelWidth="80" :actionColOptions="{ span: 4 }" :schemas="schemas" />
    </div>
    <GrowCard :loading="loading" class="enter-y" />
    <SiteAnalysis class="!my-2 enter-y" :loading="loading" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import SiteAnalysis from './components/SiteAnalysis.vue';
  import { BasicForm, FormSchema } from '@/components/Form';

  const loading = ref(true);

  const schemas: FormSchema[] = [
    {
      field: 'year',
      component: 'DatePicker',
      label: '年份',
      colProps: {
        span: 4,
      },
    },
    {
      field: 'department',
      component: 'Select',
      label: '部门',
      colProps: {
        span: 6,
      },
      componentProps: {
        options: [
          {
            label: '湖南分院',
            value: '1',
            key: '1',
          },
          {
            label: '网研中心',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'type',
      component: 'Select',
      label: '业务主类',
      colProps: {
        span: 6,
      },
      componentProps: {
        options: [
          {
            label: '网优',
            value: '1',
            key: '1',
          },
          {
            label: 'DICT',
            value: '2',
            key: '2',
          },
        ],
      },
    },
  ];

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
