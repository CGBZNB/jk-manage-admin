<template>
<el-table
    :data="lcdata"
    style="width: 100%">
    <!-- <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="考试 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="时间">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="场地">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="人数">
            <span>{{ props.row.count }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column> -->
    <el-table-column
      label="练车 ID"
      prop="id" width="200px">
    </el-table-column>
    <el-table-column
      label="开始时间"
      prop="starttime" min-width="200px">
    </el-table-column>
        <el-table-column
      label="结束时间"
      prop="endtime" min-width="200px">
    </el-table-column>
     <el-table-column
      label="车牌号"
      prop="car.carNumber" min-width="200px">
    </el-table-column>
    <el-table-column
      label="人数"
      prop="number">
    </el-table-column>
  </el-table>
</template>

<script>
import {getLCApList,getCar} from '@/api/exam'
  export default {
    data() {
      return {
        lcdata:[
          // {
          //   id:'',
          //   starttime:'',
          //   endtime:'',
          //   carnumber:'',
          //   number:''
          // }
        ],
       
      }

    },
    async created(){
      let result=  await getLCApList({type:3})
        if(result.code==201){
          this.lcdata=result.data
        
        }else{
             this.$message("无数据")
            
        }
    }
  }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>