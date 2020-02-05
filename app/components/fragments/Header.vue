<template>
  <header class="mb-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Newspaper</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">
            Home
          </router-link>
          <router-link to="/premium" class="nav-item nav-link">
            Premium post
          </router-link>
          <router-link to="/free" class="nav-item nav-link">
            Free Post
          </router-link>
          <router-link to="/subscribe" class="nav-item nav-link">
            Subscribe now!
          </router-link>
        </div>
      </div>
      <span class="navbar-text">
        <span v-if="connecting">Connecting...</span>
        <span v-if="$testUser.logged">
          Signed as: <strong>Rick Sanchez</strong>
        </span>
        <a v-else href="#" @click="login">Sign in</a>
      </span>
    </nav>
  </header>
</template>

<script>
  let _loginTimeout;

  export default {
    components: {},
    props: {
      onLogin: {
        type: Function,
        required: true,
      },
    },
    data () {
      return {
        connecting: false,
      }
    },
    methods: {
      login(e) {
        e?.preventDefault()

        if (this.connecting === true) {
          return false
        }

        this.connecting = true

        _loginTimeout = setTimeout(() => {
          this.$testUser.logged = true
          this.$testUser.premium = true
          this.connecting = false
          this.onLogin()
        }, 2000);

        return false
      }
    },
    beforeRouteLeave(to, from, next) {
      clearTimeout(_loginTimeout)
      next()
    }
  }
</script>
