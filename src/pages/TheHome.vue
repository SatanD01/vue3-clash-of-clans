<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <app-card :img-url="item.img" :name="`${item.lvl}`" :title="item.title">
        {{ item.descr }}
      </app-card>
    </div>
  </div>
</template>

<script>
import TheCard from "@/components/UI/TheCard";
import item from '@/seeders/items.js'

export default {
  name: "TheHome",
  components: {"app-card": TheCard},
  data() {
    return {
      items: item
    }
  }
}
</script>

<style scoped>

</style>