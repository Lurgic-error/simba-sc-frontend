<template>
    <header class="header">
        <div class="header__top">
            <div class="social__links">
                <span class="icons icon-facebook22"></span>
                <span class="icons icon-instagram22"></span>
                <span class="icons icon-twitter22"></span>
                <span class="icons icon-youtube22"></span>
            </div>
            <div class="auth">
                <a href="" class="btn btn__cta--sm">Login</a>
                <a href="" class="btn btn__cta--sm">Register</a>
            </div>
        </div>

        <div class="header__bottom">
            <nav class="nav">

                <!-- Nav Brand -->
                <div class="nav__brand">
                    <router-link class="brand__name" to="/">Simba SC</router-link>
                </div>

                <!-- Menu Icon -->
                <div class="nav__menu__toggle">
                    <span class="icon icon-menu-1" @click="toggleOpenMenu"></span>
                </div>

                <!-- Navbar Navigation -->
                <ul id='menu' class="navbar">
                    <li class="navbar__item">
                        <router-link class="navbar__link" to="/news">News</router-link>
                    </li>
                    <li class="navbar__item">
                        <router-link class="navbar__link" to="/fixtures">fixtures</router-link>
                    </li>
                    <li class="navbar__item">
                        <router-link class="navbar__link" to="/players">players</router-link>
                    </li>
                    <li class="navbar__item">
                        <router-link class="navbar__link" to="/events">events</router-link>
                    </li>
                    <li class="navbar__item">
                        <router-link class="navbar__link" to="/simbatv">simbatv</router-link>
                    </li>
                    <li class="navbar__item">
                        <router-link class="navbar__link" to="/club">club</router-link>
                    </li>
                    <li class="navbar__item">
                        <router-link class="navbar__link" to="/stadium">stadium</router-link>
                    </li>
                </ul>

            </nav>

        </div>
    </header>
</template>


<script>
    export default {
        name: "Header",
        props: {

        },

        data() {
            return {
                toggleMenu: false,
            }
        },
        methods: {
            toggleOpenMenu: function (event) {
                /**
                 * on click show the menu
                 * remove the menu icon and replace it with the close icon 
                 * 
                 */

                let classes = event.target.classList
                classes.toggle('icon-close4')
                let nav = document.getElementById('menu');
                nav.classList.toggle('show');
                console.log(nav);
            },
            toggleCloseMenu: function (event) {
                /**
                 * on click close the menu
                 * replace the close icon with menu icon
                 */
                event.target.classList.toggle('show');
            }
        }
    };
</script>



<style scoped lang="scss">
    @import '../assets/styles/abstracts/_mixins.scss';
    @import '../assets/styles/abstracts/_variables.scss';


    .header {

        .header__top {
            display: flex;
            padding: .75rem;
            background-color: $color-primary-light;

            .social__links {
                margin-right: 1.25rem;

                .icons {
                    margin-right: .75rem;
                    font-size: $default-font-size-sm + 1;
                    color: white;
                }
            }

            .auth {
                a {
                    margin-right: 1rem;
                }
            }

            @include respond(phone) {
                display: none;
            }
        }


        .header__bottom {
            background-color: $color-primary;

            .nav {

                display: flex;
                align-items: center;
                padding: .75rem 1.25rem;

                @include respond(phone) {
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    // position: relative;
                }

                .nav__brand {
                    order: 1;
                    flex: 1 0 50%;

                    .brand__name {
                        color: white;
                        text-decoration: none;
                        font-size: $default-font-size-md;
                    }
                }

                .nav__menu__toggle {
                    // display: none;
                    order: 2;
                    flex: 1 0 50%;
                    align-self: flex-end;
                    display: flex;
                    justify-content: flex-end;

                    .icon {
                        margin-right: .75rem;
                        font-size: $default-font-size-sm + 2;
                        color: white;
                    }

                    @include respond(phone) {
                        // display: block;
                        // position: absolute;
                        // top: 20%;
                        // right: 0;
                        order: 2;
                        flex: 1 0 50%;
                        align-self: flex-end;
                        display: flex;
                        justify-content: flex-end;
                    }
                }


                .navbar {

                    margin-left: 2rem;
                    display: flex;

                    @include respond(phone) {
                        // display: none;
                        // margin-top: 1.25rem;
                        // order: 3;
                        // flex-direction: column;
                        // align-self: center;                      
                        // justify-content: center;
                        // align-items: center;
                        // width: 100%;
                        // display: flex;
                    }

                    .navbar__item {
                        margin-right: 1.25rem;
                        list-style: none;

                        .navbar__link {
                            color: white;
                            text-decoration: none;
                            font-size: $default-font-size-md - .25;
                            text-transform: uppercase;
                        }
                    }


                }
            }
        }
    }


    .show {
        // display: block;
        display: flex;
        margin-top: 1.25rem;
        order: 3;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        align-items: center;
        width: 100%;

    }
</style>
