<template>

    <div class="events__container__list">
        <div class="events__list">

            <div class="event__item">
                <div class="event__date">
                    <h5 class="date">24</h5>
                    <p class="day">Sunday</p>
                </div>
                <div class="event__desc">
                    <h4 class="event__title">Simba Day</h4>
                    <p class="event__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur culpa repellat qui, voluptate harum recusandae
                    </p>

                    <button class="btn btn__cta">Book Now</button>
                </div>
            </div>

            <div class="event__item">
                <div class="event__date">
                    <h5 class="date">24</h5>
                    <p class="day">Sunday</p>
                </div>
                <div class="event__desc">
                    <h4 class="event__title">Simba Day</h4>
                    <p class="event__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur culpa repellat qui, voluptate harum recusandae
                    </p>

                    <button class="btn btn__cta">Book Now</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventsList'
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/abstracts/_mixins.scss';


    .events__list {
        padding: 4rem;
        display: flex;
        flex-direction: column;

        // div + div {
        //     margin-top: 1.25rem;
        // }

        &:last-child {
            margin-bottom: 0;
        }

        @include respond(phone) {
            padding: 4rem 2rem;
        }
    }

    .event__item {
        display: flex;
        align-items: center;
        transition: .5s all linear;
        margin-bottom: 1.5rem;

        // &:hover {
        //     // background-color: rgba(128, 128, 128, 0.26);
        // }
        @include respond(phone) {
            // flex-direction: column;
            margin-bottom: 1.75rem;
        }

    }

    .event__date {
        background-color: #c60000;
        // border-radius: 50%;
        display: flex;
        flex-direction: column;
        line-height: .2;
        padding: .5rem .75rem;
        margin-right: 1.75rem;

        @include respond(phone) {
            padding: .25rem .5rem;
            align-self: flex-start;
        }

        .date {
            flex: 1;
            font-size: 4rem;
            align-self: center;
            color: white;
            margin-bottom: 0;

            @include respond(phone) {
                font-size: 1.2rem;
                margin-bottom: .25rem;


            }
        }

        .day {
            margin-top: 0;
            display: block;
            align-self: center;
            font-size: 2rem;
            color: white;
            text-transform: uppercase;

            @include respond(phone) {
                font-size: .8rem;
                flex: 0;
                margin-bottom: .5rem;
            }
        }
    }

    .event__desc {
        flex: 1;

        .event__title {
            font-size: 1.6rem;
        }

        .event__text {
            line-height: 1.3;
            margin-bottom: 1.25rem;
        }
    }

    .btn__cta {
        padding: .25rem .75rem;
        border: 1px solid #C60000;
        border-radius: 0;
        color: #C60000;
        transition: .5s all ease-in;

        &:hover {
            background-color: #c60000;
            color: white;
        }
    }
</style>