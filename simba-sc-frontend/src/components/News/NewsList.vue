<template>
    <section class="news__container">
        <h3 class="section__heading"> {{ title }}</h3>
        <div class="news__list">
            <NewsCard v-for='news in allNews' v-bind:key='news.id' :news='news' />
        </div>
    </section>
</template>



<script>
    // import NewsCard from './NewsCard.vue';
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import NewsCard from './NewsCard.vue';

    export default {
        name: 'NewsList',
        components: {
            NewsCard
        },
        props: {
            post: {},
            title: String,
        },
        data() {
            return {
                currentNews: []
            }
        },

        beforeCreate() {
            console.log('Before Component is created...');
            console.log(`News from  the store...\n${this.news}`)
        },

        created() {
            console.log('Component is created...');
            this.fetchNews();
        },

        computed: {
            ...mapGetters(['allNews']),
        },

        async mounted() {
            console.log(await this.news)
        },

        methods: {
            ...mapActions(['fetchNews']),
        },
    }
</script>

<style scoped lang="scss">

@import '../../assets/styles/abstracts/_mixins.scss';

    .news__container {
        background-color: darkgray;
        padding: 1.5rem 6rem;

        @include respond(phone){
            padding: 0;
        }
    }

    .section__heading {
        font-size: 2.4rem;
        font-weight: 500;

    }

    .news__list {
        display: flex;
        margin-top: 2rem;
        flex-wrap: wrap;
        // .news__item + .news__item{
        //     margin-left: 1.5rem;
        // }

        @include respond(phone){
            display: block;
        }
        .news__card{
            flex: 33.33%;
        }
    }
</style>