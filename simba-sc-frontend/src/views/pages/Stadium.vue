<template>
    <div class="stadium__vue">
        <div class="stadium">

        </div>
        <div class="stadium__info">
            <div class="info__box">
                <h4 class="info__title">
                    tanzania national stadium
                </h4>

                <p class="info__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa temporibus, officia a error
                    nihil illo quia veritatis quam dicta unde minus labore repellat pariatur, architecto, nobis harum
                    nesciunt eligendi!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eveniet eaque fugit harum ad
                    tempora sit ipsa perferendis ducimus fugiat, itaque obcaecati! Ipsum veritatis facere dignissimos,
                    sunt quae et ullam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima soluta amet eligendi ex
                    possimus illum voluptates labore pariatur corporis. Vitae excepturi fuga a iusto dolore
                    reprehenderit esse corporis distinctio!
                </p>

                <h5 class="info__special">Capacity: 60,000</h5>
                <h5 class="info__special">Opened: 2007</h5>
            </div>

            <div class="info__img">
                <img src="../../../public/Images/stadium4.jpg" alt="">
            </div>
        </div>
        <PartnersList />
        <Footer />
    </div>
</template>


<script>
    import PartnersList from '@/components/Partners/PartnersList.vue';
    import Footer from '@/components/Footer/Footer.vue';
    export default {
        name: 'Stadium',
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


    .stadium__vue {
        height: 100vh;
    }

    .stadium {
        height: 100vh;
        background-image: url('../../../public/Images/stadiuml1.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .stadium__info {
        display: flex;

        @include respond(phone) {
            flex-direction: column;
        }

        .info__box {
            flex: 60%;
            padding: 2rem;

            .info__title {
                color: #c60000;
                text-transform: capitalize;
                font-size: 2.4rem;
            }

            .info__text {
                font-size: 1.2rem;
            }

            .info__special {
                font-size: 1.2rem;
                font-weight: 600;
            }
        }

        .info__img {
            width: 40%;

            @include respond(phone) {

                img {
                    height: 50vh;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }
    }
</style>