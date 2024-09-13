import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const income: AppRouteModule = {
  path: '/income',
  name: 'income',
  component: LAYOUT,
  redirect: '/income/total',
  meta: {
    orderNo: 5,
    icon: 'ion:tv-outline',
    title: t('routes.demo.income.income'),
  },
  children: [
    {
      path: 'import',
      name: 'Import',
      meta: {
        title: t('routes.demo.income.import'),
      },
      component: () => import('@/views/demo/income/import/index.vue'),
    },
    {
      path: 'total',
      name: 'Total',
      meta: {
        title: t('routes.demo.income.total'),
      },
      component: () => import('@/views/demo/income/total/index.vue'),
    },
  ],
};

export default income;
