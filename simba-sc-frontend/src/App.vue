<template>
  <div id="app">
  <Header />
    <router-view />
   
  </div>
</template>

<style lang="scss">


</style>


<script>
  // @ is an alias to /src
  import Header from "@/components/Header/Header.vue";
  // import Auth from '@/components/Auth/Authentication.vue';
  export default {
    name: "App",
    components: {
      Header
    },
    created(){
      this.$store.dispatch('fetchUsers')
      this.$store.dispatch('fetchNews')

    }
  };
</script>