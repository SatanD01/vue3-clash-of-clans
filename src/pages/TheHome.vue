<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <app-card :img-url="item.img" :name="`${item.lvl}`" :title="item.title" :link="`/${item.alias}`">
        <template v-slot:body>
          {{ item.descr }}
        </template>
        <template v-slot:footer>
          <TheStats :stats="item.info"/>
        </template>
      </app-card>
    </slide>
    <template #addons>
      <navigation/>
    </template>
  </carousel>
</template>

<script>
import TheCard from "@/components/UI/TheCard";
import item from '@/seeders/items.js'
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from "vue3-carousel";
import TheStats from "@/components/UI/TheStats";

export default {
  name: "TheHome",
  components: {TheStats, "app-card": TheCard, Carousel, Slide, Navigation},
  data() {
    return {
      items: item,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center',
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        },
        1200: {
          itemsToShow: 3,
        },
        1800: {
          itemsToShow: 4,
        }
      }
    }
  }
}
</script>

<style scoped>

</style>