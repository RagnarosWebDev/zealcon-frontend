<script setup lang="ts"></script>
<script lang="ts">
import { LangItem } from '../core/models/lang-item'
import { allLangs, editLang } from '../core/api'
import { AxiosResponse } from 'axios'
import { ref, Ref } from 'vue'
import { useUserStore } from '../storage/user.storage'
import { useToast } from 'vue-toastification'

export class LangItemRef {
  id: number
  name: string
  russianName: string
  value: Ref

  constructor(id: number, name: string, russianName: string, value: Ref) {
    this.id = id
    this.name = name
    this.russianName = russianName
    this.value = value
  }
}
export default {
  name: 'EditLangPage',
  data() {
    const i: LangItemRef[] = []
    return {
      langs: i,
    }
  },
  mounted() {
    allLangs()
      .then((e: AxiosResponse<LangItem[]>) => {
        for (const u of e.data) {
          this.langs.push(
            new LangItemRef(u.id, u.name, u.russianName, ref(u.value)),
          )
        }
      })
      .catch((e) => {
        useToast().error(e.response.data.message)
      })
  },
  methods: {
    update(id: number) {
      const item = this.langs.filter((u) => u.id == id)[0]

      editLang(useUserStore().token, {
        id: item.id,
        name: item.name,
        russianName: item.russianName,
        value: item.value,
      }).then((e) => {
        useToast().success('Успешно отредактированно')
      })
    },
  },
}
</script>
<template>
  <div style="padding-top: 120px; margin-right: 12%; margin-left: 12%">
    <div
      v-for="item of langs"
      :key="item.id"
      style="display: flex; margin-bottom: 20px"
    >
      <div style="margin-right: 20px; margin-top: auto; margin-bottom: auto">
        {{ item.russianName }}
      </div>
      <input type="text" style="padding: 5px 20px" v-model="item.value" />

      <button style="margin-left: 20px" @click="update(item.id)">
        Сохранить
      </button>
    </div>
  </div>
</template>

<style scoped></style>
