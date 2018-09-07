<script src="../../../../webpack_start/webpack.config.js"></script>
<template>
    <div class="banner">
        <el-carousel :interval="4000">
            <el-carousel-item v-for="item in 6" :key="item">
                <img style="width:100%;" src="https://img.zcool.cn/community/0113de5b27cb7aa8012034f7f7afc4.png@1380w" class="bannerImg" />
            </el-carousel-item>
        </el-carousel>
        <div class="card">
            <el-row >
                <el-col :span="5" v-for="(o, index) in 16" :key="o" :offset="(index > 0) ? 1 : 1">
                    <el-card :body-style="{ padding: '0px' }">
                        <img style="width:100%" src="https://img.zcool.cn/community/016d755b1fa4e0a80121bbecc6eda8.jpeg@260w_195h_1c_1e_1o_100sh.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>绽影像之《初醒》</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                            </div>
                    src: '',

                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentDate: new Date()
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
.el-col-offset-1 {
    margin-left: 3.16667%;
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}
.el-carousel__container {
  width: 1200px;
  margin: 0 auto;
}
.banner {
  margin-top: 15px;
  max-width:1200px;
  margin:0 auto;
}
.el-col{
    margin-top:20px;
}
</style>