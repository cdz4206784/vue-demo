<template>
  <div class="users">
    <h1>Hello Users</h1>
    <ul>
      <li v-for="user in users">
        <h2>{{user.name}}</h2>
        <h3>{{user.email}}</h3>
        <p v-for="(item, index) in user.company" :key="index">
          {{index}}: {{item}}
        </p>
      </li>
    </ul>
    <button v-on:click="deleteUser">删除</button>

  </div>
</template>

<!--
  传值： string number boolean
  传引用： array object
-->

<script>
export default {
  name: 'users',
  //props:["users"],  //接收从父组件的传值
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteUser (){
      this.users.pop();
    }
  }
}
</script>

<style scoped>
  .users {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 200px;
    text-align: left;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }

</style>
