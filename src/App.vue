<template>
  <div id="app">
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/AppBody/index.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style>
* { margin: 0; }
</style>
