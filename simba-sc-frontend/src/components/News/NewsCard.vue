<template>
    <div class=" news__card">
        <!-- <img :src="news.image" alt="" class="news__card__img"> -->
        <div class="news__card__caption">
            <h3 class="news__title">{{ news.title }}</h3>
            <p class="news__date">{{ news.date }}</p>
            <p class="news__text">
                {{ news.body }}
            </p>
            <a href="" class="btn btn__cta">Read More</a>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'newsCard',
        props: {
            news: {}
        },
    }
</script>


<style lang="scss" scoped>

@import '../../assets/styles/abstracts/_mixins.scss';

.news__card{
    flex: 33.333%;
    display: flex;
    flex-direction: column;
    transition: .5s all ease-in;
}
.news__card__img{
    flex: 1;

@include respond(phone){
    height: 200px;
    width: 70vw;
}
    img{
        max-height: 200px;
        object-fit: cover;
        object-position: center;
        width: 100%;
    }
}

.news__card__caption{
    border: 1px solid red;
    @include respond(phone){
        padding: .75rem;
        margin-bottom: 1.25rem;
        background-color: #fff;
    }
}
</style>