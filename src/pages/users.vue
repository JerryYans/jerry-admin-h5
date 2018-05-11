<template>
  <div class="users">
    <h2>Users vue component...</h2>
    <ul>
      <li v-for="user in userList" @click="user.show=!user.show">
        <h3>{{user.name}}</h3>
        <h3 v-show="user.show">{{ user.age }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  //props:["userList"]
  // props:{
  //   userList:{
  //     type:Array,
  //     required:true
  //   }
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'Users! title',
      userList:[]
    }
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data)=>{
        this.userList = data.body;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  display: inline-block;
  margin: 20px;
}
a {
  color: #42b983;
}
.users{
  width: 100%;
  max-width:1200px;
  margin: 40px auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
