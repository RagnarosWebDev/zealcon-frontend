<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="thanks">Спасибо</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  padding-top: 75px;
  margin-left: 12%;
  margin-right: 12%;
}
.thanks {
  font-size: 4vw;
  font-weight: 600;
  margin: auto;
}
@media (max-width: 800px) {
  .thanks {
    font-size: 10vw;
  }
}
</style>
