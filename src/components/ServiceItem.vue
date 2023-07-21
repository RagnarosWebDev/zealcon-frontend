<script setup lang="ts">
import { baseURL } from '../core/api'
</script>

<script lang="ts">
import ServiceData from '../core/models/service-data'

export default {
  props: {
    service: {
      type: ServiceData,
      required: true,
    },
  },
  data() {
    return {
      width: window.innerWidth,
    }
  },
  mounted() {
    console.log(this.service)
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
  },
  methods: {
    calcImage(service: ServiceData) {
      return this.width > 1000 || !service.imageMobile
        ? service.image
        : service.imageMobile
    },
  },
}
</script>

<template>
  <router-link
    :to="'service?id=' + service.id"
    class="service-item"
    :style="{
      'background-image': `url('${baseURL}/images/${calcImage(
        $props.service,
      )}')`,
    }"
  >
    <div
      style="
        background: linear-gradient(
          270deg,
          rgba(0, 0, 0, 0.32) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
        border-radius: 20px;
        width: 100%;
        height: inherit;
        display: flex;
        flex-direction: column;
      "
    >
      <div class="title">{{ service.title }}</div>
      <ul class="description">
        <li
          style="margin-bottom: 10px"
          v-for="item of service.advantages"
          :key="item"
          v-html="item"
        ></li>
      </ul>
    </div>
  </router-link>
</template>

<style scoped>
.title {
  margin-left: 20px;
  font-size: 32px;
  font-weight: 500;
  margin-top: 20px;
}
.service-item {
  width: 49%;
  border-radius: 20px;
  display: flex;
  color: white;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: 20px;
  height: 400px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 1000px) {
  .service-item:hover {
    animation: anim 0.75s forwards;
  }
}

@keyframes anim {
  0% {
    background-size: 100%;
  }
  100% {
    background-size: 150%;
  }
}
.description {
  font-size: 20px;
  font-weight: 400;
  margin: auto 20px 20px 40px;
}
@media (max-width: 1300px) {
  .service-item {
    width: 100%;
  }
}
@media (max-width: 700px) {
  .service-item {
    width: 100%;
    min-height: 400px;
  }
  .description {
    font-size: 14px;
  }
  .title {
    font-size: 20px;
    margin-right: 60px;
  }
}
</style>
