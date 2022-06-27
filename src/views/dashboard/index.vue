<template>
  <div class="dashboard-container">
    <div class="dashboard-text">登录用户名: {{ userinfo.loginname }}</div>
     <div class="dashboard-text">名称: {{ userinfo.name }}</div>
      <div class="dashboard-text">角色名: {{ userinfo.rolename }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data:{
    userinfo:{}
  },
  created(){
    this.userinfo=this.$store.state.user.userinfo
  }
  }

</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
