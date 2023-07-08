<script setup lang="ts">
import ServiceItem from './ServiceItem.vue'
import { useService } from '../storage/services.storage.ts'
import { storeToRefs } from 'pinia'
import { useLanguage } from '../storage/language.storage.ts'

const services = useService()
const langs = storeToRefs(useLanguage())
</script>

<script lang="ts">
export default {
  name: 'Services',
}
</script>

<template>
  <div class="services">
    <div class="title">{{ langs.navServices.value }}</div>
    <div class="services-container">
      <ServiceItem
        v-for="item in services.$state.services"
        :service="item"
        :key="item.id"
      />
    </div>
  </div>
</template>

<style scoped>
.services {
  margin-left: 12%;
  margin-right: 12%;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
}
.title {
  margin-bottom: 40px;
  font-size: 40px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
}
.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (max-width: 1100px) {
  .title {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
