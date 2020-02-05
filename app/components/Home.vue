<template>
  <div class="page home">
    <div class="container">
      <Header :onLogin="login" />
      <h1>Home</h1>
      <p>
        This is a normal page, without any paywall, with premium &
        free posts
      </p>
      <ul>
        <li><router-link to="/free">Free post</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from './fragments/Header'

  export default {
    components: { Header },
    methods: {
      sendHit() {
        window.poool('config', {
          user_is_premium: this.$testUser.premium || false,
        })

        window.poool('send', 'page-view', 'page')
      },
      login() {
        this.sendHit()
      }
    },
    mounted() {
      this.sendHit()
    },
    beforeRouteLeave(to, from, next) {
      window.poool('flush')
      next()
    }
  }
</script>
