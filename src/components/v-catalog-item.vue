<template>
  <div class="v-catalog-item">
    <h4>Карточка товара</h4>

    <img
      class="v-catalog-item__img"
      :src="require('../img/' + product_data.image)"
      alt="item foto"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }} &#8381;</p>
    <button
		class="v-catalog-item__btn btn"
		@click="sendDataToParent"
		>Add to cart
		</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",

  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  methods: {
    sendDataToParent() {
      this.$emit("sendDataToParent", this.product_data.article);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.v-catalog-item {
  &__img {
    width: 170px;
    height: 200px;
  }
}
</style>
