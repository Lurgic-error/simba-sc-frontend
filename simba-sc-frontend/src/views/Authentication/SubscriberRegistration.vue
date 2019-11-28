<template>
    <div class="registration">

        <ValidationObserver ref="observer" v-slot="{ passes, invalid, validated,validate }">
            <form class="" @submit.prevent="handleRegister" @reset="resetForm">

                <ValidationProvider rules='required|numeric' name='pNumber' v-slot="{ valid, errors }">
                    <div class="form-group">
                        <label for="phoneNumber">Phone number</label>
                        <input v-model="user.mobile" placeholder="Your phone number (255717xxxxxx )"
                            :state="errors[0] ? false : (valid ? true : null)" type="number" class="form-control">
                        <span style="color:red">{{ errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <div class="form-row">
                    <div class="col">

                        <ValidationProvider rules="required" name="Password" vid="password" v-slot="{ valid, errors }">

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input placeholder="Your password" :state="errors[0] ? false : (valid ? true : null)"
                                    type="password" class="form-control" v-model="user.password">
                                <span style="color:red">{{ errors[0] }}</span>
                            </div>

                        </ValidationProvider>

                    </div>
                    <div class="col">

                        <ValidationProvider rules="required|confirmed:password" name="Password confirmation"
                            v-slot="{ valid, errors }">
                            <div class="form-group">
                                <label for="password2">Confirm Password</label>
                                <input placeholder="Confirm password" :state="errors[0] ? false : (valid ? true : null)"
                                    v-model='confirmPassword' class="form-control">
                                <span style="color:red">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-block">Register
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span class="sr-only">Loading...</span>
                    </button>
                </div>
            </form>

        </ValidationObserver>

    </div>
</template>


<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        name: 'registration',
        data() {
            return {
                user: {
                    mobile: '',
                    password: ''
                },
                confirmPassword: "",
                submitted: false,
                successful: false,
                message: ''
            };
        },
        computed: {
            ...mapGetters(['subscriber', 'subscriberStatus', 'error']),
            loggedIn() {
                return this.subscriberStatus.loggedIn;
            },
            error(){
                return this.error;
            }


        },
        mounted() {

            if (this.successful) {
                this.$router.push('/profile');
            }
        },
        created() {

        },
        methods: {

            ...mapActions(['registerSubscriber']),
            async handleRegister() {
                this.message = '';
                this.submitted = true;
                console.log(this.user)
                let valid = await this.$refs.observer.validate()
                if (valid) {
                    await this.registerSubscriber('registerSubscriber', this.user)
                    this.message = 'Successfully registered subscriber';
                    this.successful = true;
                    this.$router.push({
                        path: '/'
                    });
                }
            },

            resetForm() {
                this.user = {
                    mobile: "",
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