<script setup lang="ts"></script>

<script>
export default {
  name: 'PlusItem',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="plus">
    <div class="image-container">
      <img :src="$props.image" />
    </div>
    <div class="title title-c">{{ $props.title }}</div>
    <div class="description">{{ $props.description }}</div>
  </div>
</template>

<style scoped>
.description {
  width: 80%;
  text-align: center;
  margin: 20px auto;
  font-size: 20px;
  font-weight: 400;
  color: #565656;
}
.title {
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  width: 80%;
}
.plus {
  border-radius: 32px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: white;
}
.image-container {
  padding: 13px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  border-radius: 100px;
  background: var(--primary-gray);
}
.image-container img {
  width: 70px;
}
@media (min-width: 1000px) {
  .plus {
    min-width: 284px;
    width: 24%;
  }
}
@media (max-width: 500px) {
  .title {
    font-size: 24px;
    margin-top: 10px;
  }
  .description {
    font-size: 12px;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
  .plus {
    height: 271px;
    border-radius: 24px;
  }
  .image-container {
    margin-top: 15px;
  }

  .image-container img {
    width: 52px;
  }
}
</style>
