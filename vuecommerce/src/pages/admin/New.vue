<template>
  <div>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <p class="title">
          Create New Products
        </p> </div>
    </div>
  </section>
  <br>
  <div class="container">

    <form @submit.prevent="saveProduct">
    <div class="columns">

        <div class="column">

            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input :class="{'input': true, 'error': errors.has('name')}"
                           type="text"
                           placeholder="Name"
                           v-validate="'required'"
                           v-model="name"
                           name="name">
                </div>
                <span v-show="errors.has('name')" class="tag">
                    Name is required.
                </span>
            </div>

            <div class="field">
                <label class="label" for="">Price</label>
                <div class="control">
                    <input :class="{'input': true, 'error': errors.has('price')}"
                           type="number"
                           placeholder="Price"
                           v-validate="'required'"
                           v-model="price"
                           name="price">
                </div>
                <span v-show="errors.has('price')" class="tag">
                    Price is required.
                </span>
            </div>

            <div class="field">
                <label class="label" for="">Manufacturer</label>
                <div class="control div select">
                    <select id="" name="">
                        <option value="">Please select a Manufacturer</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="column">
            <div class="field">
                <label class="label" for="">Image</label>
                <div class="control">
                    <input :class="{'input': true, 'error': errors.has('image')}"
                           type="text"
                           v-validate="'required'"
                           v-model="image"
                           placeholder="Image"
                           name="image">
                </div>
                <span v-show="errors.has('image')" class="tag">
                    Image is required.
                </span>
            </div>
            <div class="field">
                <label class="label" for="">Description</label>
                <div class="control">
                    <textarea :class="{'textarea': true, 'error': errors.has('description')}"
                              v-validate="'required'"
                              v-model="description"
                              name="description"
                              cols="30"
                              rows="10"
                              placeholder="Textarea">
                    </textarea>
                </div>
                <span v-show="errors.has('description')" class="tag">
                    Description is required.
                </span>
            </div>
        </div>
    </div>

        <div class="container">
            <input class="button is-pulled-right" type="submit" value="Submit">
        </div>
    </form>
    <br><br><br>

  </div>
  </div>
</template>

<style>
.input.error {
  border-color: red !important;
}
</style>

<script>
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
  });
</script>
