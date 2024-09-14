<template>
  <div class="select">
    <span class="p">年份
    <select placeholder="选择年份" class="choice">
      <option>2023年</option>
      <option>2024年</option>
    </select></span>
    <span class="p">对标单位
      <select placeholder="选择单位" class="choice">
        <option>一级单位</option>
        <option>二级单位</option>
      </select></span>
  </div>
  <div class="p-4">
    <GrowCard :loading="loading" class="enter-y" id="card" />
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" id="site"/>
    <div class="md:flex enter-y">
      <VisitRadar class="md:w-1/3 w-full" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="md:w-1/3 w-full" :loading="loading" />
    </div>
  </div>
  <div class="data-table1">
    <!-- 表格标题 -->
    <h2>xx产品收入TOP3单位</h2>
    <!-- 表格区域 -->
    <table class="table1">
      <thead>
        <tr>
          <th>排名</th>
          <th>管理维度</th>
          <th>收入</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>招标代理</td>
          <td>17878078.37</td>
        </tr>
        <tr>
          <td>2</td>
          <td>DICT方案</td>
          <td>13150424.54</td>
        </tr>
        <tr>
          <td>3</td>
          <td>DICT特专交付</td>
          <td>6619070.12</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="data-table2">
    <!-- 表格标题 -->
    <h2>ef产品收入TOP3单位</h2>
    <!-- 表格区域 -->
    <table class="table1">
      <thead>
        <tr>
          <th>排名</th>
          <th>管理维度</th>
          <th>收入</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>监理公司</td>
          <td>8672355.96</td>
        </tr>
        <tr>
          <td>2</td>
          <td>湖北分院</td>
          <td>5591636.485</td>
        </tr>
        <tr>
          <td>3</td>
          <td>江苏分院</td>
          <td>2572428.31</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="data-table3">
    <!-- 表格标题 -->
    <h2>cd产品收入TOP3单位</h2>
    <!-- 表格区域 -->
    <table class="table1">
      <thead>
        <tr>
          <th>排名</th>
          <th>单位</th>
          <th>收入</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>工程建设监理</td>
          <td>8672355.96</td>
        </tr>
        <tr>
          <td>2</td>
          <td>采购代理</td>
          <td>659545</td>
        </tr>
        <tr>
          <td>3</td>
          <td>采购代理</td>
          <td>299505.09</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="data-table4">
    <!-- 表格标题 -->
    <h2>ab产品收入TOP3单位</h2>
    <!-- 表格区域 -->    
    <table class="table1">
      <thead>
        <tr>
          <th>排名</th>
          <th>单位</th>
          <th>收入</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>院本部</td>
          <td>18925750</td>
        </tr>
        <tr>
          <td>2</td>
          <td>院本部</td>
          <td>17048800</td>
        </tr>
        <tr>
          <td>3</td>
          <td>院本部</td>
          <td>16489604.9</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import BasicForm from './components/GrowCard.vue'
  import SiteAnalysis from './components/SiteAnalysis.vue';
  import BasicTable from '@/components/Table/src/BasicTable.vue';
   //引入 表格内容和头部查询框
  //import VisitSource from './components/VisitSource.vue';
  //import VisitRadar from './components/VisitRadar.vue';
  //import SalesProductPie from './components/SalesProductPie.vue';
  

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
<style>
#card{
  width: 800px;
}
.select{
  width: 100%;
  height: 20px;
}
.p{
  border-width: 1px;
  border: #000;
  margin-left: 150px;
  margin-top: -20px;
  background-color: #000;
  font: black;
}

.data-table1{
  width: 250px;
  height: 175px;
  border-width: 1px;
  border-color: black;
  border-radius: 3%;
  margin-top: -620px;
  margin-left: 250px
}
.data-table2{
  border-color: black;
  width: 250px;
  height: 175px;
  border-width: 1px;
  border-radius: 3%;
  border-width: 1px;
  margin-top: -175px;
  margin-left: 500px
}
.data-table3{
  border-color: black;
  width: 250px;
  border-width: 1px;
  border-radius: 3%;
  border-width: 1px;
  margin-top: -175px;
  margin-left: 750px
}
.data-table4{
  border-color: black;
  width: 250px;
  border-width: 1px;
  border-radius: 3%;
  border-width: 1px;
  margin-top: -175px;
  margin-left: 1000px
}
.table1{
  border-width: 1px;
  width: 100%;
  height: 140px;
  font: white 25px;
  
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #000; /* 设置单元格边框 */
  padding: 8px; /* 内边距 */
  text-align: left; /* 文本对齐方式 */
}

</style>
