import { defineStore } from 'pinia'
import ServiceData from '../core/models/service-data'
import { allServices } from '../core/api'
import { useToast } from 'vue-toastification'

export const useService = defineStore({
  id: 'services',
  state: () => {
    return {
      services: new Array<ServiceData>(),
    }
  },
  actions: {
    load() {
      allServices()
        .then((u) => {
          Array.prototype.push.apply(this.services, u.data)
        })
        .catch((e) => useToast().error(e.response.data.message))
    },
  },
})
