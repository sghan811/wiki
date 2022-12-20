<template>
  <header>
    <router-link to="/" class="title">Discord News</router-link>
  </header>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
.title{
  color:black;
  text-decoration: none;
}
header {
    font-family: 'DM Serif Display', serif;
    backdrop-filter: saturate(200%) blur(10px);
    background-color: rgba(255, 255, 255, 0.8);
    font-weight: 100;
    top: 0;
    position: sticky;
    z-index: 100;
    padding: 10px 30%;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.171);
    border-bottom-width: 1px;
    font-size: 32px;
}
</style>
