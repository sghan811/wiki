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
  font-family: 'MICEMyungjo';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEMyungjo.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  font-family: 'MICEMyungjo';
}
</style>