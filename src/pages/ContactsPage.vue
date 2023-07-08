<script setup lang="ts">
import ContactPageItem from '../components/ContactPageItem.vue'
</script>

<template>
  <div class="contacts-container">
    <div class="title">Контакты</div>

    <div class="contact-items">
      <ContactPageItem title="Номер телефона" image="/phone_gray.svg">
        <a class="sub-title" href="tel:+78005552994"
          >+7 (800) 555-29-94 (Вся Россия)</a
        >
        <a class="sub-title" href="tel:+74955404977"
          >+7 (495) 540-49-77 (Москва)</a
        >
      </ContactPageItem>
      <ContactPageItem title="Электронная почта" image="/email_gray.svg">
        <a class="sub-title" href="mailto:contact@zealcon.ru"
          >contact@zealcon.ru</a
        >
      </ContactPageItem>
      <ContactPageItem title="Юридический адрес" image="/geo_gray.svg">
        <a class="sub-title"
          >Красноказарменная 17а, стр. 1, 111116, Москва, Россия</a
        >
      </ContactPageItem>
    </div>

    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A1e3a51e1c74f63eb09c70e265135bc681b4c4d0ae3e83839a856681fafbe756c&amp;source=constructor"
      width="100%"
      frameborder="0"
      style="margin-bottom: 40px"
    ></iframe>
  </div>
</template>

<style scoped>
.contacts-container {
  padding-top: 160px;
  margin-left: 12%;
  margin-right: 12%;
}
.title {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 64px;
}
.contact-items {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.sub-title {
  font-size: 20px;
  width: 300px;
  font-weight: 400;
  color: #565656;
  text-decoration: none;
}
.item:last-child {
  width: 100%;
}
iframe {
  height: 400px;
}

@media (max-width: 750px) {
  .sub-title {
    font-size: 12px;
    width: 180px;
  }
  .contacts-container {
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 120px;
  }
  .title {
    margin-bottom: 32px;
    font-size: 28px;
  }
  iframe {
    border-radius: 20px;
    height: 200px;
  }
}
</style>
