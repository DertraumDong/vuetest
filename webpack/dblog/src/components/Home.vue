<template>
  <div>
    home
    <br/>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/home/name">name</router-link>
    <button @click="goBack">goback</button>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
          goBack () {
            window.history.length > 1
              ? this.$router.go(-1)
              : this.$router.push('/')
          }
        }
    }
</script>

<style scoped>

</style>
