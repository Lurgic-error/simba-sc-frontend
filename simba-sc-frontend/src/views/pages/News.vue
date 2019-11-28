<template>
  <div class="news">
    <!-- <Hero heading='Latest News' /> -->
  <NewsGrid/>
<NewsList />

    <Parallax />
    <Results />
    <EventsList />
    <PartnersList />
    <Footer />
  </div>
</template>


<script>
  // @ is an alias to /src
  // import Hero from '@/components/Hero.vue';
  import EventsList from '@/components/Events/EventsList.vue';
  import NewsGrid from '@/components/News/NewsGrid.vue';
  import NewsList from '@/components/News/NewsList.vue';
  import Parallax from '@/components/Parallax/Parallax.vue';
  import Results from '@/components/Fixtures/Results.vue';
  import PartnersList from '@/components/Partners/PartnersList.vue';
  import Footer from '@/components/Footer/Footer.vue';


  export default {
    name: "News",
    components: {
      EventsList,
      NewsGrid,
      NewsList,
      Parallax,
      Results,
      PartnersList,
      Footer
    },

    //   created(){
    //     this.$store.dispatch('fetchNews')
    // },

    computed: {
      news() {
        return this.$store.getters.getNews
      }
    }
  };
</script>


<style lang="scss" scoped>
  .news {
    height: 100vh;
  }

  

</style>