<template>
  <div class="card-stats" style="border-radius: 12px;">
    <div v-for="(stat, idx) in stats" class="one-third" :key="idx">
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat"> {{ stat.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheStats",
  props: {
    stats: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>