<template>
    <footer class="footer">
        <div class="footer__top">

            <div class="address">
                <div class="address__content">
                    <div class="logo">
                        <img class="logo__img" src="../../../public/Images/simba.png" alt="">
                    </div>
                    <div class="address__info">
                        <p>Msimbazi, Kariakoo</p>
                        <p>P.O.Box 0007</p>
                        <p>Dar es salaam</p>
                        <p>Tanzania</p>
                        <p>Email: info@ssc.co.tz</p>
                        <p>Tel: +255 22 22 222 22</p>
                    </div>

                    <div class="social__links">
                        <span class="icons icon-facebook22"></span>
                        <span class="icons icon-instagram22"></span>
                        <span class="icons icon-twitter22"></span>
                        <span class="icons icon-youtube22"></span>
                    </div>

                </div>
            </div>

            <div class="navigation">

                <h3 class="navigation__header">Quick Navigation</h3>
                <ul class="footer__nav">
                    <li class="footer__nav__item">
                        <router-link to="/news" class="footer__nav__link">News</router-link>
                    </li>

                    <li class="footer__nav__item">
                        <router-link to="/fixtures" class="footer__nav__link">Fixtures</router-link>
                    </li>

                    <li class="footer__nav__item">
                        <router-link to="/players/first-team" class="footer__nav__link">Players</router-link>
                    </li>

                    <li class="footer__nav__item">
                        <router-link to="/events" class="footer__nav__link">Events</router-link>
                    </li>

                    <li class="footer__nav__item">
                        <router-link to="/simbatv" class="footer__nav__link">Simba TV</router-link>
                    </li>
                    <li class="footer__nav__item">
                        <router-link to="/club" class="footer__nav__link">Simba TV</router-link>
                    </li>
                    <li class="footer__nav__item">
                        <router-link to="/stadium" class="footer__nav__link">Stadium</router-link>
                    </li>
                </ul>
            </div>

            <div class="blog">

                <div class="blog__post">
                    <div class="post__avatar"></div>
                    <div class="post__body">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div class="blog__post">
                    <div class="post__avatar"></div>

                    <div class="post__body">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

            </div>

            <!-- <div class="contact-us">
                <div class="form">
                    <div class="form-group">
                        <input type="text" class='form-control' name='full-name' placeholder="Your fullname">
                    </div>
                    <div class="form-group">
                        <input type="text" class='form-control' name='email' placeholder="Your email">
                    </div>
                    <div class="form-group">
                        <textarea name="message" id="" cols="20" rows="10" class='form-control' placeholder="Your message"></textarea>
                    </div>
                    <a href="" class="btn btn-danger btn-block">Send Message</router-link> 
                </div>
            </div> -->
        </div>

        <div class="footer__bottom">
            <h4 class="copyright"> copyright &#9400; 2019 </h4>
        </div>
    </footer>
</template>


<script>
    export default {
        name: 'Footer',
        props: {}
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/abstracts/_mixins.scss';
    @import '../../assets/styles/abstracts/_variables.scss';


    .footer {
        display: flex;
        flex-direction: column;
        background: #c60000;
    }

    .footer__top {
        padding: 4rem 10rem;
        display: flex;

        @include respond(phone) {
            padding: 2rem;
        }
    }

    .address {
        flex: 1;

        .address__content {
            display: flex;
            flex-direction: column;

            .logo {
                height: 100px;
                width: 100px;
                margin-bottom: 1.25rem;

                @include respond(phone) {
                    height: 50px;
                    width: 50px;
                }

                .logo__img {
                    width: 100px;
                    height: 100px;
                    object-fit: contain;
                    object-position: center;

                    @include respond(phone) {
                        height: 50px;
                        width: 50px;
                        object-fit: contain;
                        object-position: center;
                    }
                }
            }

            .address__info {
                flex: 1;

                p {
                    color: white;
                    font-size: 1rem;
                    margin: 0;
                    line-height: 1.7;
                    font-size: 1.2rem;
                }
            }

            .social__links {
                margin-top: 1.25rem;

                span+span {
                    margin-left: 1.25rem;
                }

                .icons {
                    font-size: 2rem;
                    color: white;
                    font-weight: normal;
                }
            }
        }
    }


    .navigation {
        flex: 1;
        border-left: 1px solid white;
        padding-left: 2rem;

        .navigation__header {
            color: white;
            margin-bottom: 1.25rem;
            font-weight: normal;
        }

        .footer__nav {
            list-style: none;

            .footer__nav__item {

                .footer__nav__link {
                    display: block;
                    color: white;
                    margin-bottom: 1.25rem;
                    text-decoration: none;
                    transition: all .5s ease-in;


                    &:focus,
                    &:hover {
                        // padding: 0 .75rem;
                        // border-bottom: 1px solid rgb(255, 255, 255);
                        // border-bot
                    }
                }
            }
        }
    }


.blog{
flex: 1;
border-left: 1px solid white;
        padding-left: 2rem;

    .blog__post{
        padding: 1.5rem 1rem;
        border: 1px solid black;
        margin-bottom: 1.75rem;
        display: flex;
        align-items: center;

        .post__avatar{
            border-radius: 50%;
            height: 70px;
            width: 70px;
            border: 1px solid black;
        }

        .post__body{
            flex: 1;
            margin-left: .75rem;
        }
    }
}
    .footer__bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .75rem;
        background-color: rgba(20, 1, 1, 0.075);

        h4 {
            margin-bottom: 0;
            margin: 0;
            text-transform: capitalize;
            font-size: 1.2rem;
            color: white;
        }

        @include respond(phone) {
            margin: 0;
            margin-bottom: 0;
            padding: .75rem;

            h4 {
                margin-bottom: 0;
                margin: 0;
                text-transform: capitalize;
                font-size: 1rem;
                color: white;
            }
        }
    }

    .navigation,
    .blog {

        @include respond(phone) {
            display: none;
        }
    }
</style>