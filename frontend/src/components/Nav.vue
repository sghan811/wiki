<template>
  <header>
    <div class="title">
      <router-link to="/" class="main">Discord Wiki</router-link>  
      <router-link to="/login" class="login-button">login</router-link>
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
export default {
  name: 'Nav'
}
</script>

<style>
.main{
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
ul{
   list-style:none;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
}
.login-button{
  right: 0;
  position:absolute;
  font-size: 10px;
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
    font-family: 'DM Serif Display', serif;
    backdrop-filter: saturate(200%) blur(10px);
    background-color: rgba(255,250,250, 0.8);
    font-weight: 100;
    top: 0;
    position: sticky;
    z-index: 100;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.171);
    border-bottom-width: 1px;
    font-size: 32px;
}
</style>
