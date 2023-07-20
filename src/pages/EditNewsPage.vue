<script lang="ts">
import { defineComponent } from 'vue'
import { editNews, getById } from '../core/api'
import { useUserStore } from '../storage/user.storage'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'

export default defineComponent({
  data() {
    return {
      id: Number(useRoute().query.id),
      title: '',
      description: '',
    }
  },
  methods: {
    editData() {
      editNews(
        useUserStore().$state.token,
        this.title,
        this.description,
        this.id,
      ).then((e) => {
        useToast().success('Успешно отредактировано')
      })
    },
  },
  mounted() {
    console.log(this.id)
    getById(useUserStore().token, this.id).then((e) => {
      this.title = e.data.title
      this.description = e.data.description
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
    <input type="text" v-model="title" placeholder="Заголовок" name="title" />\
    <textarea
      rows="5"
      cols="100"
      v-model="description"
      name="text"
      placeholder="Введите текст"
    ></textarea>
    <input type="submit" placeholder="Сохранить" @click="editData" />
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
