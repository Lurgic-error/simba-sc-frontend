<template>
  <div class="fixtures">
    <Hero heading='Fixtures' />
    <FixturesList class="" />
    <Results />
    <Parallax />
    <PartnersList />
    <Footer />

    <!-- <div class="fixtures__list">
        <div class="fixtures__item">
          <div class="item__img">

          </div>
          <div class="item__desc">
            <h3 class="desc__title">Match</h3>

            <p class="desc__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae odit ab ratione, dolore eum
              nesciunt,
            </p>

            <a href="" class="btn btn__cta ">Book Now</a>
          </div>
        </div>

        <div class="fixtures__item">
          <div class="item__img">

          </div>
          <div class="item__desc">
            <h3 class="desc__title">Match</h3>

            <p class="desc__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae odit ab ratione, dolore eum
              nesciunt,
            </p>

            <a href="" class="btn btn__cta ">Book Now</a>
          </div>
        </div>

        <div class="fixtures__item">
          <div class="item__img">

          </div>
          <div class="item__desc">
            <h3 class="desc__title">Match</h3>

            <p class="desc__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae odit ab ratione, dolore eum
              nesciunt,
            </p>

            <a href="" class="btn btn__cta ">Book Now</a>
          </div>
        </div>
      </div>

      <div class="fixture__results">
        <div class="game">
          <h4 class="game-status">Last Game</h4>

          <div class="game-results">
            <p>Biashara United 0 - 2 Simba S.C</p>
          </div>

          <div class="game-date">
            <span class="date">29 Sept 2019 16:00</span> |
            <span class="game-stadium">Karume Stadium</span>
          </div>
        </div>

        <div class="game">
          <h4 class="game-status">Next Game</h4>

          <div class="game-results">
            <p>KMC FC - Simba S.C</p>
          </div>

          <div class="game-date">
            <span class="date">29 Sept 2019 16:00</span> |
            <span class="game-stadium">Uhuru Stadium</span>
          </div>
        </div>
      </div> -->






  </div>
</template>

<script>
  import Hero from '@/components/Hero.vue';
  import FixturesList from '@/components/Fixtures/FixturesList.vue';
  import Parallax from '@/components/Parallax/Parallax.vue';
  import Results from '@/components/Fixtures/Results.vue';
  import PartnersList from '@/components/Partners/PartnersList.vue';
  import Footer from '@/components/Footer/Footer.vue';


  export default {
    name: 'Fixtures',
    components: {
      Hero,
      FixturesList,
      Parallax,
      Results,
      PartnersList,
      Footer
    }
  }
</script>

<style lang="scss" scoped>
  .fixtures {
    height: 100vh;
  }

  // .fixtures {
  //   padding: 6rem 20rem;
  //   background-color: rgba(128, 128, 128, 0.205);
  // }

  // .fixture__results {
  //   // padding: 6rem 20rem;
  //   margin-top: 4rem;
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  // }

  // .fixtures__list {
  //   display: flex;
  //   justify-content: space-between;
  //   flex-wrap: wrap;


  //   .fixtures__item {
  //     width: 33%;
  //     flex: 1 1 auto;

  //     .item__img {
  //       width: 100%;
  //       height: 300px;
  //       background-color: red;
  //     }

  //     &__desc {
  //       padding: 1.25rem;

  //       &__title {
  //         margin-bottom: 1.25rem;
  //       }

  //       &__text {
  //         margin-bottom: 1.25rem;
  //       }

  //     }

  //   }
  // }
</style>