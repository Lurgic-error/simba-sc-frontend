<template>
    
    <div class="users">
        <h3>Users</h3>
        <ul v-for="user in users" :key="user.id">
            <li>{{ user }}</li>
        </ul>
    </div>
</template>



<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            isLoading: false,
        }
    },
    computed: {
        users(){
            return this.$store.getters.getUsers;
        }
        // ...mapGetters('Users', ['getUsers'])
    },
    created(){
        this.$store.dispatch('fetchUsers')
    },
    methods: {
        ...mapActions('Users', ['fetchUsers'])
    },
    async mounted() {
        // Make network request if the data is empty
        // if (this.getUsers.length === 0) {
            await this.getUsers.length
            // set loading screen
            this.isLoading = true;
            await this.fetchUsers();
            this.isLoading = false;
        // }
    }
}
</script>