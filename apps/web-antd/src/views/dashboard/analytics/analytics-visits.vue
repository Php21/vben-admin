<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import {
  EchartsUI,
  type EchartsUIType,
  useEcharts,
} from '@vben/plugins/echarts';

const chartRef = ref<EchartsUIType>();
const { renderEcharts } = useEcharts(chartRef);

onMounted(() => {
  renderEcharts({
    grid: {
      bottom: 0,
      containLabel: true,
      left: '1%',
      right: '1%',
      top: '2 %',
    },
    series: [
      {
        barMaxWidth: 40,
        // color: '#4f69fd',
        data: [0, 525416.71, 949773.58, 0, 42183.37,  0, 0, 56792.59, 459033.47, 5929436.64, 48340.19, 9059160.28, 0,0,15544879.63,19222511.1,1085763.08,1920424.49,13639973.02,],
        type: 'bar',
      },
    ],
    tooltip: {
      axisPointer: {
        lineStyle: {
          // color: '#4f69fd',
          width: 1,
        },
      },
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ["上海分院","东北大区","中移咨询","北京分院","华东三区","华东二区","华北一区","华南大区","四川分院","山东分院","新疆分院","江苏分院","河南分院","湖北分院","湖南分院","监理公司","西南一区","陕西分院","院本部",],
      //Array.from({ length: 12 }).map((_item, index) => `${index + 1}月`),
    },
    yAxis: {
      max: 20000000 ,
      splitNumber: 4,
      type: 'value',
    },
  });
});
</script>

<template>
  <EchartsUI ref="chartRef" />
</template>
