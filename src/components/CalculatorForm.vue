<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLanguage } from '../storage/language.storage.ts'

const langs = storeToRefs(useLanguage())
</script>
<script lang="ts">
import { addForm } from '../core/api'
import { useToast } from 'vue-toastification'

export default {
  name: 'CalculatorForm',
  data() {
    return this.init()
  },
  methods: {
    add() {
      addForm({
        code: this.code,
        countryExport: this.country,
        description: this.description,
        email: this.email,
        isAutSource: this.outSourcing == 'Да',
        money: this.sum,
        phone: this.phone,
        weight: this.weight,
        fio: this.fio,
      }).then((e) => {
        const data = this.init()
        Object.keys(data).forEach((k) => (this[k] = data[k]))

        useToast().success('Ваше заявление принятно')
      })
    },
    init() {
      return {
        fio: '',
        phone: '',
        description: '',
        code: '',
        email: '',
        country: '',
        sum: '',
        outSourcing: '',
        weight: '',
      }
    },
  },
}
</script>
<template>
  <div class="back" id="form">
    <div class="calculator-form">
      <div class="title">{{ langs.calcForm.value }}</div>
      <div class="form">
        <div class="input-data">
          <div class="label">
            {{ langs.formFio.value }}
            <div class="blue">*</div>
          </div>
          <input
            name="fio"
            v-model="fio"
            :placeholder="langs.formFioExample.value"
          />
        </div>
        <div class="input-data">
          <div class="label">
            {{ langs.formMail.value }}
            <div class="blue">*</div>
          </div>
          <input
            name="email"
            v-model="email"
            :placeholder="langs.formMailExample.value"
          />
        </div>
        <div class="input-data">
          <div class="label">{{ langs.formPhone.value }}</div>
          <input
            name="phone"
            v-model="phone"
            :placeholder="langs.formPhoneExample.value"
          />
        </div>
        <div class="input-data">
          <div class="label">{{ langs.formCountry.value }}</div>
          <input
            name="country"
            v-model="country"
            :placeholder="langs.formCountryExample.value"
          />
        </div>
        <div class="input-data">
          <div class="label">{{ langs.formDescExample.value }}*</div>
          <input
            name="description"
            v-model="description"
            :placeholder="langs.formDescExample.value"
          />
        </div>
        <div class="input-data">
          <div class="label">{{ langs.formSum.value }}</div>
          <input
            name="sum"
            v-model="sum"
            :placeholder="langs.formSumExample.value"
          />
        </div>
        <div class="input-data">
          <div class="label">{{ langs.formCode.value }}</div>
          <input
            name="code"
            v-model="code"
            :placeholder="langs.formCodeExample.value"
          />
        </div>
        <div class="input-data">
          <div class="label">{{ langs.formOutSource.value }}</div>
          <input
            name="outSourcing"
            v-model="outSourcing"
            :placeholder="langs.formOutSourceExample.value"
          />
        </div>
        <div class="input-data">
          <div class="label">{{ langs.formWeight.value }}</div>
          <input
            name="weight"
            v-model="weight"
            :placeholder="langs.formWeight.value"
          />
        </div>
        <div id="req-mobile" class="required-field">
          <div class="blue">*</div>
          <div class="required">{{ langs.formReq.value }}</div>
        </div>
        <button class="submit" @click="add">{{ langs.formCalc.value }}</button>
      </div>

      <div id="req-desktop" class="required-field">
        <div class="blue">*</div>
        <div class="required">{{ langs.formReq.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back {
  background: #f8f8f8;
  padding-top: 80px;
  padding-bottom: 80px;
}
.calculator-form {
  margin-right: 12%;
  margin-left: 12%;
}
.title {
  font-size: 48px;
  width: 600px;
  font-weight: 600;
}
.form {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
}
.input-data {
  width: 49%;
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
}

.input-data .label {
  font-size: 20px;
  display: flex;
  color: #2b2b2b;
  font-weight: 500;
  margin-bottom: 10px;
}
.input-data input {
  font-size: 24px;
  padding-left: 38px;
  padding-top: 12px;
  border-radius: 12px;
  border: 1px solid #d9d9d9;
  font-weight: 300;
  background: #f4f4f4;
  color: black;
  padding-bottom: 12px;
}
.input-data input::placeholder {
  color: #a9a9a9;
}
.submit {
  width: 49%;
  font-size: 24px;
  font-weight: 500;
  height: 54px;
  border-radius: 12px;
  background: var(--primary-primary);
  border: none;
  color: white;
  margin-bottom: 10px;
  margin-top: auto;
}
.blue {
  color: var(--primary-primary);
}
.required-field {
  display: flex;
  font-size: 28px;
  font-weight: 300;
  width: 100%;
  color: #5f5f5f;
  margin-top: 30px;
}
#req-mobile {
  display: none;
}

@media (max-width: 1028px) {
  .input-data,
  .submit,
  .title {
    width: 99%;
  }
  #req-desktop {
    display: none;
  }
  #req-mobile {
    display: flex;
    margin-top: 24px;
    margin-bottom: 40px;
  }
}

@media (max-width: 800px) {
  .title {
    font-size: 28px;
  }
  .back {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .input-data .label,
  .input-data input {
    font-size: 18px;
  }
  .input-data input {
    padding-left: 20px;
    width: 100%;
  }
  .required-field {
    font-size: 18px;
  }
}
</style>
