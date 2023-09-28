<script setup lang="ts"></script>
<script>
import { useToast } from 'vue-toastification'
import { router } from '../router'
import { useUserStore } from '../storage/user.storage.ts'
import { addNews } from '../core/api'

export default {
  name: 'AddService',
  data() {
    return {
      title: '',
      file: null,
      description: '',
    }
  },
  methods: {
    send() {
      addNews(
        useUserStore().$state.token,
        this.title,
        this.description,
        this.file,
      )
        .then((e) => {
          useToast().success('Успешно добавлено')
          router.push({ path: '/addNews' })
        })
        .catch((e) => {
          useToast().error(e.response.data.message)
        })
    },
    uploadFile: function (event) {
      this.file = event.target.files[0]
    },
  },
}
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
    <textarea
      rows="5"
      cols="100"
      v-model="description"
      name="text"
      placeholder="Введите текст"
    ></textarea>
    <input type="file" @change="uploadFile" id="image" placeholder="Картинка" />
    <input type="submit" placeholder="Создать" @click="send" />
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
