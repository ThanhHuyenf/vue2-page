<template>
  <div id="app">
    <router-link to="/hihi">HUyen</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
}
.app-container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
