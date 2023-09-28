<script setup lang="ts">
import { baseURL } from '../core/api'
import CalculatorForm from '../components/CalculatorForm.vue'
</script>

<script lang="ts">
import { useService } from '../storage/services.storage'
import { useRoute } from 'vue-router'
import ServiceData from '../core/models/service-data.ts'
import { router } from '../router'
import { useUserStore } from '../storage/user.storage.ts'
import { deleteService } from '../core/api'
import { useToast } from 'vue-toastification'

export default {
  name: 'ServicePage',
  data() {
    return {
      isShowingEdit: useUserStore().$state.token,
      width: window.innerWidth,
      id: Number(useRoute().query.id),
    }
  },
  mounted() {
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
    to() {
      router.push({ path: '/services' })
    },
    edit() {
      console.log(this.id)
      router.push({ path: '/editService', query: { id: this.id } })
    },
    remove() {
      console.log(this.id)
      deleteService(this.isShowingEdit, this.id).then((e) => {
        useToast().success('Удаление успешно')
        this.to()
      })
    },
  },
}
</script>

<template>
  <div
    style="display: flex; flex-direction: column"
    :key="service.id"
    v-for="service in useService().$state.services.filter((u) => u.id == id)"
  >
    <div
      class="main"
      :style="{
        'background-image': `url('${baseURL}/images/${calcImage(service)}')`,
      }"
    >
      <div
        style="
          width: 100%;

          position: absolute;
          background: linear-gradient(
            270deg,
            rgba(0, 0, 0, 0.32) 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 100;
        "
        class="main-gr"
      ></div>
      <div
        class="main-bottom-gr"
        style="
          width: 100%;
          position: absolute;
          background: linear-gradient(
            rgba(248, 248, 248, 0),
            rgba(248, 248, 248, 1)
          );
          z-index: 101;
        "
      ></div>
    </div>

    <button
      @click="to"
      style="
        background: var(--primary-gray);
        border: 1px solid #d9d9d9;
        margin-top: 40px;
        font-weight: 300;
        border-radius: 12px;
      "
      class="btn"
    >
      Все услуги
    </button>
    <div class="title">{{ service.title }}</div>

    <div v-html="service.text" class="text"></div>

    <div
      v-if="isShowingEdit"
      style="margin: 30px 12%; display: flex; flex-direction: column"
    >
      <button @click="edit" class="btn" style="margin-bottom: 30px">
        Редактировать
      </button>
      <button @click="remove" class="btn">Удалить</button>
    </div>

    <CalculatorForm></CalculatorForm>
  </div>
</template>

<style scoped>
.btn {
  font-size: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-left: 12%;
  margin-right: 12%;
  width: 300px;
}
@media (max-width: 1000px) {
  .btn {
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 640px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main-gr {
  height: 640px;
}
.main-bottom-gr {
  margin-top: 490px;
  height: 150px;
}

@media (max-width: 800px) {
  .main,
  .main-gr {
    height: 500px;
  }
  .main-bottom-gr {
    margin-top: 350px;
  }
}

.title {
  margin-top: 40px;
  font-size: 40px;
  font-weight: 600;
  margin-right: auto;
  margin-left: auto;
}

.text {
  color: #565656;
  font-weight: 400;
  margin-left: 12%;
  margin-right: 12%;
  margin-top: 30px;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 40px;
}

@media (max-width: 800px) {
  .text {
    font-size: 16px;
  }
  .title {
    font-size: 28px;
    margin-left: 12%;
    width: 90%;
  }
}
</style>
<style>
.line {
  height: 1px;
  width: 100%;
  background: #cdcdcd;
  margin-top: 48px;
  margin-bottom: 48px;
}
.text ul {
  margin-left: 30px;
}
</style>
