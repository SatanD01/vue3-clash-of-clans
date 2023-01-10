<template>
  <div class="card">
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
    }
  }
}
</script>