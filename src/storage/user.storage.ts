import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      token: '',
    }
  },
  actions: {
    update(newToken) {
      this.token = newToken
    },
    reset() {
      this.token = ''
    },
  },
  persist: true,
})
