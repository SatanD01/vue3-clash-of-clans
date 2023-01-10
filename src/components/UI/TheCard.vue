<template>
  <div class="card">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img class="card-img" :src="imgUrl" :alt="title">
    </div>
    <span class="card-name">Level: {{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCard",
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String
    }
  }
}
</script>