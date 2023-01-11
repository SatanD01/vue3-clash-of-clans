<template>
  <div class="wrapper" v-if="item">
    <img class="card-img" :src="item.img" :alt="item.descr">
    <h1 class="title">{{ item.title }}</h1>
    <p>{{ item.descr }}</p>
    <div>
      <router-link to="/" class="btn btnPrimary">Home</router-link>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items";

export default {
  name: "_ItemAlias",
  data() {
    return {
      item: null,
    }
  },
  created() {
    const alias = this.$route.params.ItemAlias;
    const item = items.find(el => el.alias === alias);

    this.item = item;
  }
}
</script>

<style scoped>

</style>