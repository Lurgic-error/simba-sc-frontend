<template>
    <div class="simbatv">
        <section class="hero">
            <div class="hero-content">
                <span class="icon-play-lg icon-play-button-1"></span>
            </div>
        </section>

        <section class="match__highlights__list">

            <div class="match__highlight">
                <div class="match__video">
                    <img src="../../../public/Images/team.png" alt="">
                    <!-- <span class="icon-play-md icon-play-button-1"></span> -->
                </div>
                <div class="match__details">
                    <p class="match__date">
                        29 Sept 2019
                    </p>
                </div>
            </div>


            <div class="match__highlight">
                <div class="match__video">
                    <img src="../../../public/Images/team.png" alt="">
                    <!-- <span class="icon-play-md icon-play-button-1"></span> -->
                </div>
                <div class="match__details">
                    <p class="match__date">
                        29 Sept 2019
                    </p>
                </div>
            </div>


            <div class="match__highlight">
                <div class="match__video">
                    <img src="../../../public/Images/team.png" alt="">
                    <!-- <span class="icon-play-md icon-play-button-1"></span> -->
                </div>
                <div class="match__details">
                    <p class="match__date">
                        29 Sept 2019
                    </p>
                </div>
            </div>


            <div class="match__highlight">
                <div class="match__video">
                    <img src="../../../public/Images/team.png" alt="">
                    <!-- <span class="icon-play-md icon-play-button-1"></span> -->
                </div>
                <div class="match__details">
                    <p class="match__date">
                        29 Sept 2019
                    </p>
                </div>
            </div>


            <div class="match__highlight">
                <div class="match__video">
                    <img src="../../../public/Images/team.png" alt="">
                    <!-- <span class="icon-play-md icon-play-button-1"></span> -->
                </div>
                <div class="match__details">
                    <p class="match__date">
                        29 Sept 2019
                    </p>
                </div>
            </div>


            <div class="match__highlight">
                <div class="match__video">
                    <img src="../../../public/Images/team.png" alt="">
                    <!-- <span class="icon-play-md icon-play-button-1"></span> -->
                </div>
                <div class="match__details">
                    <p class="match__date">
                        29 Sept 2019
                    </p>
                </div>
            </div>


            <div class="match__highlight">
                <div class="match__video">
                    <img src="../../../public/Images/team.png" alt="">
                    <!-- <span class="icon-play-md icon-play-button-1"></span> -->
                </div>
                <div class="match__details">
                    <p class="match__date">
                        29 Sept 2019
                    </p>
                </div>
            </div>


            <div class="match__highlight">
                <div class="match__video">
                    <img src="../../../public/Images/team.png" alt="">
                    <!-- <span class="icon-play-md icon-play-button-1"></span> -->
                </div>
                <div class="match__details">
                    <p class="match__date">
                        29 Sept 2019
                    </p>
                </div>
            </div>

        </section>

        <PartnersList />
        <Footer />
    </div>
</template>


<script>
    import PartnersList from '@/components/Partners/PartnersList.vue';
    import Footer from '@/components/Footer/Footer.vue';

    export default {
        name: 'SimbaTV',
        components: {
            PartnersList,
            Footer
        },
        data: () => {
            return {}
        },
        computed: {},
        mounted: {},
        methods: {},

    }
</script>


<style lang="scss" scoped>
    @import '../../assets/styles/abstracts/_mixins.scss';

    .hero {
        height: 100vh;
        background-image: url('../../../public/Images/team.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        display: flex;
        justify-content: center;
        align-items: center;
    }


    .match__highlights__list {
        display: flex;
        flex-wrap: wrap;
        padding: 4rem 10rem;

        @include respond(phone) {
            flex-direction: column;
            padding: 2rem;
        }

    }

    .match__highlight {
        flex: 25%;
        margin-left: 1.25rem;
        margin-bottom: 1.25rem;
        display: flex;
        flex-direction: column;

        @include respond(phone) {
            flex: 1;
            margin-left: 0;
        }

        .match__video {
            flex: 1;
            img {
                height: 200px;
                width: 100%;
                object-fit: cover;
                object-position: center;

            }
        }

        .match__details {
            padding: .75rem;
            background-color: darkgray;
        }
    }
</style>