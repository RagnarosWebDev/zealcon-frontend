<script setup lang="ts"></script>

<script lang="ts">
import { allForms } from '../core/api'
import { useUserStore } from '../storage/user.storage'
import { Form } from '../core/models/form'

export default {
  name: 'ListForms',
  data() {
    const i: Form[] = []
    return {
      items: i,
    }
  },
  mounted() {
    allForms(useUserStore().token).then((e) => {
      console.log(e.data)
      this.items = e.data
    })
  },
}
</script>
<template>
  <div
    style="
      margin-left: 12%;
      margin-right: 12%;
      padding-top: 120px;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 80px;
    "
  >
    <div
      v-for="item of items"
      :key="item.id"
      class="item"
      style="
        margin-right: 20px;
        border: 1px solid black;
        margin-bottom: 20px;
        width: fit-content;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
      "
    >
      <div>ФИО: {{ item.fio }}</div>
      <div>{{ item.code }}</div>
      <div>Страна-Экспортер: {{ item.countryExport }}</div>
      <div>Описание: {{ item.description }}</div>
      <div>Email: {{ item.email }}</div>
      <div>Аутсорс: {{ item.isAutSource ? 'Да' : 'Нет' }}</div>
      <div>Сумма и валюта инвойса: {{ item.money }}</div>
      <div>Телефон: {{ item.phone }}</div>
      <div>Вес товара/ количетсво паллет: {{ item.weight }}</div>
    </div>
  </div>
</template>

<style scoped>
.item div:first-child {
  margin-top: 10px;
}
.item div {
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>
