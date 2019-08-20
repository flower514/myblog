<template>
  <header id="myhead">
    <div class="bg-box">
      <transition name="chang">
        <div v-show="show" class="box-center">
          <img src="@/image/myhead.jpg" />
          <h1 class="my-name">邹 华</h1>
          <p>好的想法是十分钱一打，真正无价的是能够实现这些想法的人</p>
        </div>
      </transition>
      <div class="nav-box">
        <nav class="box-center">
          <router-link tag="a" to="/index" @click.native="show=true">首页</router-link>
          <router-link tag="a" to="/article" @click.native="show=true">文章</router-link>
          <router-link tag="a" to="/note" @click.native="show=true">笔记</router-link>
          <router-link tag="a" to="/about" @click.native="show=false">关于</router-link>
        </nav>
      </div>
      <transition name="git">
        <div v-if="show" class="git">
          <a href="https://github.com/flower514" target="_blank">
            My github
            <img src="@/image/icon-github.png" />
          </a>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      show: true
    }
  },
  mounted() {
    this.change()
  },
  methods: {
    change() {
      if (this.$route.path == '/about') {
        this.show = false
      }
    }
  }
}
</script>

<style scoped>
.bg-box {
  background: linear-gradient(to bottom, #60d0f1, #60d0f11f);
  color: #ffffff;
  text-align: center;
  animation: mychange 3s;
}

.box-center {
  display: block;
  margin: auto;
  overflow: hidden;
}

.box-center img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 50px;
}

p {
  margin: 10px 0px;
}

a {
  color: #ffffff;
  padding: 10px 20px;
}

.nav-box a:hover {
  background: #5b5b5b;
}

.nav-box {
  background: #d1d1d142;
  text-align: left;
}

.router-link-active,
.router-link-active:hover {
  background: #4a4a4a;
}

.git {
  display: inline-block;
  background: #4a4a4a;
  font-size: 22px;
  position: absolute;
  top: 60px;
  left: -80px;
  transform: rotate(-45deg);
}

.git > a {
  padding: 2px 100px;
}

.git img {
  height: 26px;
  float: right;
  margin-left: 10px;
}

.chang-enter-active {
  animation: chang-in 0.5s;
}
.chang-leave-active {
  animation: chang-in 0.5s reverse;
}
@keyframes chang-in {
  0% {
    height: 0px;
  }
  100% {
    height: 247px;
  }
}
.git-enter-active {
  animation: chang-git 0.5s;
}
.git-leave-active {
  animation: chang-git 0.5s reverse;
}
@keyframes chang-git {
  0% {
    top: -40px;
    left: -180px;
  }
  100% {
    top: 60px;
    left: -80px;
  }
}
</style>