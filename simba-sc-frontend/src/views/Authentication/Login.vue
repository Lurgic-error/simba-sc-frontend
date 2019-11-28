<template>
  <div class="login">

    <ValidationObserver ref="observer" v-slot="{ passes, invalid, validated,validate }">

      <form class="" @submit.prevent="handleLogin" @reset="resetForm">

        <div class="form-row">
          <div class="col-12">

            <ValidationProvider rules='required|numeric' name='mobile' v-slot="{ valid, errors }">
              <div class="form-group">
                <label for="mobile">Mobile number</label>
                <input id='mobile' v-model="subscriber.mobile" placeholder="Your mobile number (255717xxxxxx )"
                  :state="errors[0] ? false : (valid ? true : null)" type="number" name="mobile" class="form-control">
                <span style="color:red">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider rules="required" name="password" vid="password" v-slot="{ valid, errors }">

              <div class="form-group">
                <label for="password">Password</label>
                <input id='password' placeholder="Your password" :state="errors[0] ? false : (valid ? true : null)"
                  type="password" name="password" class="form-control" v-model="subscriber.password">
                <span style="color:red">{{ errors[0] }}</span>
              </div>

            </ValidationProvider>


          </div>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-danger btn-block">Login</button>
        </div>
      </form>

    </ValidationObserver>

  </div>
</template>


<script>
  import {
    mapGetters, mapActions
  } from 'vuex';
  
  export default {
    name: 'login',
    data() {
      return {
        subscriber: {
          mobile: "",
          password: ""
        },
        loading: false,
        message: ''
      };
    },
    computed: {
      ...mapGetters({loggedIn:'loggedIn', error:'error'})
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/')
      }
    },
    mounted() {
      if (this.loggedIn) {
        this.$router.push({
          path: '/'
        });
      }
    },
    methods: {

      ...mapActions(['loginSubscriber']),

      async handleLogin() {
        this.loading = true;

        let valid = await this.$refs.observer.validate()

        if (valid) {
          await this.loginSubscriber('login', this.user)
          console.log(this.error)
          if (!this.error()) {
            this.loading = 'false';
            this.message = `Successfully logged in.`
          } else {
            this.message = `Failed to login subscriber.`
          }
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
  .login {
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