<template>
  <div class="wrapper-person" v-if="item">
    <img class="card-img" :src="item.img" :alt="item.descr">
    <h1 style="color: #ffffff;" class="title">{{ item.title }}</h1>
    <p>{{ item.descr }}</p>
    <br>
    <div class="card-stats" style="border-radius: 12px;">
      <div v-for="(stat, idx) in item.info" class="one-third" :key="idx">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat"> {{ stat.title }} </div>
      </div>
    </div>
    <br>
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

<style scoped lang="scss">
  .wrapper-person{
    text-align: center;
  }
</style>