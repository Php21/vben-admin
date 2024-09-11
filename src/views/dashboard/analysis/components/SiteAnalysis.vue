<template>
  <Card
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tab-change="onTabChange"
  >
    <p v-if="activeKey === 'tab1'">
      <VisitAnalysis />
    </p>
    <p v-if="activeKey === 'tab2'">
      <VisitAnalysisBar />
    </p>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import VisitAnalysis from './VisitAnalysis.vue';
  import VisitAnalysisBar from './VisitAnalysisBar.vue';

  const activeKey = ref('tab2');//修改此处可以改为柱状图为各个单位对比情况

  const tabListTitle = [
    // {
      // key: 'tab1',
      // tab: '流量趋势',
    // },
    {
      key: 'tab2',
      tab: '各机构外部收入',
    },
  ];

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
