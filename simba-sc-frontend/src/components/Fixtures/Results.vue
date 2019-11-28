<template>
    <div class="results">
        <div class="result__item">
            <div class="game">
                <h4 class="game__status">Last Game</h4>

                <div class="game__results">
                    <p>Biashara United 0 - 2 Simba S.C</p>
                </div>

                <div class="game__date">
                    <span class="date">29 Sept 2019 16:00</span> |
                    <span class="game__stadium">Karume Stadium</span>
                </div>
            </div>
        </div>
        <div class="result__item">
            <div class="game">
                <h4 class="game__status">Next Game</h4>

                <div class="game__results">
                    <p>Biashara United vs Simba S.C</p>
                </div>

                <div class="game__date">
                    <span class="date">29 Sept 2019 16:00</span> |
                    <span class="game__stadium">Karume Stadium</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Results',
        props: {}
    }
</script>


<style lang="scss" scoped>
    @import '../../assets/styles/abstracts/_mixins.scss';

    .results {

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: darkgray;

        padding: 4rem 10rem;
        @include respond(phone) {
            padding: 2rem;
            flex-direction: column;
        }

    }

    .result__item {
        flex: 1;
        margin: 0 1.25rem;

        @include respond(phone) {
            margin-bottom: .75rem;
        }
    }


    .game{

        .game__status{
            margin-bottom: 0;
font-size: 3rem;
            @include respond(phone){
                    font-size: 2rem;
                }
        }

        .game__results{
            margin-bottom: 0;

            p{
                font-size: 1.8rem;
                margin-bottom: 0;
                @include respond(phone){
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 0;
                    word-spacing: 1px
                }
            }
        }

        .game__date{
            margin-top: 0;

             span{

                 font-size:1.2rem;
                 @include respond(phone){
                 font-size: 1rem;
             }
             }
        }
    }
</style>