<template>
  <footer v-on:click="changeCopyright">
    <p>{{copyright}} - {{title}}</p>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: 'Copyright 2018 Vue Demo'
    }
  },
  methods: {
    changeCopyright(){
      // 子向父组件传值
      this.$emit("copyrightChanged","子向父组件传值Footer")
    }
  }
}
</script>

<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }
  p {
    color: lightgreen;
    text-align: center;
  }
</style>
