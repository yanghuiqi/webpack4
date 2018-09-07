<template>
    <div class="list">
        <router-link :to="{ name:'Detail', params: { id:1 }}">
            <el-row>
                <el-col :span="3" v-for="(o, index) in 12" :key="o" :offset="index > 0 ? 2 : 2">
                    <el-card :body-style="{ padding: '0px' }">
                        <img style="width:100%" src="https://img.zcool.cn/community/01d9655b273856a8012034f7372a04.jpeg@260w_195h_1c_1e_1o_100sh.jpg" class="image">
                        <div style="padding: 14px;">
                            <span class="intro_title">重庆——《耀斑》</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </router-link>
    </div>
</template>
<script>

export default {
    data() {
        return {
            currentDate: new Date()
        };
    }

}
</script>
<style scoped>
.intro_title{
    font-size:14px;
}
.list {
  margin-top: 15px;
  max-width: 1200px;
  margin: 0 auto;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
  .card{
      margin-top:20px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .el-col{
    margin-top:20px;
}
</style>


