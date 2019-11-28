<template>
    <section class="partners">
        <h3 class="section__header">Our Partners</h3>

        <div class="partners__list">
            <div class="partner__item">
                <img class="partner__logo" src="../../../public/Images/caf.jpg" alt="">
            </div>
            <div class="partner__item">
                <img class="partner__logo" src="../../../public/Images/fifa.png" alt="">
            </div>
            <div class="partner__item">
                <img class="partner__logo" src="../../../public/Images/tff.jpg" alt="">
            </div>
            <div class="w-100"></div>
            <div class="partner__item">
                <img class="partner__logo" src="../../../public/Images/sportpesa.png" alt="">
            </div>
            <div class="w-100"></div>
            <div class="partner__item">
                <img class="partner__logo" src="../../../public/Images/vodacom.jpg" alt="">
            </div>
            <div class="partner__item">
                <img class="partner__logo" src="../../../public/Images/mocola.jpg" alt="">
            </div>
        </div>
    </section>
</template>



<script>
    export default {
        name: 'PartnersList',
        props: {}
    }
</script>

<style scoped lang="scss">

    @import '../../assets/styles/abstracts/_mixins.scss';

.partners{
    padding: 4rem 10rem;
    background-color: rgba(253, 4, 4, 0.082);
    @include respond(phone){
        padding: 0;
    }
}

.section__header{
    text-align: center;
    margin-bottom: 2.75rem;
    font-size: 3rem;

    @include respond(phone){
        margin-top: 2rem;
        font-size: 2rem;
    }
}

.partners__list{
    display: flex;
    
    @include respond(phone){
        flex-direction: column;
    justify-content: center;
    align-items: center;
    }

    .partner__item{
        margin-right: 1.25rem;

        @include respond(phone){
            margin-bottom: 1.25rem;
        }
    }
}
    .partner__logo {
        max-height: 100px;
        max-width: 100px;
        object-fit: cover;
        object-position: center;
    }
</style>