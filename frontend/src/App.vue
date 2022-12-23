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
*{
  -webkit-text-size-adjust : 5%;  /* 크롬, 사파리, 오페라(신) */
  -ms-text-size-adjust : auto;  /* IE */
  -moz-text-size-adjust : auto;  /* 파이어폭스 */
  -o-text-size-adjust : auto;  /* 오페라(구)*/
}
body {
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>