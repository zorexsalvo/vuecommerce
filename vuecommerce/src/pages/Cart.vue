<template>
    <section class="hero is-light">
        <div class="hero-body">
            <div class="container">
                <p class="title">
                  {{message}}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'cart',
    data() {
      return {
        message: 'Welcome to the Cart Page',
      };
    },
  };
</script>
