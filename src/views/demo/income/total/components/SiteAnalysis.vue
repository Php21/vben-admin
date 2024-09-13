<template>
  <Card
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tab-change="onTabChange"
  >
    <VisitAnalysisBar />
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import VisitAnalysisBar from './VisitAnalysisBar.vue';

  const activeKey = ref('total');

  const tabListTitle = [
    {
      key: 'total',
      tab: '总业务收入',
    },
    {
      key: 'tab2',
      tab: '非传统业务收入',
    },
    {
      key: 'tab3',
      tab: '新兴业务收入',
    },
    {
      key: 'tab4',
      tab: '七大重点产品收入',
    },
  ];

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
