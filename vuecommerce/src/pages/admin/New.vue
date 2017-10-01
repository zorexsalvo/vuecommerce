<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <p class="title">
            Create New Products
          </p>
        </div>
      </div>
    </section>
    <br>
    <div class="container">
        <product-form></product-form>
    </div>
  </div>
</template>

<style>
.input.error {
  border-color: red !important;
}
</style>

<script>
import ProductForm from '@/components/products/ProductForm';

export default({
  data() {
    return {
      name: '',
      price: '',
      image: '',
      description: '',
    };
  },
  methods: {
    saveProduct() {
      console.log(this.errors);
    },
  },
  components: {
    'product-form': ProductForm,
  },
});
</script>
