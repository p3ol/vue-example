<template>
  <div class="page subscription">
    <div class="container">
      <Header :onLogin="login" />
      <h1>Our offers</h1>
      <p>This is a subscription page, without any paywall, where you list all your subscription offers.</p>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/free">Free post</router-link></li>
        <li><router-link to="/premium">Premium post</router-link></li>
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
          user_is_premium: this.$testUser?.premium || false,
        });

        window.poool('send', 'page-view', 'subscription')
      },
      login() {
        this.sendHit()
      }
    },
    mounted() {
      this.sendHit()
    },
    async beforeRouteLeave(to, from, next) {
      await window.poool('flush')
      next()
    }
  }
</script>
