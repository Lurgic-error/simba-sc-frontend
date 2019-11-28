<template>
    <div class="events">
        <Hero heading='Simba Events' />
        <EventsGrid />
        <Parallax />
        <EventsList />
        <NewsList />
        <PartnersList />
        <Footer />
    </div>
</template>


<script>
    import Hero from '@/components/Hero.vue';
    import EventsGrid from '@/components/Events/EventsGrid.vue';
    import EventsList from '@/components/Events/EventsList.vue';
    import Parallax from '@/components/Parallax/Parallax.vue';
    import NewsList from '@/components/News/NewsList.vue';

    import PartnersList from '@/components/Partners/PartnersList.vue';
    import Footer from '@/components/Footer/Footer.vue';


    export default {
        name: 'Events',
        components: {
            Hero,
            EventsGrid,
            NewsList,
            EventsList,
            Parallax,
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
    .events {
        height: 100vh;
    }
</style>