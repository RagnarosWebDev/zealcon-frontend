<script setup lang="ts">
import { baseURL } from '../core/api'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<script lang="ts">
import { NewsData } from '../core/models/news-data'
import { allNews } from '../core/api'

export default {
  name: 'NewsPreview',
  data() {
    return {
      news: [] as NewsData[],
      width: window.innerWidth,
    }
  },
  mounted() {
    allNews(0).then((e) => {
      allNews(1).then((e1) => {
        this.news = e.data.concat(e1.data)
        console.log(this.news)
      })
    })
  },
  methods: {
    first() {
      return this.news[0]
    },
    firstInfo() {
      return NewsData.getDateInfo(this.first())
    },
    fourthOrMax() {
      return [...this.news].slice(
        this.width > 1500 ? 1 : 0,
        this.news.length >= 4 ? 4 : this.news.length,
      )
    },
  },
  created() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
  },
}
</script>

<template>
  <div style="padding-top: 40px">
    <div class="news-preview" v-if="first() && width > 800">
      <div
        class="news-container"
        :style="{
          'background-image': `url('${baseURL}/images/${first().image}')`,
        }"
        v-if="width > 1500"
      >
        <div class="news-gradient">
          <div class="news-date">
            <div class="rounder" style="background: var(--primary-primary)">
              {{ firstInfo().year }}
            </div>
            <div class="rounder" style="background: var(--primary-black)">
              {{ firstInfo().day }}
              {{ firstInfo().month }}
            </div>
          </div>
          <div class="title-news">{{ first().title }}</div>
          <div class="description-news">{{ first().description }}</div>
        </div>
      </div>
      <div class="news-container">
        <div
          class="news-item"
          v-for="newsItem in fourthOrMax()"
          :key="newsItem.id"
        >
          <div class="texts-news-item">
            <div class="title-news-item">{{ newsItem.title }}</div>
            <div class="description-news-item">{{ newsItem.description }}</div>
            <div class="news-date" style="margin-top: auto">
              <div
                class="rounder"
                style="background: var(--primary-primary); margin-left: 0"
              >
                {{ NewsData.getDateInfo(newsItem).year }}
              </div>
              <div class="rounder" style="background: var(--primary-black)">
                {{ NewsData.getDateInfo(newsItem).day }}
                {{ NewsData.getDateInfo(newsItem).month }}
              </div>
            </div>
          </div>
          <div class="grid-news">
            <img
              class="image-news-item"
              :src="`${baseURL}/images/${newsItem.image}`"
            />
            <div class="bg-image-news"></div>
          </div>
        </div>

        <router-link class="full" to="/news">Полный список</router-link>
      </div>
    </div>

    <div
      v-if="first() && width <= 800"
      style="display: flex; flex-direction: column"
    >
      <div style="width: 100%; margin-bottom: 20px">
        <swiper :slides-per-view="1.5" space-between="20">
          <swiper-slide v-for="item in fourthOrMax()" :key="item.id">
            <div
              class="swiper-news-container"
              :style="{
                'margin-left': `${fourthOrMax().indexOf(item) == 0 ? 20 : 0}px`,
              }"
            >
              <div
                style="
                  border-radius: 12px;
                  height: 250px;
                  background-position: center;
                  background-size: cover;
                "
                :style="{
                  'background-image': `url('${baseURL}/images/${
                    first().image
                  }')`,
                }"
              >
                <div
                  style="
                    border-radius: 12px;
                    width: 100%;
                    height: inherit;
                    background: linear-gradient(
                      360deg,
                      rgba(0, 0, 0, 0.64) 0%,
                      rgba(0, 0, 0, 0.08) 100%
                    );
                  "
                ></div>
              </div>

              <div class="swiper-news-texts">{{ item.title }}</div>

              <div class="swiper-news-description">{{ item.description }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div
        style="
          height: 2px;
          background: #e9e9e9;
          margin-bottom: 32px;
          margin-left: 12%;
          margin-right: 12%;
        "
      ></div>
      <router-link
        class="full"
        style="
          padding-left: 0;
          padding-right: 0;
          margin-left: 12%;
          margin-right: 12%;
          margin-bottom: 64px;
        "
        to="/news"
        >Полный список</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.swiper-news-texts {
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
}
.swiper-news-description {
  color: #2b2b2b;
  font-size: 12px;
  font-weight: 300;
}
.title-news-item {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
}
.description-news-item {
  font-size: 20px;
  color: #2b2b2b;
  font-weight: 400;
}
.grid-news {
  display: grid;
}
.bg-image-news {
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.64) 0%,
    rgba(0, 0, 0, 0.08) 100%
  );
  grid-row: 1/2;
  grid-column: 1/2;
  border-radius: 12px;
}
.texts-news-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.image-news-item {
  height: 250px;
  border-radius: 10px;
  grid-row: 1/2;
  grid-column: 1/2;
}
.news-item {
  display: flex;
  margin-bottom: 10px;
}
.full {
  margin-top: auto;
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  border-radius: 12px;
  padding: 12px 24px;
  background: var(--primary-primary);
}
.title-news {
  margin-top: auto;
  font-size: 40px;
  margin-left: 32px;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
}
.description-news {
  font-size: 24px;
  color: white;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 32px;
}
.news-container {
  flex: 1;
  margin-right: 10px;
  height: 900px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
}
.news-container:last-child {
  margin-right: 0;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.rounder {
  padding: 4px 12px;
  border-radius: 16px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
}
.rounder:nth-child(2n + 1) {
  margin-left: 32px;
}
.news-date {
  padding-top: 32px;
  display: flex;
}
.news-gradient {
  width: inherit;
  display: flex;
  flex-direction: column;
  height: inherit;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.64) 0%,
    rgba(0, 0, 0, 0.08) 100%
  );
  border-radius: 20px;
}
.news-preview {
  display: flex;
  margin: 64px 12%;
}

@media (max-width: 1500px) {
  .news-container {
    height: auto;
  }
}
</style>
