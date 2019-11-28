<template>
    <div class="news__grid">
        <div class="grid__item main__news">
            <img src="../../../public/Images/stadium3.jpg" alt="" class="main__news__img">
            <div class="news__article">
                <h3 class="article__title">New Title</h3>
                <p class="article__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque hic modi magni facere a porro,
                    eveniet minima? Facilis quod fugiat similique doloribus aperiam esse magni velit! Doloribus,
                    expedita porro!
                </p>
            </div>
        </div>
        <div class="grid__item related__news--side">
            <!-- news aside container -->

            <ul class="news__list">
                <li class="news__item">
                    <img src="../../../public/Images/stadium2.jpg" alt="" class="news__img">
                    <p class="news__caption">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </li>
                <li class="news__item">
                    <img src="../../../public/Images/stadium2.jpg" alt="" class="news__img">
                    <p class="news__caption">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </li>
                <li class="news__item">
                    <img src="../../../public/Images/stadium2.jpg" alt="" class="news__img">
                    <p class="news__caption">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </li>
                <li class="news__item">
                    <img src="../../../public/Images/stadium2.jpg" alt="" class="news__img">
                    <p class="news__caption">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </li>
            </ul>
        </div>
        <div class="grid__item ads">
            <img src="../../../public/Images/aishi.jpg" alt="">
        </div>
        <div class="grid__item related__bottom-1 news__bottom">
            <img src="../../../public/Images/stadium2.jpg" alt="" class="news__bottom__img">
            <div class="news__article">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam quas deserunt, vero animi
                ducimus commodi. Ab, et officia soluta similique accusamus at ut, non maiores, necessitatibus quod neque
                laudantium!
            </div>
        </div>
        <div class="grid__item related__bottom-2 news__bottom">
            <img src="../../../public/Images/stadium2.jpg" alt="" class="news__bottom__img">
            <div class="news__article">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam quas deserunt, vero animi
                ducimus commodi. Ab, et officia soluta similique accusamus at ut, non maiores, necessitatibus quod neque
                laudantium!
            </div>
        </div>
        <div class="grid__item related__bottom-3 news__bottom">
            <img src="../../../public/Images/stadium2.jpg" alt="" class="news__bottom__img">
            <div class="news__article">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam quas deserunt, vero animi
                ducimus commodi. Ab, et officia soluta similique accusamus at ut, non maiores, necessitatibus quod neque
                laudantium!
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventsGrid',
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/abstracts/_mixins.scss';

    .news__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 1rem;
        padding: 2.4rem;

        @include respond(phone) {
            display: block;
            justify-content: center;
            padding: 0;

        }

    }


    .grid__item {
        padding: 3rem;

        @include respond(phone) {
            //  display: block;
            margin-bottom: 1.25rem;
        }
    }

.main__news {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0;
        overflow: hidden;

        .main__news__img {
            flex: 1;
            order: -1;
            width: 100%;
            object-fit: cover;
            object-position: center;
            // margin-bottom: 1.75rem;
        }

        .news__article {
            position: absolute;
            color: white;
            bottom: 0%;
            left: 0;
            padding: .75rem;
            line-height: 1.5;
            transition: .5s all ease-in;


            .article__title {
                color: white;
            }

            .article__text {
                margin-bottom: 0;
                font-size: 1.2rem;

            }
        }
    }

    .main__news>.news__article:hover,
    :focus {
        bottom: 10%;
        padding: .75rem;
    }
    .main__news {
        grid-column: 1/4;
        grid-row: 1/4;
        display: flex;
        flex-direction: column;

        @include respond(phone) {
            position: static;
            margin-top: 1.25rem;
            padding: 2rem;

            img{
                flex:1;
            }

            .news__article {
                position: static;
            background-color: rgba(169, 169, 169, 0.157);
            padding: .75rem 1rem;

            .article__title {
                color:black;
                font-size: 2rem;
            }

            .article__text {
                color:black;
                margin-bottom: 0;
                font-size: 1rem;

            }
        }
        }
    }

    .related__news--side {
        padding: 0;
        grid-column: 4/5;
        grid-row: 1/3;
        display: flex;
        flex-direction: column;

        @include respond(phone) {

            padding: 0 2rem;
        }
    }

    .ads {
        grid-column: 4/5;
        grid-row: 3/5;
        padding: 0;
        display: flex;
        flex-direction: column;

        img {
            flex: 1;
            object-fit: cover;
            object-position: center;
        }
    }

    .news__bottom {
        padding: 0;
        display: flex;
        flex-direction: column;
        background: none;

        @include respond(phone) {
            background: transparent;
            padding: 0 2rem;
        }

        img {
            flex: 1;
            max-height: 170px;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }

        .news__article {
            background-color: rgba(169, 169, 169, 0.157);
            padding: .75rem 1rem;
        }

        // .news__bottom__img {
        //     flex: 1;
        //     object-fit: cover;
        //     object-position: center;
        //     margin-bottom: 0;
        // }
    }


    .related__bottom-1 {
        grid-column: 1/2;
        grid-row: 4;
        padding: 0;
        display: flex;
        flex-direction: column;

        @include respond(phone) {
            background: transparent;
            padding: 0 2rem;
        }

        img {
            max-height: 170px;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .related__bottom-2 {
        grid-column: 2/3;
        grid-row: 4;
    }

    .related__bottom-3 {
        grid-column: 3/4;
        grid-row: 4;
    }



    .news__list {

        flex: 1;
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-bottom: 0;
    }

    .news__item {
        flex: 1;
        display: flex;
        align-items: center;
        margin-bottom: 1.25rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    img.news__img {
        height: 70px;
        width: 100px;
        object-fit: cover;
        object-position: center;
        border-radius: 4px;
        margin-right: .5rem;
    }

    .news__caption {
        line-height: 1.2;

    }

    .date {
        font-size: 2.5rem;
        background-color: transparent;
        padding: .75rem;
        margin-right: 1rem;
        border: 1px solid red;
    }

    .desc {
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
    }

    
</style>