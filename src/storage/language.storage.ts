import { defineStore } from 'pinia'
import { allLangs } from '../core/api'
import { useToast } from 'vue-toastification'
import { LangItem } from '../core/models/lang-item'
import { AxiosResponse } from 'axios'

export const useLanguage = defineStore({
  id: 'langs',
  state: () => ({
    mainTitle: '',
    mainSubTitle: '',
    call: '',
    phone: '',
    phone1: '',
    mail: '',
    address: '',
    reverseCall: '',
    copyRight: '',
    allRights: '',
    menu: '',
    navMain: '',
    navContacts: '',
    navAbout: '',
    navServices: '',
    calcForm: '',
    aboutUs: '',
    plusTitle1: '',
    plusTitle2: '',
    plusTitle3: '',
    plusTitle4: '',
    plusDesc1: '',
    plusDesc2: '',
    plusDesc3: '',
    plusDesc4: '',
    formFio: '',
    formPhone: '',
    formProduct: '',
    formCode: '',
    formWeight: '',
    formMail: '',
    formCountry: '',
    formSum: '',
    formOutSource: '',
    formCalc: '',
    formReq: '',
    formFioExample: '',
    formPhoneExample: '',
    formDescExample: '',
    formCodeExample: '',
    formWeightExample: '',
    formMailExample: '',
    formCountryExample: '',
    formSumExample: '',
    formOutSourceExample: '',
  }),
  actions: {
    load() {
      allLangs()
        .then((items: AxiosResponse<LangItem[]>) => {
          for (const item of items.data) {
            if (this.$state.hasOwnProperty(item.name))
              this.$state[item.name] = item.value
          }
        })
        .catch((e) => useToast().error(e.response.data.message))
    },
  },
})
