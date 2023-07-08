<script setup lang="ts"></script>
<script lang="ts">
export default {
  name: 'ContactPageItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
<template>
  <a class="item">
    <div class="image-item">
      <img :src="image" alt="" />
    </div>
    <div class="title-container">
      <slot></slot>
    </div>
  </a>
</template>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.title {
  font-size: 32px;
  font-weight: 500;
}
.item {
  width: 50%;
  display: flex;
  margin-bottom: 20px;
}
.item img {
  margin: auto;
  width: 56px;
  height: 56px;
}
.image-item {
  width: 88px;
  height: 88px;
  border-radius: 200px;
  display: flex;
  margin-right: 30px;
  background: var(--primary-gray);
}
@media (max-width: 1300px) {
  .item {
    width: 100%;
  }
}
@media (max-width: 700px) {
  .image-item {
    width: 64px;
    height: 64px;
    margin-right: 16px;
  }
  .item img {
    width: 40px;
    height: 40px;
  }
  .title {
    font-size: 20px;
  }
}
</style>
