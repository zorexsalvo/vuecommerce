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
    <div class="columns">
        <div class="column">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name" v-validate="'required'">
                </div>
            </div>
            <div class="field">
                <label class="label" for="">Price</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Price">
                </div>
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
                <input class="input" type="text" placeholder="Image">
            </div>
        </div>
        <div class="field">
            <label class="label" for="">Description</label>
            <div class="control"><textarea id="" class="textarea" name="" cols="30" rows="10" placeholder="Textarea"></textarea></div>
        </div>
        </div>
    </div>
  </div>
  </div>
</template>
