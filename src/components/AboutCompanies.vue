<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLanguage } from '../storage/language.storage.ts'

const langs = storeToRefs(useLanguage())
</script>
<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

export default {
  name: 'AboutCompanies',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      width: window.innerWidth,
      modules: [Navigation],
      navigation: {
        prevEl: '#back1',
        nextEl: '#next1',
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
  <div class="about-companies">
    <div class="title">{{ langs.aboutUs.value }}</div>
    <div class="companies-list" v-if="width > 1000">
      <img src="/leo.png" alt="leo" id="leo" />
      <img src="/techno.png" alt="techno" />
      <img src="/cubolix.png" alt="cobolux" />
      <img src="/flexopack.png" alt="flexopack" id="flexopack" />
      <img src="/ati.png" alt="ati" />
      <img src="/amotecs.png" alt="amoteks" />
      <img src="/vision.png" alt="vision" />
      <img src="/auto.png" alt="auto" />
    </div>
    <div class="swiper-container" v-if="width <= 1000">
      <img class="swiper-nav back" id="back1" src="/arrow_front.svg" />
      <swiper
        class="swiper-1"
        style="width: 70%"
        :slides-per-group="1"
        :modules="modules"
        :navigation="navigation"
      >
        <swiper-slide>
          <img src="/leo.png" alt="leo" class="min-width" />
        </swiper-slide>
        <swiper-slide>
          <img src="/techno.png" alt="techno" class="min-width" />
        </swiper-slide>
        <swiper-slide>
          <img src="/cubolix.png" alt="cobolux" class="min-width" />
        </swiper-slide>
        <swiper-slide>
          <img src="/flexopack.png" alt="flexopack" class="min-width" />
        </swiper-slide>
        <swiper-slide>
          <img src="/ati.png" alt="ati" class="min-width" />
        </swiper-slide>
        <swiper-slide>
          <img src="/amotecs.png" alt="amotecs" class="min-width" />
        </swiper-slide>
        <swiper-slide>
          <img src="/vision.png" alt="vision" class="min-width" />
        </swiper-slide>
        <swiper-slide>
          <img src="/auto.png" alt="auto" class="min-width" />
        </swiper-slide>
      </swiper>
      <img class="swiper-nav" id="next1" src="/arrow_back.svg" />
    </div>
  </div>
</template>

<style scoped>
#leo {
  margin-left: 80px;
}
#flexopack {
  margin-right: 80px;
}
.min-width {
  width: 100%;
}

@media (max-width: 1000px) {
  #leo {
    margin-left: 0;
  }
  #flexopack {
    margin-right: 0;
  }
}
.swiper-nav {
  background: #f8f8f8;
  border-radius: 100px;
  height: 24px;
  padding: 15px;
  margin-top: auto;
  margin-bottom: auto;
}
.swiper-container {
  display: flex;
  justify-content: space-between;
}
.about-companies {
  display: flex;
  flex-direction: column;
  margin: 40px 12% 90px;
}
.title {
  margin-right: auto;
  margin-left: auto;
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: 600;
}
.companies-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.companies-list img {
  margin-left: auto;
  width: 300px;
  margin-right: auto;
}
@media (max-width: 800px) {
  .about-companies {
    margin-bottom: 40px;
  }
}
@media (max-width: 600px) {
  .title {
    font-size: 28px;
  }
}
</style>
