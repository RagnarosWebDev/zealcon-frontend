<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'
import { editService } from '../core/api'
import { useUserStore } from '../storage/user.storage'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'
import { useService } from '../storage/services.storage'
import ServiceData from '../core/models/service-data'

export default defineComponent({
  data() {
    return {
      id: Number(useRoute().query.id),
      title: '',
      advantages: new Array<Ref>(),
      text: '',
    }
  },
  methods: {
    editData() {
      editService(
        useUserStore().$state.token,
        this.title,
        this.advantages.map((u) => u.value),
        this.text,
        this.id,
      ).then((e) => {
        useToast().success('Успешно отредактировано')
      })
    },
    add() {
      this.advantages.push(ref(''))
    },
  },
  mounted() {
    const state = useService().$state
    if (state.services.length) {
      const item = state.services.filter((u) => u.id == this.id)[0]
      this.title = item.title
      this.advantages = item.advantages.map((u) => ref(u))
      this.text = item.text
    }
    watch(state.services, (data: ServiceData[]) => {
      console.log('edited')
      const item = data.filter((u) => u.id == this.id)[0]
      console.log(item)
      this.title = item.title
      this.advantages = item.advantages.map((u) => ref(u))
      this.text = item.text
    })
  },
})
</script>

<template>
  <div
    style="
      padding-top: 100px;
      padding-bottom: 100px;
      display: flex;
      width: 50%;
      margin-right: auto;
      margin-left: auto;
      flex-direction: column;
    "
  >
    <input type="text" v-model="title" placeholder="Заголовок" name="title" />
    <div
      style="
        margin-left: 30px;
        margin-right: 30px;
        display: flex;
        flex-direction: column;
      "
    >
      <input
        v-for="item of advantages"
        :key="item.value"
        type="text"
        name="advantages"
        v-model.lazy="item.value"
        placeholder="Введите список преимуществ(через enter)"
      />
      <button @click="add" style="margin-bottom: 20px">Add</button>
    </div>
    <textarea
      rows="5"
      cols="100"
      v-model="text"
      name="text"
      placeholder="Введите текст"
    ></textarea>
    <input type="submit" placeholder="Создать" @click="editData" />
  </div>
</template>

<style scoped>
input,
textarea {
  font-size: 18px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>
