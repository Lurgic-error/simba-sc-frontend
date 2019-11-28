<template>

<div class="club">

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

    <div id="organization" class="tab-content org-structure">

        <div class="profile-card">
            <div class="profile-img"></div>
            <div class="profile-info">
                <p class="profile-title">Chairperson</p>
                <h4 class="profile-name">John John John</h4>
            </div>
        </div>

        <div class="profile-card">
            <div class="profile-img"></div>
            <div class="profile-info">
                <p class="profile-title">Chairperson</p>
                <h4 class="profile-name">John John John</h4>
            </div>
        </div>
        <div class="divider"></div>
        <div class="profile-card">
            <div class="profile-img"></div>
            <div class="profile-info">
                <p class="profile-title">Chairperson</p>
                <h4 class="profile-name">John John John</h4>
            </div>
        </div>


        <div class="profile-card">
            <div class="profile-img"></div>
            <div class="profile-info">
                <p class="profile-title">Chairperson</p>
                <h4 class="profile-name">John John John</h4>
            </div>
        </div>

        <div class="divider"></div>
        <div class="profile-card">
            <div class="profile-img"></div>
            <div class="profile-info">
                <p class="profile-title">Chairperson</p>
                <h4 class="profile-name">John John John</h4>
            </div>
        </div>


    </div>

    <div id="history" class="tab-content club-history">

        <h3 class="history-title">Our History</h3>
        <button class="accordion">Section 1</button>
        <div class="panel">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores eveniet reprehenderit,
                distinctio laudantium iure, repudiandae possimus ea expedita ipsum veniam veritatis? Laudantium harum,
                doloremque reiciendis ullam dolorem ab temporibus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime rerum recusandae laboriosam
                labore possimus? Quos quod fugiat magni, officiis ullam odit dolores accusamus enim quis, libero quam.
                Aspernatur, culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi velit amet dolorem rem porro
                itaque natus minima eius, repellendus corporis quae tenetur quisquam nemo dignissimos tempore cumque in
                similique.
            </p>
        </div>

        <button class="accordion">Section 2</button>
        <div class="panel">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores eveniet reprehenderit,
                distinctio laudantium iure, repudiandae possimus ea expedita ipsum veniam veritatis? Laudantium harum,
                doloremque reiciendis ullam dolorem ab temporibus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime rerum recusandae laboriosam
                labore possimus? Quos quod fugiat magni, officiis ullam odit dolores accusamus enim quis, libero quam.
                Aspernatur, culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi velit amet dolorem rem porro
                itaque natus minima eius, repellendus corporis quae tenetur quisquam nemo dignissimos tempore cumque in
                similique.
            </p>
        </div>

        <button class="accordion">Section 3</button>
        <div class="panel">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores eveniet reprehenderit,
                distinctio laudantium iure, repudiandae possimus ea expedita ipsum veniam veritatis? Laudantium harum,
                doloremque reiciendis ullam dolorem ab temporibus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime rerum recusandae laboriosam
                labore possimus? Quos quod fugiat magni, officiis ullam odit dolores accusamus enim quis, libero quam.
                Aspernatur, culpa?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi velit amet dolorem rem porro
                itaque natus minima eius, repellendus corporis quae tenetur quisquam nemo dignissimos tempore cumque in
                similique.
            </p>
        </div>
    </div>

    <div id="archivements" class="tab-content club-archivements">
        <h3 class="archivement-title">Our Archievements</h3>
        <div class="timeline">
            <div class="container left">
                <div class="content">
                    <h2>Tanzanian Premier League: 20</h2>
                    <p>1965, 1966 (both as Sunderland), 1973, 1976, 1977, 1978, 1979, 1980, 1984, 1990, 1994, 1995,
                        2001, 2003, 2004, 2007, 2009–10, 2011–12, 2017–18, 2018–19</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Tanzanian Cup: 3</h2>
                    <p>1984, 1995, 2000</p>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>Tanzanian Tusker Cup: 5</h2>
                    <p>2001, 2002, 2003, 2005 (in Kenya)</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>CAF Cup: 0</h2>
                    <p>Finalist: 1993</p>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>CECAFA Clubs Cup: 6'</h2>
                    <p>1974, 1991, 1992, 1995, 1996, 2002</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>Kombe la Shirikisho la Azam (Azam Sports Federation Cup – ASFC): 1</h2>
                    <p>2017.</p>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>Kombe La Mapinduzi: 3</h2>
                    <p>2011,2015</p>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h2>2016</h2>
                    <p>Lorem ipsum..</p>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h2>SportPesa Super Cup: 2</h2>
                    <p>2017, 2018</p>
                </div>
            </div>

        </div>
    </div>



</div>
    
</template>


<script>
export default {
    name: 'Club',
    components:{},
    data: () =>{
        return {}
    },
    computed:{},
    mounted:{},
    methods:{},

}
</script>


<style lang="scss" scoped>

</style>