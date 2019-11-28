<template>
    <div class="registration">

        <ValidationObserver ref="observer" v-slot="{ passes, invalid, validated,validate }">
            <form class="" @submit.prevent="handleRegister" @reset="resetForm">
                <div class="form-row">
                    <div class="col">
                        <ValidationProvider rules="required" name='firstName' v-slot="{ valid, errors }">

                            <div class="form-group">
                                <label for="first-name">First Name</label>
                                <input id='fname' placeholder="Your first name"
                                    :state="errors[0] ? false : (valid ? true : null)" type="text" name="firstName"
                                    v-model="user.firstName" class="form-control">
                                <span style="color:red">{{ errors[0] }}</span>
                            </div>

                        </ValidationProvider>
                    </div>

                    <div class="col">
                        <ValidationProvider rules='required' name='surname' v-slot="{ valid, errors }">

                            <div class="form-group">
                                <label for="surname">Surname</label>
                                <input id='sname' placeholder="Your surname"
                                    :state="errors[0] ? false : (valid ? true : null)" type="text" name="surname"
                                    v-model="user.surname" class="form-control">
                                <span style="color:red">{{ errors[0] }}</span>
                            </div>

                        </ValidationProvider>
                    </div>

                </div>

                <ValidationProvider rules="required" name='firstName' v-slot="{ valid, errors }">

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id='email' placeholder="Your email" :state="errors[0] ? false : (valid ? true : null)"
                            type="email" class='form-control' v-model="user.email" name="email">
                        <span style="color:red">{{ errors[0] }}</span>
                    </div>


                </ValidationProvider>

                <ValidationProvider rules='required|numeric' name='pNumber' v-slot="{ valid, errors }">
                    <div class="form-group">
                        <label for="phoneNumber">Phone number</label>
                        <input id='pNumber' v-model="user.phoneNumber" placeholder="Your phone number (255717xxxxxx )"
                            :state="errors[0] ? false : (valid ? true : null)" type="number" name="phoneNumber"
                            class="form-control">
                        <span style="color:red">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <div class="form-row">
                    <div class="col">

                        <ValidationProvider rules="required" name="Password" vid="password" v-slot="{ valid, errors }">

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input id='password' placeholder="Your password"
                                    :state="errors[0] ? false : (valid ? true : null)" type="password" name="password"
                                    class="form-control" v-model="user.password">
                                <span style="color:red">{{ errors[0] }}</span>
                            </div>

                        </ValidationProvider>

                    </div>
                    <div class="col">

                        <ValidationProvider rules="required|confirmed:password" name="Password confirmation"
                            v-slot="{ valid, errors }">
                            <div class="form-group">
                                <label for="password2">Confirm Password</label>
                                <input id='password2' placeholder="Confirm password"
                                    :state="errors[0] ? false : (valid ? true : null)" type="password" name="password2"
                                    v-model='confirmPassword' class="form-control">
                                <span style="color:red">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                    </div>
                </div>









                <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-block">Register</button>
                </div>
            </form>

        </ValidationObserver>

    </div>
</template>


<script>
    import User from '../../model/user.model';
    // import { mapState, mapActions } from 'vuex';

    export default {
        name: 'registration',
        computed: {

            loggedIn() {
                return this.$store.state.authentication.status.loggedIn;
            }
        },
        data() {
            return {
                user: new User('', '', '', '', ''),
                confirmPassword: "",
                submitted: false,
                successful: false,
                message: ''
            };
        },
        mounted() {

            if (this.successful) {
                this.$router.push('/profile');
            }
        },
        created() {
            if (this.successful) {
                this.$router.push('/profile');
            }
        },
        methods: {

            // ...mapActions('authentication',['register']),

            // async handleSubmit(e){
            //     this.submitted = true;
            //     let valid = await this.$validator.validate();
            //     if(valid){
            //         this.register(this.user)
            //     }
            // }

            async handleRegister() {
                this.message = '';
                this.submitted = true;
                console.log(this.user)
                try {
                    let valid = await this.$refs.observer.validate()

                    if (valid) {
                        let response = await this.$store.dispatch('register', this.user)
                        console.log(`The Response from the store \n${response}`)
                        this.message = response.message;

                        this.successful = true;
                    }
                } catch (error) {
                    // this.message = error.message;
                    this.successful = false;
                }

            },

            resetForm() {
                this.user = {
                    firstName: "",
                    surname: "",
                    email: "",
                    phoneNumber: "",
                    password: "",
                }
                this.confirmPassword = ""
                requestAnimationFrame(() => {
                    this.$refs.observer.reset();
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .registration {
        height: 100vh;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        justify-content: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>