<template>
  <div class="main">
      <div class="operate">
       <el-button type="text" @click="xinxifabu">信息发布</el-button>

<el-dialog title="练车安排" :visible.sync="dialogFormVisible">
  <el-form :model="form">
        <!-- <el-form-item label="开始时间" :label-width="formLabelWidth">
         <el-date-picker
      v-model="form.starttime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item> -->
     <el-form-item label="开始时间" :label-width="formLabelWidth">
 <el-date-picker
      v-model="form.starttime"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    </el-form-item>

     <el-form-item label="结束时间" :label-width="formLabelWidth">
 <el-date-picker
      v-model="form.endtime"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
    </el-form-item>
      <!-- <el-form-item label="结束时间" :label-width="formLabelWidth">
         <el-date-picker
      v-model="form.endtime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item> -->
    <el-form-item label="车牌号" :label-width="formLabelWidth">
         <el-select v-model="form.carnumber" placeholder="车辆" >
       <el-option v-for="item in car" :key="item.id" :label="item.carNumber" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="练车人数" :label-width="formLabelWidth">
      
        <el-col :span="9">
           <el-input v-model="form.number" autocomplete="off" ></el-input>
        </el-col>
     
    </el-form-item>
        <el-form-item label="练车科目" :label-width="formLabelWidth">
      <el-select v-model="form.type" placeholder="请选择练车科目">     
        <el-option label="科目二" value="2"></el-option>
        <el-option label="科目三" value="3"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitExam">确 定</el-button>
  </div>
</el-dialog>
      </div>
      <div class="info">
      <router-view />
      </div>

  </div>
</template>
<script>
import moment from 'moment'
import {addLCAp,getLCApList,getCar} from '@/api/exam'
  export default {
  
    data() {
      return {
       
        dialogFormVisible: false,
        form: {
            id:'',
            starttime:'',
            endtime:'',
            carnumber:'',
            number:'',
            type:'',
        },
        car:[],
        formLabelWidth: '120px'
      };
    },
    methods:{
     async xinxifabu(){
         this.dialogFormVisible = true
          let result=await getCar({})
          if(result.code==201){
            this.car=result.data
              this.dialogFormVisible = true
          }else{
            this.$message("获取车辆失败")
          }
     
      },
    async  submitExam(){
        this.form.starttime=moment( this.form.starttime).format("YYYY-MM-DD HH:mm:ss");
         this.form.endtime=moment( this.form.endtime).format("YYYY-MM-DD HH:mm:ss");

        let result=  await addLCAp(this.form)
        if(result.code==201){
          this.$message(result.data)
          this.dialogFormVisible = false
        }else{
             this.$message("添加失败")
             this.dialogFormVisible = false
        }

      }
    }

  };
</script>
<style scoped>
.main{
  padding:30px;
}
.main .operate{
  height: 80px;
}
</style>
