<script setup lang="ts"></script>

<script>
import { loginRequest } from '../core/api'
import { useToast } from 'vue-toastification'
import { useUserStore } from '../storage/user.storage.ts'

export default {
  name: 'AdminPage',
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    click() {
      loginRequest(this.login, this.password)
        .then((e) => {
          useToast().success('Вход успешен')
          useUserStore().update(e.data.token)
        })
        .catch((e) => {
          useToast().error(e.response.data.message)
        })
    },
  },
}
</script>

<template>
  <div>
    <div
      style="
        padding-top: 100px;
        padding-bottom: 100px;
        display: flex;
        margin: auto;
        flex-direction: column;
        margin-left: 12%;
        margin-right: 12%;
      "
    >
      <input v-model="login" placeholder="логин" />
      <input v-model="password" placeholder="пароль" />
      <button @click="click">Login</button>
    </div>
  </div>
</template>

<style scoped>
input,
button {
  margin-bottom: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-size: 20px;
  border-radius: 10px;
}
</style>
