<script setup lang="ts">
import Services from '../components/Services.vue'
import AboutCompanies from '../components/AboutCompanies.vue'
import CalculatorForm from '../components/CalculatorForm.vue'
import Pluses from '../components/Pluses.vue'
import NewsPreview from '../components/NewsPreview.vue'
import { useLanguage } from '../storage/language.storage'
import { storeToRefs } from 'pinia'

const langs = storeToRefs(useLanguage())
</script>
<script lang="ts">
import { router } from '../router'

export default {
  name: 'MainPage',
  methods: {
    toForm() {
      router.push({ hash: '#form' })
    },
  },
}
</script>
<template>
  <div class="main">
    <div class="centered-main">
      <div class="centered-main-title align">{{ langs.mainTitle.value }}</div>
      <div class="centered-main-sub-title align">
        {{ langs.mainSubTitle.value }}
      </div>
      <button class="centered-main-button align" @click="toForm">
        {{ langs.call.value }}
      </button>
    </div>
  </div>
  <div style="margin-top: 40px">
    <Services></Services>
  </div>
  <Pluses></Pluses>
  <AboutCompanies></AboutCompanies>
  <CalculatorForm></CalculatorForm>
  <NewsPreview></NewsPreview>
</template>

<style scoped>
.centered-main {
  width: 600px;
  margin-left: 216px;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: auto;
}
.centered-main-title {
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 600;
}
.centered-main-button {
  border-radius: 10px;
  background: var(--primary-primary);
  color: white;
  font-size: 24px;
  font-weight: 500;
  border: none;
  width: 354px;
  height: 65px;
}
.centered-main-sub-title {
  font-size: 28px;
  font-weight: 300;
  margin-top: 12px;
  color: var(--primary-gray);
  margin-bottom: 20px;
}
.main {
  width: 100%;
  display: flex;
  height: 720px;
  background: url('/back.png') center center/cover no-repeat;
}

@media (max-width: 1215px) {
  .align {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }
  .centered-main {
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 600px) {
  .centered-main-title {
    font-size: 32px;
    text-transform: initial;
  }
  .centered-main-sub-title {
    font-size: 16px;
    margin-top: 24px;
    margin-bottom: 32px;
  }
  .centered-main-button {
    font-size: 14px;
    width: 258px;
    height: 42px;
  }
  .centered-main {
    width: 312px;
  }
}
</style>
