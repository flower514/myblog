<template>
  <div id="about" class="box-center">
    <el-carousel class="bg" trigger="click" height="550px" direction="vertical" :autoplay="false">
      <el-carousel-item class="brief">
        <img class="headimg" src="@/image/myhead.jpg" />
        <p>
          您好，我叫邹华，坐标重庆渝北。我于2019年毕业于重庆工程职业技术学院软件技术专业，由于个人爱好，我更偏向于前端方面的学习。
          目前除去熟练掌握Html5、css3、JS/JQ前端三大技能外，也能熟练运用Vue构建单页面应用,以及bootstrap、element等UI框架和各种常用插件。
          在实习期间,本人在公司主要部分页面的前端开发，及配合后台人员实现产品前端界面效果与功能。
        </p>
        <br />
        <p>喜爱前端，学习能力强，有执行力，不浮躁。</p>
      </el-carousel-item>
      <el-carousel-item class="course">
        <el-timeline>
          <el-timeline-item timestamp="2018/" placement="top" size="large">
            <el-card>
              <h4>参与全国计算机技术与软件专业技术资格(水平)考试</h4>
              <p>获得初级程序员</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2019/4 - 2019/5" placement="top" size="large">
            <el-card>
              <h4>于重庆在讯网络科技有限公司实习</h4>
              <p>前端实习岗，负责公司外贸综合服务平台及其后台管理系统部分页面的前端开发，及配合后台人员实现产品前端界面效果与功能。</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  }
}
</script>

<style scoped>
.bg {
  flex: 1;
}

.headimg {
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 50px auto 20px auto;
}

.brief > p {
  max-width: 800px;
  margin: auto;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
  text-indent: 40px;
}

.course > ul {
  max-width: 650px;
  margin: 70px auto auto auto;
}

.course > ul > li {
  padding-bottom: 40px;
}

.course h4 {
  font-size: 18px;
  padding-bottom: 5px;
}

#about /deep/ .el-carousel__button {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #000000;
}
</style>