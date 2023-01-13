<template>
  <div class="wrapper-person" v-if="item">
    <img class="card-img" :src="item.img" :alt="item.descr">
    <h1 style="color: #ffffff;" class="title">{{ item.title }}</h1>
    <p>{{ item.descr }}</p>
    <br>
    <TheStats :stats="item.info"/>
    <br>
    <div>
      <router-link to="/" class="btn btnPrimary">Home</router-link>
    </div>
  </div>
</template>

<script>
import items from "@/seeders/items";
import TheStats from "@/components/UI/TheStats";

export default {
  name: "_ItemAlias",
  components: {TheStats},
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

<style scoped lang="scss">
.wrapper-person {
  text-align: center;
}
</style>