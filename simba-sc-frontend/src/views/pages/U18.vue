<template>
    <div class="players">
        <Hero heading='U18' />


        <PartnersList />
        <Footer />
    </div>

</template>


<script>
    import PartnersList from '@/components/Partners/PartnersList.vue';
    import Footer from '@/components/Footer/Footer.vue';
    import Hero from '@/components/Hero.vue';

    export default {
        name: 'U18',
        components: {
            Hero,
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
    .players {
        height: 100vh;
    }
</style>