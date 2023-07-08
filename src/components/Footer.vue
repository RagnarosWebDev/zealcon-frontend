<script setup lang="ts">
import ContactItem from './ContactItem.vue'
import { storeToRefs } from 'pinia'
import { useLanguage } from '../storage/language.storage.ts'

const langs = storeToRefs(useLanguage())
</script>
<script lang="ts">
import { router } from '../router'

export default {
  name: 'FooterD',
  methods: {
    toForm() {
      router.push({ path: '/', hash: '#form' })
    },
  },
}
</script>
<template>
  <footer style="margin-top: auto">
    <div class="footer-main">
      <div class="flex-column">
        <div class="logo">
          <img id="logo" src="/logo.svg" alt="Z" />
          <img class="logo-name" src="/logo_text.svg" />
        </div>
        <button @click="toForm()">{{ langs.reverseCall.value }}</button>
        <button @click="toForm()">{{ langs.call.value }}</button>
      </div>
      <div class="flex-column menu">
        <div class="menu-name">{{ langs.menu.value }}</div>
        <div class="menu-container">
          <router-link class="link" to="/">{{
            langs.navMain.value
          }}</router-link>
          <router-link class="link" to="/about">{{
            langs.navAbout.value
          }}</router-link>
          <router-link class="link" to="/services">{{
            langs.navServices.value
          }}</router-link>
          <router-link class="link" to="/contacts">{{
            langs.navContacts.value
          }}</router-link>
        </div>
      </div>
      <div class="flex-column">
        <div class="menu-name">{{ langs.navContacts.value }}</div>
        <div class="menu-container">
          <ContactItem
            :value="langs.phone.value"
            image="/phone.svg"
            link="tel:+78005552994"
            color="white"
          />
          <ContactItem
            :value="langs.phone1.value"
            image="/phone.svg"
            link="tel:+74055404977"
            color="white"
          />
          <ContactItem
            :value="langs.mail.value"
            image="/email.svg"
            color="white"
            link="mailto:info@zealcon.ru"
          />
          <ContactItem
            link=""
            :value="langs.address.value"
            image="/place.svg"
            color="white"
          />
        </div>
      </div>
    </div>
    <div style="height: 1px; background: #e0e0e0; margin-bottom: 48px"></div>
    <div class="footer-copy">
      <div class="copy-text">{{ langs.copyRight.value }}</div>
      <div class="copy-text">{{ langs.allRights.value }}</div>
    </div>
  </footer>
</template>

<style scoped>
.contact-item {
  color: white;
  margin-bottom: 10px;
  width: 350px;
}
.menu-container {
  margin-top: 23px;
  display: flex;
  flex-direction: column;
}
.link {
  margin-bottom: 10px;
  color: #ececec;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}
.menu-name {
  font-size: 28px;
  font-weight: 500;
  color: #ececec;
}
button {
  background: var(--primary-gray);
  height: 64px;
  margin-bottom: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  color: #2b2b2b;
  font-size: 24px;
  font-weight: 400;
}
button:last-child {
  margin-bottom: 80px;
}
.logo {
  display: flex;
  margin-bottom: auto;
  text-decoration: none;
  color: black;
  margin-bottom: 20px;
  margin-top: auto;
}
#logo {
  width: 40px;
}
.logo-name {
  margin-left: 15px;
  font-weight: 600;
  font-size: 30px;
  color: white;
}
.footer-main {
  display: flex;
  justify-content: space-between;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
footer {
  padding: 64px 12%;
  background: var(--primary-black);
}
.footer-copy {
  display: flex;
  justify-content: space-between;
}
.copy-text {
  color: var(--primary-gray);
  font-size: 20px;
  font-weight: 400;
}
@media (max-width: 640px) {
  .footer-copy {
    flex-direction: column;
  }
  .copy-text {
    margin-right: auto;
    margin-bottom: 5px;
    margin-left: auto;
  }
}
@media (max-width: 1100px) {
  .menu {
    display: none;
  }
}
@media (max-width: 1000px) {
  .footer-main {
    flex-direction: column;
  }
  .logo,
  .menu-name,
  .contact-item {
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 500px) {
  footer {
    padding-top: 55px;
    padding-bottom: 55px;
  }
  .logo {
    margin-bottom: 24px;
  }
  .logo-name {
    height: 25px;
  }
  #logo {
    height: 30px;
  }

  footer {
    padding-left: 20px;
    padding-right: 20px;
  }
  button:last-child {
    margin-bottom: 40px;
  }
  .menu-name {
    display: none;
  }
  .contact-item {
    margin-bottom: 29px;
  }
  .contact-item:last-child {
    width: 80%;
  }
}
</style>
