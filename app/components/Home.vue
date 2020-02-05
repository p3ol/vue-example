<template>
  <div class="page home">
    <div class="container">
      <h1>Home</h1>
      <p>
        This is a normal page, without any paywall, with premium &
        free posts
      </p>
    </div>
  </div>
</template>

<script>

  export default {
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
