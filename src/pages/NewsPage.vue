<script setup lang="ts">
import { baseURL } from '../core/api'
import { NewsData } from '../core/models/news-data.ts'
</script>

<script lang="ts">
import { allNews, countNews, deleteNews } from '../core/api'
import { useToast } from 'vue-toastification'
import { useUserStore } from '../storage/user.storage.ts'
import { router } from '../router'
import { useRoute } from 'vue-router'

export default {
  name: 'NewsData',
  data() {
    return {
      items: [] as NewsData[],
      count: 0,
      countPages: 0,
    }
  },
  mounted() {
    const pageId = useRoute().query.page + ''
    this.changePage(1)
    countNews().then((e) => {
      this.countPages = e.data.count

      setTimeout(() => {
        console.log(pageId)
        if (!pageId) return
        document.getElementById(pageId)?.scrollIntoView({})
      }, 300)
    })
  },
  methods: {
    listCount() {
      const items = [] as any[]
      const minCount = Math.max(this.count - 2, 0)
      for (let i = minCount; i < Math.min(this.countPages, 5 + minCount); i++) {
        items.push(i + 1)
      }
      if (this.countPages - this.count > 5) {
        items.push('...')
        items.push(this.countPages)
      }
      return items
    },
    changePage(page: number | string) {
      if (typeof page == 'string') return
      this.count = page - 1
      allNews(this.count)
        .then((e) => {
          this.items = e.data
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        })
        .catch(() => {
          useToast().error('Ошибка подгрузки новостей')
        })
    },
    removeNews(id: number) {
      console.log(id)
      deleteNews(useUserStore().token, id).then((e) => {
        useToast().success('Новость успешно удалена')
      })
    },
    edit(id: number) {
      router.push({ path: '/editNews', query: { id: id } })
    },
  },
}
</script>
<template>
  <div class="container">
    <div class="title">Новости</div>

    <div
      class="news-container"
      v-for="item in items"
      :key="item.id"
      :style="{
        scrollMarginTop: '80px',
      }"
      :id="items.indexOf(item) + ''"
    >
      <div class="flex">
        <div
          class="news-image"
          :style="{
            float: 'right',
            'background-image': `url('${baseURL}/images/${item.image}')`,
          }"
        >
          <div class="linear" style="display: flex; flex-direction: column">
            <div
              style="
                margin-left: auto;
                margin-top: 20px;
                margin-right: 20px;
                display: flex;
              "
            >
              <div
                class="rounder"
                style="background: var(--primary-primary); margin-left: 0"
              >
                {{ NewsData.getDateInfo(item).year }}
              </div>
              <div class="rounder" style="background: var(--primary-black)">
                {{ NewsData.getDateInfo(item).day }}
                {{ NewsData.getDateInfo(item).month }}
              </div>
            </div>

            <div
              v-if="useUserStore().token"
              style="
                display: flex;
                margin-left: auto;
                margin-right: 30px;
                margin-top: 20px;
              "
            >
              <button @click="removeNews(item.id)">Удалить</button>
              <button @click="edit(item.id)">Редактировать</button>
            </div>
          </div>
        </div>

        <div class="news-title">{{ item.title }}</div>
        <div class="news-description">{{ item.description }}</div>
      </div>

      <div class="line" v-if="item != items[items.length - 1]"></div>
    </div>

    <div class="pages">
      <div
        class="pages-item"
        v-for="i in listCount()"
        :key="i"
        @click="changePage(i)"
        :style="'color: ' + (i == count + 1 ? '#009CDE' : '')"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.rounder {
  padding: 4px 12px;
  border-radius: 16px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
}
.news-title {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
}
.news-description {
  font-size: 24px;
  font-weight: 300;
}
.linear {
  height: inherit;
  width: 100%;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.64) 0%,
    rgba(0, 0, 0, 0.08) 100%
  );
  border-radius: 12px;
}
.title {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 40px;
}
.container {
  margin-left: 12%;
  margin-right: 12%;
  padding-top: 120px;
  padding-bottom: 40px;
}
.news-container {
  display: flex;
  cursor: pointer;
  flex-direction: column;
}
.news-texts {
  flex: 1;
}
.news-image {
  width: 50%;
  border-radius: 12px;
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
}
.pages {
  border: 3px solid #f0f0f0;
  background: #fff;
  margin-top: 30px;
  display: flex;
  border-radius: 12px;
  width: fit-content;
}
.pages-item {
  margin-top: 10px;
  margin-left: 20px;
  color: #7a7a7a;
  font-size: 28px;
  margin-bottom: 10px;
}
.pages-item:last-child {
  margin-right: 20px;
}
.pages-item:hover {
  cursor: pointer;
}

@media (max-width: 900px) {
  .flex {
    display: flex;
    flex-direction: column;
  }
  .news-texts {
    margin-top: 10px;
  }
  .news-title {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .news-description {
    font-size: 16px;
  }
  .news-image {
    height: 200px;
    width: 100%;
  }
  .pages {
    margin-left: auto;
    margin-right: auto;
  }
  .pages-item {
    font-size: 20px;
  }
  .line {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
