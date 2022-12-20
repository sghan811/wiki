<template>
  <Nav />
  <RouterView></RouterView>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

@font-face {
  font-family: 'Anton';
  src: url('./Anton/Anton-Regular.ttf') format('Anton');
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  font-family: 'Anton';
}
</style>