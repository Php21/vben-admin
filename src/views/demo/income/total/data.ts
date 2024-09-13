import { FormSchema } from '@/components/Form';

export interface GrowCardItem {
  icon: string;
  title: string;
  selfIncome: number;
  total: number;
  totalIncome: number;
  color: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '总业务收入',
    icon: 'visit-count|svg',
    selfIncome: 2000,
    total: 120000,
    color: 'green',
    totalIncome: 374108.82,
  },
  {
    title: '非传统业务收入',
    icon: 'total-sales|svg',
    selfIncome: 20000,
    total: 500000,
    color: 'blue',
    totalIncome: 142608.2,
  },
  {
    title: '新兴业务收入',
    icon: 'download-count|svg',
    selfIncome: 8000,
    total: 120000,
    color: 'orange',
    totalIncome: 109936.46,
  },
  {
    title: '七大重点产品收入',
    icon: 'transtotalIncome|svg',
    selfIncome: 5000,
    total: 50000,
    color: 'purple',
    totalIncome: 266815.74,
  },
];

export const schemas: FormSchema[] = [
  {
    field: 'year',
    component: 'DatePicker',
    label: '年份',
    colProps: {
      span: 8,
    },
  },
  {
    field: 'department',
    component: 'Select',
    label: '部门',
    colProps: {
      span: 8,
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
      span: 8,
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
