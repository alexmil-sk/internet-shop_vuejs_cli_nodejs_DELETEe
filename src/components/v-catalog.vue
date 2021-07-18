<template>
  <div class="v-catalog">
    <h2>CATALOG</h2>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in this.$store.state.products"
        :key="product.article"
        :product_data="product"
        @sendDataToParent="showChildArticleConsole"
      ></v-catalog-item>
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import {mapActions} from 'vuex';//

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
      
    };
  },

  methods: {
	...mapActions([
		'GET_PRODUCTS_FROM_API',
	]),
   showChildArticleConsole(data) {
      console.log(data);
   },
  },
  mounted() {
	this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.v-catalog {
  &__list {
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
