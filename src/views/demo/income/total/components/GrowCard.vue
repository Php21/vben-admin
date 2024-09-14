<template>
  <div class="md:flex">
    <template v-for="(item, index) in growCardList" :key="item.title">
      <Card size="small" :loading="loading" class="md:w-1/4 w-full !md:mt-0"
        :class="{ '!md:mr-4': index + 1 < 4, '!mt-4': index > 0 }">
        <template #title>
          <a>全院{{ item.title }}</a>
        </template>
        <template #extra>
          <Tag :color="item.color">
            <CountTo prefix="$" :startVal="1" :endVal="item.totalIncome" class="text-1xl" />
          </Tag>
        </template>

        <div class="py-1 px-4 flex justify-between items-center">
          <div class="flex flex-col">
            <div class="flex justify-between">
              <span class="mr-4">分院{{ item.title }}</span>
              <CountTo prefix="$" :startVal="1" :endVal="item.selfIncome" class="text-1xl" />
            </div>
            <div class="flex justify-between">
              <span>分院下达指标</span>
              <CountTo prefix="$" :startVal="1" :endVal="item.target" class="text-1xl" />
            </div>
          </div>
          <Progress size="small" type="dashboard" :percent="Number((item.selfIncome / item.target * 100).toFixed(2))" />
        </div>
      </Card>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { CountTo } from '@/components/CountTo';
import { Tag, Card, Progress } from 'ant-design-vue';
import { growCardList } from '../data';

defineProps({
  loading: {
    type: Boolean,
  },
});
</script>
