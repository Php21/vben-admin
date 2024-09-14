<template >
  <div class="select">
    <div class="pt-5 bg-white rounded-lg">
      <BasicForm :labelWidth="80" :actionColOptions="{ span: 4 }" :schemas="schemas" />
    </div>
  </div>
  <div class="ant-progress-outer">
    <div><h1>分院收入完成进度</h1></div>
    <div class="div1">市场口径总收入   下达指标 345678
      <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
        <div class="ant-progress-bg" />
      </div>
    </div>
    <span>市场口径总收入    下达指标 345678</span>
    <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
      <div class="ant-progress-bg" />
    </div>
    <span>市场口径总收入    下达指标 345678</span>
    <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
      <div class="ant-progress-bg" />
    </div>
  </div>
  <div class="ant-progress-outer">
    <div><h1>分院收入完成进度</h1></div>
    <div class="div1">市场口径总收入    下达指标 345678
      <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
        <div class="ant-progress-bg" />
      </div>
    </div>
    <span>市场口径总收入    下达指标 345678</span>
    <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
      <div class="ant-progress-bg" />
    </div>
    <span>市场口径总收入    下达指标 345678</span>
    <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
      <div class="ant-progress-bg" />
    </div>
    <span>市场口径总收入    下达指标 345678</span>
    <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
      <div class="ant-progress-bg" />
    </div>
    <span>市场口径总收入    下达指标 345678</span>
    <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
      <div class="ant-progress-bg" />
    </div>
    <span>市场口径总收入    下达指标 345678</span>
    <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
      <div class="ant-progress-bg" />
    </div>
    <span>市场口径总收入    下达指标 345678 </span>
    <div class="ant-progress-inner" :style="{ width: `${percentage}%` }"> 
      <div class="ant-progress-bg" />
    </div>
  </div>
  <div class="zhe">
    <h1>收入趋势</h1>
    <div ref="chartRef" style=" height:300px; width:300px "></div>
  </div>
  <div class="echartstree">
    <div ref="echartsTree" ></div>
  </div>
</template>


<script lang="ts" setup>
import { BasicForm, FormSchema } from '@/components/Form';
const percentage = ref(0);


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



const updateProgress = async () => {
  for (let i = 0; i <= 100; i++) {
    percentage.value = 50;
    // 模拟进度更新的延迟
    await new Promise(resolve => setTimeout(resolve, 100));
  }
};
 
// 调用异步操作来更新进度条
updateProgress();

import {  ref, Ref, onMounted } from 'vue';
import { useECharts } from '@/hooks/web/useECharts';
import { getLineData } from "../finshdown/data";

// defineProps({
  // width: {
    // type: String as PropType<string>,
    // default: '100%',
  // },
  // height: {
    // type: String as PropType<string>,
    // default: 'calc(100vh - 78px)',
  // },
// });
const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>);
const {  lineData, category } = getLineData;
onMounted(() => {
  //  const myChart = echarts.init(chartRef.value);
  setOptions({
    backgroundColor: '#0f375f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true,
          backgroundColor: '#333',
        },
      },
    },
    legend: {
      data: ['line', 'bar'],
      textStyle: {
        color: '#ccc',
      },
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
    },
    series: [
      {
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: 'auto',
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData,
      },
      {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(20,200,212,0.5)' },
            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
            { offset: 1, color: 'rgba(20,200,212,0)' },
          ]),
        },
        z: -12,
        data: lineData,
      },
      {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          color: '#0f375f',
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData,
      },
    ],
  });
});




const echartsTree = ref(null);
onMounted(() => {
  const initTreeChart = () => {
    const myChart = echarts.init(echartsTree.value);
    //初始赋值，或者是在json文件中给值
    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [
            {
              name: 'root',
              children: [
                { name: 'child1', value: 10 }, // 假设这里是一个数值
                { name: 'child2', value: 20 } // 同样假设这里是一个数值
              ]
            }
          ],
          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '60%',
          symbolSize: 7,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750 // 假设动画更新时的持续时间是750毫秒
        }
      ]
    };

    myChart.setOption(option);

    // 等待图表初始化后再启动动画
    setTimeout(() => {
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: 0,
        endValue: 1
      });
    }, 500); // 500毫秒后启动动画
  };

  initTreeChart();
});



</script>

<style scoped>
.echartstree{
  width: 980px;
  height: 600px;
  margin-top: -600px;
  margin-left: 325px;
}

.zhe{
  margin-top: 135px;
  height: 300px;
  width: 300px;
}
.select{
  width: 100%;
  height: 20px;
}
span{
  margin-top: 15px;
  line-height: 1.5;
}
/* 这里可以添加Vben Admin的样式或者自定义样式 */
.ant-progress-outer {
  width: 300px;
  height: 100px;
  margin-top: 8px;
}
.ant-progress-inner {
  height: 8px;
  background-color: #1890ff;
  border-radius: 4px;
}
.ant-progress-bg {
  height: 8px;
  width: 100%;
  background-color: #e5e5e5;
  border-radius: 4px;
}
</style>
