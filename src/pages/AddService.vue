<script setup lang="ts"></script>
<script>
import { ref } from 'vue'
import { addService } from '../core/api'
import { useToast } from 'vue-toastification'
import { router } from '../router'
import { useUserStore } from '../storage/user.storage.ts'

export default {
  name: 'AddService',
  data() {
    return {
      id: null,
      title: '',
      advantages: [ref('')],
      file: null,
      fileMobile: null,
      text: '',
    }
  },
  methods: {
    add() {
      this.advantages.push(ref(''))
    },
    send() {
      addService(
        useUserStore().token,
        this.title,
        this.file,
        this.advantages,
        this.text,
        this.fileMobile,
      )
        .then((e) => {
          useToast().success('Успешно добавлено')
          router.push({ path: '/addService' })
        })
        .catch((e) => {
          useToast().error(e.response.data.message)
        })
    },
    uploadFile: function (event) {
      this.file = event.target.files[0]
    },
    uploadMobileFile: function (event) {
      this.fileMobile = event.target.files[0]
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
    <input type="file" @change="uploadFile" id="image" placeholder="Картинка" />
    <input
      type="file"
      @change="uploadMobileFile"
      id="image1"
      placeholder="Картинка"
    />
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
