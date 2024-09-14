<template>
  <Card :tab-list="tabListTitle" v-bind="$attrs" :active-tab-key="activeKey" @tab-change="onTabChange">
    <Tag class="absolute right-15" :color="'yellow'">
      <span>收入中位数--{{ median.department }} ${{ median.income }}</span>
    </Tag>
    <BasicForm @register="register" @submit="handleChange" />
    <VisitAnalysisBar :departmentList="departmentList" :incomeList="incomeList" />
  </Card>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Card, Tag } from 'ant-design-vue';
import VisitAnalysisBar from './VisitAnalysisBar.vue';
import { BasicForm, useForm } from '@/components/Form';
import { schemas, totalFirst, unTraditionalFirst, newFirst, importantFirst, totalSecond, unTraditionalSecond, newSecond, importantSecond, } from '../data'

const activeKey = ref('total');
const departmentList = ref<Array<string>>([]);
const incomeList = ref<Array<number>>([]);
const departmentType = ref<string>('1')
const median = ref({ department: '', income: 0 })

const tabListTitle = [
  {
    key: 'total',
    tab: '总业务收入',
  },
  {
    key: 'unTraditional',
    tab: '非传统业务收入',
  },
  {
    key: 'new',
    tab: '新兴业务收入',
  },
  {
    key: 'important',
    tab: '七大重点产品收入',
  },
];

const [register] = useForm({
  size: 'small',
  schemas: schemas,
  compact: true,
  actionColOptions: { span: 4 },
  labelWidth: 120,
  showResetButton: false
});

function onTabChange(key) {
  activeKey.value = key;
  switch (activeKey.value) {
    case 'total':
      departmentList.value = (departmentType.value == '1' ? totalFirst : totalSecond).map(item => item.label)
      incomeList.value = (departmentType.value == '1' ? totalFirst : totalSecond).map(item => item.value)
      break
    case 'unTraditional':
      departmentList.value = (departmentType.value == '1' ? unTraditionalFirst : unTraditionalSecond).map(item => item.label)
      incomeList.value = (departmentType.value == '1' ? unTraditionalFirst : unTraditionalSecond).map(item => item.value)
      break
    case 'new':
      departmentList.value = (departmentType.value == '1' ? newFirst : newSecond).map(item => item.label)
      incomeList.value = (departmentType.value == '1' ? newFirst : newSecond).map(item => item.value)
      break
    case 'important':
      departmentList.value = (departmentType.value == '1' ? importantFirst : importantSecond).map(item => item.label)
      incomeList.value = (departmentType.value == '1' ? importantFirst : importantSecond).map(item => item.value)
      break
  }
  const mid = Math.floor(incomeList.value.length / 2)
  median.value = {
    department: departmentList.value[mid],
    income: incomeList.value[mid],
  }
}

function handleChange(search) {
  departmentType.value = search.department
  onTabChange(activeKey.value)
}

onMounted(() => {
  onTabChange(activeKey.value)
})
</script>
