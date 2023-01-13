<template>
  <div class="card" style="margin-bottom: 20px;">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img class="card-img" :src="imgUrl" :alt="title">
    </div>
    <span class="card-name">Level: {{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body" style="padding: 0; height: auto; min-height: auto; margin-bottom: 0;">
      <slot name="body"></slot>
      <div>
        <router-link :to="link" class="link" style="display: block; margin: auto;">See more</router-link>
      </div>
      <slot name="footer"></slot>
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
    },
    link: {
      type: String
    }
  }
}
</script>