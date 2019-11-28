<template>

    <!-- Header -->
    <header>
        <div class="header__top">
            <div class="socials">
                <span class="social__icon icon-facebook22"></span>
                <span class="social__icon icon-instagram22"></span>
                <span class="social__icon icon-twitter22"></span>
                <span class="social__icon icon-youtube22"></span>
            </div>
            <div class="language__selector">
                <select name="language" class="select__language" id="">
                    <option value="English">English</option>
                    <option value="Kiswahil">Kiswahili</option>
                </select>
            </div>
        </div>
        <!-- fixed-top -->
        <nav id="navbar" class="nav">

            <div class="nav__brand">
                <router-link class="brand" to="/">
                    <!-- SIMBA SC -->
                    <img src="../../assets/images/logos/simba_logo.png" alt="">
                </router-link>
            </div>

            <div class="navbar__toggler">
                <span class="icon icon-menu" @click="toggleMenu"></span>
            </div>

            <ul id='menu' class="navbar__nav">
                <li class="navbar__item active">
                    <router-link class="navbar__link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="navbar__item">
                    <router-link class="navbar__link" to="/news">News</router-link>
                </li>
                <li class="navbar__item">
                    <router-link class="navbar__link" to="/fixtures">Fixtures</router-link>
                </li>
                <li class="navbar__item">
                    <router-link class="navbar__link" to="/players/first-team">The Team</router-link>
                </li>
                <li class="navbar__item">
                    <router-link class="navbar__link" to="/events">Events</router-link>
                </li>
                <li class="navbar__item">
                    <router-link class="navbar__link" to="/simbatv">Simba TV</router-link>
                </li>
                <li class="navbar__item">
                    <router-link class="navbar__link" to="/club">Club</router-link>
                </li>
                <li class="navbar__item">
                    <router-link class="navbar__link" to="/stadium">Stadium</router-link>
                </li>
                <!-- <li class="navbar__item mb-3">
                    <router-link to="/login" class="navbar__link btn btn__header__cta">Login
                    </router-link>
                </li>
                <li class="navbar__item mb-3">
                    <router-link to="/signup" class="navbar__link btn  btn__header__cta--red">Register
                    </router-link>
                </li> -->
            </ul>

        </nav>
    </header>
</template>



<script>
    export default {
        name: "Header",
        props: {

        },

        data() {
            return {
                isMenuOpen: true,
            }
        },
        methods: {

            toggleMenu(){
                const navbar = document.getElementById('menu');
                if (this.isMenuOpen){
                    navbar.classList.toggle('active');
                }else{
                    navbar.classList.remove('active')
                }
            },
        },
        
    };
</script>


<style lang="scss" scoped>
    @import '../../assets/styles/abstracts/_mixins.scss';
    @import '../../assets/styles/abstracts/_variables.scss';

    header {

        // position: relative;
        .header__top {
            display: flex;
            padding: .25rem 2rem;
            align-items: center;
            background-color: #c60000;
            border-bottom: 2px solid white;

            @include respond(phone) {
                display: none;
            }

        }
    }



    .socials {
        margin-left: auto;
        display: flex;

        span+span {
            margin-left: 1.25rem;
        }

        .social__icon {
            font-weight: 300;
            font-size: 1.2rem;
            color: white;
        }
    }

    .language__selector {
        margin-left: 1.25rem;
    }

    select.select__language {
        appearance: button;
        background-color: #fff;
        border: thin solid white;
        background-repeat: no-repeat;
        line-height: 1.5em;
        border-radius: 4px;
        // padding: .25rem;
        margin: 0;
        display: inline-block;
    }



    nav.nav {

        display: flex;
        align-items: center;
        padding: 0 2rem;

        background-color: #c60000;
        position: fixed;
        z-index: 1000;
        width: 100%;
        top: 0;
        @include respond(phone) {
            display: block;
            position: relative;
            padding: 0 .75rem;

        }
    }

    .nav__brand {

        @include respond(phone) {}

        .brand {
            color: white;
            font-size: 2rem;
            text-decoration: none;
            text-transform: uppercase;

            img {
                // position: absolute;
                // top: 0;
                // left: 0;
                height: 50px;
                width: 50px;
                object-position: center;
                object-fit: cover;
            }
        }
    }

    .navbar__toggler {
        display: none;

        .icon {
            font-size: 2.8rem;
            color: white;
        }

        @include respond(phone) {
            background: transparent;
            border: none;
            padding: 0;
            margin: 0;
            display: block;
            position: absolute;
            top: 05px;
            right: 28px;
        }
    }

    .navbar__nav {
        margin-bottom: 0;
        margin-left: auto;
        display: flex;
        list-style: none;

        li+li {
            margin-left: .5rem;

            @include respond(phone) {
                margin-left: 0;
                margin: 0;
                padding: 0;
            }
        }

        @include respond(phone) {
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 1.25rem;
        }
    }

    .navbar__nav.active {
        display: flex;
    }

    .navbar__item {
        margin-top: 0;

        &:not(last-child) {
            border-left: 1px solid white;

            @include respond(phone) {
                border: none;
            }
        }

        @include respond(phone) {
            // text-align: left;
        }

        .navbar__link {
            display: block;
            padding: .5rem .75rem;
            color: white;
            font-weight: 600;
            text-transform: uppercase;
            text-decoration: none;

            &:hover,
            &:focus {
                border: 2px solid white;
            }
        }
    }


    .navbar__link--selected {
        border-bottom: 2px solid white;
        border-bottom-color: white;
    }

    .btn {
        padding: .5rem .75rem;
    }

    .btn__header__cta:hover {
        color: #c60000 !important;
        // border:none;
        background-color: white;
    }

    .btn__header__cta {
        // border-radius: 50px;
        border: 1px solid white;
        color: white !important;
        font-weight: 700;
    }

    .btn__header__cta--red {
        // border-radius: 50px;
        background-color: white;
        color: #c60000 !important;
        font-weight: 700;

        &:hover {
            color: white !important;
            border: 1px solid white;
            background-color: transparent;
        }
    }
</style>