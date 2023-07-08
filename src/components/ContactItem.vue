<script setup lang="ts"></script>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'black',
    },
  },
}
</script>

<template>
  <div class="contact-item">
    <img class="contact-image" :src="$props.image" alt="phone" />
    <a class="contact-text" :style="'color:' + color" :href="link">{{
      $props.value
    }}</a>
  </div>
</template>

<style scoped>
.contact-item {
  display: flex;
}
.contact-image {
  width: 24px;
  margin-right: 5px;
}
.contact-text {
  font-size: 20px;
  margin-bottom: auto;
  text-decoration: none;
  margin-top: auto;
  font-weight: 400;
}
@media (max-width: 700px) {
  .contact-text {
    font-size: 18px;
  }
}
</style>
