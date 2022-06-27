<template>
<el-table
    :data="examdata"
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
      label="考试 ID"
      prop="id" width="200px">
    </el-table-column>
    <el-table-column
      label="时间"
      prop="examtime" min-width="200px">
    </el-table-column>
     <el-table-column
      label="考试地点"
      prop="address" min-width="200px">
    </el-table-column>
    <el-table-column
      label="人数"
      prop="number">
    </el-table-column>
  </el-table>
</template>

<script>
import {getExamApList,addExamAp} from '@/api/exam'
  export default {
    data() {
      return {
        examdata:[
          {
            id:1,
            examtime:'2022-04-01',
            address:'大胜靠德放假快乐啥地方就靠的就是咖啡机',
            number:200
          }
        ],
       
      }

    },
    async created(){
 let result=  await getExamApList({type:2})
        if(result.code==201){
          this.examdata=result.data
        
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