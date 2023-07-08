<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useService } from './storage/services.storage.ts'
import { useLanguage } from './storage/language.storage.ts'

useService().load()
useLanguage().load()
</script>

<script lang="ts"></script>

<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style scoped></style>
