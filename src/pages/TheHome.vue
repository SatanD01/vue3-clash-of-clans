<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <app-card :name="`${item.lvl}`" :title="item.title">
        {{ item.descr }}
      </app-card>
    </div>
  </div>
</template>

<script>
import TheCard from "@/components/UI/TheCard";

export default {
  name: "TheHome",
  components: {"app-card": TheCard},
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Archer',
          descr: 'Archer Archer Archer Archer',
          lvl: 5
        },
        {
          id: 2,
          title: 'Wizard',
          descr: 'Wizard Wizard Wizard Wizard',
          lvl: 7
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>