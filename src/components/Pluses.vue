<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLanguage } from '../storage/language.storage.ts'

const langs = storeToRefs(useLanguage())
</script>
<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import PlusItem from './PlusItem.vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

export default {
  name: 'Pluses',
  methods: {},
  components: {
    Swiper,
    SwiperSlide,
    PlusItem,
  },
  data() {
    return {
      width: window.innerWidth,
      modules: [Navigation],
      navigation: {
        prevEl: '#back',
        nextEl: '#next',
      },
    }
  },
  created() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
  },
}
</script>

<template>
  <div class="pluses">
    <div class="pluses-container" v-if="width > 1000">
      <PlusItem
        :title="langs.plusTitle1.value"
        :description="langs.plusDesc1.value"
        image="/money.svg"
      ></PlusItem>
      <PlusItem
        :title="langs.plusTitle2.value"
        :description="langs.plusDesc2.value"
        image="/complex.svg"
      ></PlusItem>
      <PlusItem
        :title="langs.plusTitle3.value"
        :description="langs.plusDesc3.value"
        image="/shield.svg"
      ></PlusItem>
      <PlusItem
        :title="langs.plusTitle4.value"
        :description="langs.plusDesc4.value"
        image="/brain.svg"
      ></PlusItem>
    </div>
    <div class="swiper-pluses" v-if="width <= 1000">
      <img class="swiper-nav back" id="back" src="/arrow_front.svg" />
      <div style="width: 220px">
        <swiper
          ref="swiper12"
          class="swiper-2"
          id="asd1"
          :slides-per-group="1"
          :space-between="10"
          :modules="modules"
          :navigation="navigation"
        >
          <swiper-slide>
            <PlusItem
              :title="langs.plusTitle1.value"
              :description="langs.plusDesc1.value"
              image="/money.svg"
            ></PlusItem>
          </swiper-slide>
          <swiper-slide>
            <PlusItem
              :title="langs.plusTitle2.value"
              :description="langs.plusDesc2.value"
              image="/complex.svg"
            ></PlusItem>
          </swiper-slide>
          <swiper-slide>
            <PlusItem
              :title="langs.plusTitle3.value"
              :description="langs.plusDesc3.value"
              image="/shield.svg"
            ></PlusItem>
          </swiper-slide>
          <swiper-slide>
            <PlusItem
              :title="langs.plusTitle4.value"
              :description="langs.plusDesc4.value"
              image="/brain.svg"
            ></PlusItem>
          </swiper-slide>
        </swiper>
      </div>
      <img class="swiper-nav" id="next" src="/arrow_back.svg" />
    </div>
  </div>
</template>

<style scoped>
.pluses {
  background: url('/bg-expert.png') center center/cover no-repeat;
}
.pluses-container {
  display: flex;
  flex-direction: initial;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 120px 11%;
}
.swiper-pluses {
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
}
.swiper-nav {
  background: white;
  border-radius: 100px;
  height: 24px;
  padding: 15px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
