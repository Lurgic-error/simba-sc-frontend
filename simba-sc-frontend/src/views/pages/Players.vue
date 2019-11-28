<template>
    <div class="players">
        <ul class="nav nav-pills p-2">
            <!-- <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/players" ><a>The Team</a></router-link>
            </li> -->
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/players/first-team" exact><a>First Team</a></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/players/U18"><a>U18</a></router-link>
            </li>
        </ul>

        <router-view></router-view>
        <!-- <Users /> -->
    </div>



</template>


<script>
    // import Hero from '@/components/Hero.vue';
    // import Users from '@/components/UserList.vue';

    export default {
        name: 'Players',
        components: {
            // Hero,
            // Users
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
    .players {
        height: 50vh;
        // margin-top: 4rem;
        // padding: 0!important;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem;
    }


   .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
        background-color: #c60000;
        color:  rgb(32, 31, 31);
    }

    .nav-pills .nav-link.active, .nav-pills .show>.nav-link>a,
    a:not([href]):not([tabindex]),
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link>a,
    a:not([href]):not([tabindex]):hover
     {
        color: rgb(32, 31, 31);
        
    }

    //     .nav-pills .nav-link.active, .nav-pills .show>.nav-link>a,
    // a:not([href]):not([tabindex]){
    //     color: white !important;
    // }
</style>