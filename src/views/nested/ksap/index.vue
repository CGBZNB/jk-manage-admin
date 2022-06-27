<template>
  <div class="main">
      <div class="operate">
       <el-button type="text" @click="dialogFormVisible = true">信息发布</el-button>

<el-dialog title="考试安排" :visible.sync="dialogFormVisible">
  <el-form :model="form">
        <el-form-item label="考试时间" :label-width="formLabelWidth">
         <el-date-picker
      v-model="form.examtime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="考试地点" :label-width="formLabelWidth">
      <el-input v-model="form.address" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="考试人数" :label-width="formLabelWidth">
      <el-input v-model="form.number" autocomplete="off"></el-input>
    </el-form-item>
        <el-form-item label="考试科目" :label-width="formLabelWidth">
      <el-select v-model="form.type" placeholder="请选择考试科目">
        <el-option label="科目一" value="1"></el-option>
        <el-option label="科目二" value="2"></el-option>
        <el-option label="科目三" value="3"></el-option>
        <el-option label="科目四" value="4"></el-option>
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
import {getExamApList,addExamAp} from '@/api/exam'
  export default {
  
    data() {
      return {
       
        dialogFormVisible: false,
        form: {
         id:'',
         examtime:'',
         address:'',
         number:'',
         type:'',
        },
        formLabelWidth: '120px'
      };
    },
    methods:{
    async  submitExam(){
        this.form.examtime=moment( this.form.examtime).format("YYYY-MM-DD");
  
        let result=  await addExamAp(this.form)
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
