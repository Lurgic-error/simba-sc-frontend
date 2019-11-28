<template>
    <div class="slider__list">
        <ul class="list" :style='listLength'>
            <li class="slide" v-for="(card, index) in cards" :key="index" :style="listPosition">
                <CardSlider :item='card' :active='index == currentIndex' />
            </li>
        </ul>
    </div>
</template>


<script>
    import CardSlider from './CardSlider';

    export default {
        components: {
            CardSlider
        },
        data: () => {
            return {
                touch: {
                    startX: 0,
                    endX: 0
                }
            }
        },
        computed: {
            cards() {
                return [] // return a list of cards or objects that can be placed in the slider.
            },
            currentIndex() {
                return 0 // return the current index of a card or object in the array
            },
            listLength() {
                return {
                    width: `${this.cards.length * 100}%`
                }
            },
            listPosition() {
                return {
                    transform: `translateX(-${this.currentIndex* 100}%)`
                }
            },
        },
        methods: {
            touchStart(event) {
                this.touch.startX = event.touches[0].clientX;
                this.touch.endX = 0;
            },
            touchMove(event) {
                this.touch.endX = event.touches[0].clientX;
            },
            touchEnd() {
                if (!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20) {
                    return;
                }
                if (this.touch.endX < this.touch.startX) {
                    this.$store.commit('nextIndex');
                } else {
                    this.$store.commit('prevIndex');
                }
            }
        },
        mounted() {
            this.$el.addEventListener('touchstart', event => this.touchStart(event));
            this.$el.addEventListener('touchmove', event => this.touchMove(event));
            this.$el.addEventListener('touchend', () => this.touchEnd());
        }
    }
</script>


<style lang="scss" scoped>
    .slider__list {
        margin: 0 30px;

        ul {
            display: flex;
            list-style: none;
        }

        li {
            padding: 10px;
            transition: all .5s ease;
        }
    }
</style>

