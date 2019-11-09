<template>
  <div class="home-top">
    <div class="nav-title main-bg">
      <div class="container df">
        <router-link to="/" tag="h1">
          <img src="../assets/images/logo.png" alt="太原理工大学" />
        </router-link>
        <h2 class="main-title">
          <span>化工虚拟仿真实验教学中心</span>
        </h2>
      </div>
    </div>
    <div class="navigation sub-bg">
      <ul class="container df">
        <li>
          <router-link to="/" exact active-class="active">首页</router-link>
        </li>
        <li>
          <router-link to="/basics" active-class="active">中心概况</router-link>
        </li>
        <li>
          <router-link to="/affairs" active-class="active">中心动态</router-link>
        </li>
        <li>
          <router-link to="/experiments" active-class="active">实验项目</router-link>
        </li>
        <li>
          <router-link to="/resources" active-class="active">实验资源</router-link>
        </li>
        <li>
          <router-link to="/science" active-class="active">科学普及</router-link>
        </li>
        <li>
          <router-link to="/engineer" active-class="active">智能化工</router-link>
        </li>
        <li>
          <router-link to="/cooperation" active-class="active">校企合作</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-top"
};
</script>

<style>
.home-top h1 {
  margin: 21px 0;
}
.home-top h1 img {
  display: block;
}
.home-top h2 {
  margin-left: 40px;
  padding-top: 45px;
}
.home-top h2 span {
  display: block;
}

.navigation ul {
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.navigation ul a {
  display: block;
  font-size: 16px;
  color: #fff;
  line-height: 1.7;
}
.navigation ul a:hover,
.navigation ul a.active {
  font-weight: bold;
}
</style>