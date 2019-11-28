<template>
  <div class="home">

    <Hero heading='The Champions' />


    <NewsList title='Latest News' />

    <Parallax />
    <section class="section__events">
      <EventsList/>
      <div class="ads">
        <img src="../../../public/Images/aishi.jpg" alt="">
      </div>
    </section>
    <Results />


    <PartnersList />


    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Hero from '@/components/Hero.vue';
  import NewsList from '@/components/News/NewsList.vue';
  import Parallax from '@/components/Parallax/Parallax.vue';
  import Results from '@/components/Fixtures/Results.vue';
  import PartnersList from '@/components/Partners/PartnersList.vue';
  import Footer from '@/components/Footer/Footer.vue';
  import EventsList from '@/components/Events/EventsList.vue';


  export default {
    name: "Home",
    components: {
      Hero,
      NewsList,
      Parallax,
      Results,
      PartnersList,
      Footer,
      EventsList,
 
    }
  };
</script>


<style scoped lang="scss">

@import '../../assets/styles/abstracts/_mixins.scss';


  .home {
    height: 100vh;
  }

  .fixtures {
    padding: 6rem 20rem;
    background-color: rgba(128, 128, 128, 0.205);
  }

  .fixture__results {
    // padding: 6rem 20rem;
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .fixtures__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .fixtures__item {
      width: 33%;
      flex: 1 1 auto;

      .item__img {
        width: 100%;
        height: 300px;
        background-color: red;
      }

      &__desc {
        padding: 1.25rem;

        &__title {
          margin-bottom: 1.25rem;
        }

        &__text {
          margin-bottom: 1.25rem;
        }

      }

    }
  }

  .news-section {
    margin: 4rem;
    padding: 4rem 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .news-section.row {
    align-self: center;
  }

  .blog-section {
    background-color: rgba(128, 128, 128, 0.253);
    // margin: 4rem;
    padding: 4rem 10rem;
  }

  .player-month {
    background-color: #c600003f;
    // width: 100%;
    height: 500px;
    padding: 4rem 15rem;

    .player-card {
      display: flex;
      // justify-content: center;
      align-items: center;

      .player-img {
        width: 50%;
        // height: 100%;
        margin-right: 2rem;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .player-info {

        h4 {
          font-size: 4rem;
        }
      }
    }
  }

  .section__events{
    // margin: 4rem 0;
    // padding: 0 4rem;
    display: flex;

@include respond(phone){
      display: block;
      margin: 0;
      padding: 0;
    }
    
  }

  .ads{
    flex: 33%;
    background-color: blue;
    display: flex;
        flex-direction: column;


        img {
            flex: 1;
            object-fit: cover;
            object-position: center;
        }

  @include respond(phone){
      display: flex;
      width: 100%;
      img{
        flex: 1;
        width: 100%;
        object-fit: cover;
            object-position: center;
      }
    }

  }
</style>