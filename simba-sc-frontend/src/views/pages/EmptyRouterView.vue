<template>
    <div class="players">
        <Hero heading='The Team' />
    </div>
</template>


<script>
    import Hero from '@/components/Hero.vue';

    export default {
        name: 'Team',
        components: {
            Hero,
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
.players{
    height: 100vh;
}
</style>