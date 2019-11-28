<template>
  <section class="hero">
    <div class="hero__content">
      <h3 class="hero__heading ">
        <!-- Some Prop goes here -->
        {{ heading }}
      </h3>
    </div>
  </section>
</template>



<script>
  export default {
    name: 'Hero',
    props: {
      heading: String
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/styles/abstracts/_mixins.scss';

  @import '../assets/styles/abstracts/_variables.scss';

  .hero {
    background-image: url('../../public/Images/stadium3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100%;
    text-shadow: 0.1em 0.1em 0.3em #000;
    display: flex;
    justify-content: center;
    align-items: center;

    @include respond(phone){
      display: block;
      padding: 4rem  2rem;
      height: 60%;
    }
  }


  .hero__content {
    background-color: rgba(0, 0, 0, 0.329);
    padding: 2rem;
    border-radius: 8px;
  }

  .hero__heading {
    font-size: 8rem;
    color: white;

    @include respond(phone) {
      font-size: 3rem;
      text-align: center;
    }
  }
</style>