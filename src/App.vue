<template>
  <div id="app">
    <router-view/>
    <page-home/>
    <app-modal/>
  </div>
</template>

<script>
import AppModal from './components/AppModal'
import PageHome from './components/PageHome'

export default {
  name: 'App',
  components: {
    AppModal,
    PageHome
  }
}
</script>
<style src="@/assets/fonts/InterUI/inter-ui.css"></style>
<style src="@/assets/fonts/aeternity-mono-master/WEB/aeternity-mono.css"></style>

<style>
#app {
  font-family: 'Inter UI';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
p {
  padding: 0;
}
.router-link-exact-active {
  opacity: .5;
}
</style>
