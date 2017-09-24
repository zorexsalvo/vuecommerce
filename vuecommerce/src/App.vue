<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-menu">
            <div class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" to="/admin">Admin</router-link>
            <router-link class="navbar-item" to="/cart">Cart</router-link>
            </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css';
</style>
