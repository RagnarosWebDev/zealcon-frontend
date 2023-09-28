<script setup lang="ts">
import ContactItem from './ContactItem.vue'
import AnimateHeight from 'vue-animate-height'
import { storeToRefs } from 'pinia'
import { useLanguage } from '../storage/language.storage.ts'

const langs = storeToRefs(useLanguage())
</script>

<script lang="ts">
export default {
  name: 'HeaderComponent',
  data() {
    const h: any = 0
    return {
      height: h,
      maxHeight: 80,
    }
  },
  methods: {
    open() {
      this.height = this.height == 0 ? 600 : 0
    },
  },
}
</script>

<template>
  <header>
    <router-link class="logo" to="/">
      <img id="logo" src="/logo.svg" alt="Z" />
      <img class="logo-name" src="/wordmark.svg" />
    </router-link>
    <div class="contacts">
      <ContactItem
        class="contact-visible"
        :value="langs.phone.value"
        image="/phone.svg"
        link="tel:+78005552994"
      />
      <ContactItem
        class="contact-visible"
        :value="langs.phone1.value"
        image="/phone.svg"
        link="tel:+74955404977"
      />
      <ContactItem
        class="contact-visible"
        :value="langs.mail.value"
        image="/email.svg"
        link="mailto:info@zealcon.ru"
      />
      <img
        id="burger"
        :src="height == 0 ? '/burger.svg' : '/clear.svg'"
        alt="burger"
        style="cursor: pointer"
        @click="open"
      />
    </div>
  </header>
  <div class="header-open" v-if="height != 0" @click="open"></div>
  <AnimateHeight class="header-data" :duration="500" :height="height">
    <div class="header-container" style="height: 600px">
      <router-link @click="open" class="link" to="/">{{
        langs.navMain.value
      }}</router-link>
      <router-link @click="open" class="link" to="/about">{{
        langs.navAbout.value
      }}</router-link>
      <router-link @click="open" class="link" to="/services">{{
        langs.navServices.value
      }}</router-link>
      <router-link @click="open" class="link" to="/contacts">{{
        langs.navContacts.value
      }}</router-link>

      <div
        class="linea"
        style="height: 1px; margin-bottom: 40px; background: white"
      ></div>

      <ContactItem
        class="contact-data contact-data1"
        :value="langs.phone.value"
        image="/phone.svg"
        link="tel:+78005552994"
        color="#ECECEC"
      />
      <ContactItem
        class="contact-data"
        :value="langs.phone1.value"
        image="/phone.svg"
        link="tel:+74955404977"
        color="#ECECEC"
      />
      <ContactItem
        class="contact-data"
        :value="langs.mail.value"
        image="/email.svg"
        link="mailto:info@zealcon.ru"
        color="#ECECEC"
      />
    </div>
  </AnimateHeight>
</template>

<style scoped>
.contact-data {
  margin-bottom: 20px;
  margin-left: auto;
}
.contact-data:last-child {
  margin-bottom: 40px;
}
.link {
  font-size: 36px;
  color: white;
  text-align: right;
  text-decoration: none;
  margin-bottom: 48px;
  font-weight: 600;
}
.link:first-child {
  margin-top: 64px;
}
.link:last-child {
  margin-bottom: 131px;
}

.header-container {
  display: flex;
  margin-left: 13%;
  margin-right: 13%;
  flex-direction: column;
}
.header-open {
  position: fixed;
  margin-top: 80px;
  z-index: 10000;
  height: calc(100vh);
  width: 100%;
  background: black;
  opacity: 40%;
}
.header-data {
  position: fixed;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 10001;
  background: #2b2b2b;
}
header {
  height: 80px;
  position: fixed;
  z-index: 1000;
  width: 100%;
  border: 1px solid #dee7ee;
  display: flex;
  background: white;
  justify-content: space-around;
}
.logo {
  display: flex;
  margin-bottom: auto;
  margin-top: auto;
  text-decoration: none;
  color: black;
}
#logo {
  width: 32px;
  height: 32px;
}
.logo-name {
  height: 19px;
  margin-top: auto;
  margin-left: 15px;
  margin-bottom: auto;
}
.contacts {
  display: flex;
  width: 900px;
  justify-content: space-between;
}
#burger {
  width: 45px;
}
@media (max-width: 1215px) {
  .contact-visible {
    display: none;
  }
  .contacts {
    width: 60px;
    margin-right: 30px;
  }
  header {
    justify-content: space-between;
  }
  .logo {
    margin-left: 30px;
  }
}

@media (max-width: 900px) {
  .contacts {
    width: 45px;
  }
  #logo {
    height: 24px;
  }
  .logo-name {
    margin-left: 5px;
    height: 14px;
  }
  .link {
    font-size: 24px;
    margin-bottom: 32px;
  }
  .link:first-child {
    margin-top: 48px;
  }
  .linea {
    display: none;
  }
  .contact-data1 {
    margin-top: auto;
  }
}
</style>
