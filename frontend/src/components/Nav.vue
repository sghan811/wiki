<template>
  <header>
    <div class="title" :key="isHidden">
      <router-link to="/" class="main">Discord Wiki</router-link>  
      <router-link v-if:="!isHidden" to="/login" class="login-button" >login</router-link>
      <router-link v-if:="isHidden" to="/write" class="login-button2" >글 작성</router-link>
      <router-link @click="logout()" v-if:="isHidden" to="/" class="login-button">logout</router-link>
    </div>
    
    <div class="container-fluid">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="nav">
          <ul class="navbar-nav">
           <li>hmm</li>
           <li>sus</li>
           <li>hmm</li>
           <li>sus</li>
           <li>hmm</li>
           <li>sus</li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="login-bar">
      
    </div>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Nav',
  data() {
    return {
      isHidden: this.$route.query
    }
  }, 
  
  mounted() {
    this.verify()
  },
  methods: {
    logout() {
      this.isHidden = false
      axios.get("/api/v1/user/logout")
    },
    async verify() {
      if((await axios.get("/api/v1/user/verify")).data.isAuth){
        this.isHidden = true
        console.log(this.isHidden)

      }else{
        this.isHidden = false
        console.log(this.isHidden)
      }
    }
  }
}
</script>

<style>
.main{
  color:black;
  font-size: 2.2rem;
  text-decoration: none;
}
.login-button2{
  border-color:black;
  border: 2px inset black;
  right: 60px;
  position:absolute;
  font-size: 20px;
  align-self: center;
  color:black;
  text-decoration: none;
}
.title{
  width: 100%;
  display: flex;
  justify-content: center;
  color:black;
  text-decoration: none;
  z-index: 1;
}
li {
  font-size: 25px;
}
ul{
   list-style:none;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
}
.login-button{
  border-color:black;
  border: 2px inset black;
  right: 0;
  position:absolute;
  font-size: 20px;
  align-self: center;
  color:black;
  text-decoration: none;
}
.navbar-nav{
  align-items: center;
  display: flex;
  justify-content: space-between;  
  padding:0;
  width: 40%;
}
header {
    font-family: 'Times New Roman', serif;
    backdrop-filter: saturate(200%) blur(10px);
    background-color: rgba(255,250,250, 0.8);
    font-weight: bolder;
    top: 0;
    position: sticky;
    z-index: 100;
    width: 100%;
    padding-top: 20px;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.171);
    border-bottom-width: 1px;
    font-size: 32px;
}
</style>
