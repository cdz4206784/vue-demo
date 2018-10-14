<!-- 1模板：html结构 -->
<template>
  <div id="app">
    <!-- 6、路由导航 -->
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/helloworld">Hello</router-link>
      </li>
    </ul>

    <!-- 5、展示 -->
    <router-view></router-view>

  </div>
</template>

<!-- 2行为：处理逻辑 -->
<script>

export default {
  name: 'App',
  data(){
    return {

    }
  }
}
</script>

<!-- 3样式：解决样式 -->
<style scoped>

</style>
