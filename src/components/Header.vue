<template>
  <header v-on:click="changeTitle">
    <h1>{{headerTitle}} - {{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      headerTitle: 'Vue.js Demo'
    }
  },
  methods: {
    changeTitle(){
      // this.title = "changed"
      this.$emit("titleChanged","子向父组件传值Header");  //子向父组件传值，绑定一个事件
    }
  },
  // 生命周期钩子函数
  // beforeCreate(){
  //   alert("组件实例化之前执行的函数")
  // },
  // created(){
  //   alert("组件实例化完毕，但页面还未显示")
  // },
  // beforeMount(){
  //   alert("组件挂载前，页面仍未展示，但虚拟Dom已经配置")
  // },
  // mounted(){
  //   alert("组件挂载后，此方法执行后，页面显示")
  // },
  // beforeUpdate(){
  //   alert("组件更新前，页面仍未更新，但虚拟Dom已经配置")
  // },
  // updated(){
  //   alert("组件更新后，此方法执行后，页面显示")
  // },
  // beforeDestroy(){
  //   alert("组件销毁前")
  // },
  // destroyed(){
  //   alert("组件销毁")
  // }
}
</script>

<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>
