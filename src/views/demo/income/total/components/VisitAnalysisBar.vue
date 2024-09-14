<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts" setup>
import { ref, Ref, watch } from 'vue';
import { useECharts } from '@/hooks/web/useECharts';
import { basicProps } from './props';

const props = defineProps({
  ...basicProps,
  departmentList: { type: Array<string>, default: [] },
  incomeList: { type: Array<number>, default: [] }
});

const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

watch(
  () => [props.departmentList, props.incomeList],
  () => {
    setOptions({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            width: 1,
            color: '#019680',
          },
        },
      },
      grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
      xAxis: {
        type: 'category',
        data: props.departmentList,
        axisLabel: {
          show: true,
          interval: 0,
          rotate: 45,
          fontSize: 12,
        },
      },
      yAxis: {
        type: 'value',
        // max: 8000,
        // splitNumber: 4,
      },
      series: [
        {
          data: props.incomeList,
          type: 'bar',
          barMaxWidth: 40,
        },
      ],
    });
  },
  { immediate: true },
);
</script>
