import axios from 'axios'
import ServiceData from '../models/service-data'
import { NewsData } from '../models/news-data.ts'
import { Ref } from 'vue'
import { CreateFormDto, Form } from '../models/form.ts'
import { LangItem } from '../models/lang-item.ts'

const baseURL = 'https://zealcon.ru/api'
//const baseURL = 'http://localhost:3000/api'

const allServices = () =>
  axios<ServiceData[]>({
    method: 'get',
    url: `${baseURL}/services`,
  })

const allNews = (row: number) =>
  axios<NewsData[]>({
    method: 'get',
    url: `${baseURL}/news?row=${row}`,
  })

const countNews = () =>
  axios<{ count: number }>({
    method: 'get',
    url: `${baseURL}/news/count`,
  })

const addForm = (form: CreateFormDto) =>
  axios<CreateFormDto>({
    method: 'post',
    url: `${baseURL}/forms/create`,
    data: form,
  })
const deleteNews = (token: string, id: number) =>
  axios<FormData>({
    method: 'get',
    url: `${baseURL}/news/delete?id=${id}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

const loginRequest = (login: string, password: string) =>
  axios({
    method: 'post',
    url: `${baseURL}/news/login`,
    data: {
      login: login,
      password: password,
    },
  })

const deleteService = (token: string, id: number) =>
  axios({
    method: 'get',
    url: `${baseURL}/services/delete?id=${id}`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
const editService = (
  token: string,
  title: string,
  advantages: string[],
  text: string,
  id: number,
  image,
  image1,
) => {
  const formData = new FormData()
  formData.append('image', image)
  formData.append('image1', image1)
  formData.append('text', text)
  formData.append('title', title)
  formData.append('id', id + '')
  for (const adv of advantages) {
    formData.append('advantages', adv)
  }

  return axios({
    method: 'post',
    url: `${baseURL}/services/edit`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  })
}

const editNews = (
  token: string,
  title: string,
  description: string,
  id: number,
  file,
) => {
  const formData = new FormData()
  if (file != null) formData.append('image', file)
  formData.append('description', description)
  formData.append('title', title)
  formData.append('id', id + '')
  return axios({
    method: 'post',
    url: `${baseURL}/news/edit`,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  })
}
const addService = (
  token: string,
  title: string,
  image,
  advantages: Ref<string>[],
  text: string,
  image1,
) => {
  const formData = new FormData()
  formData.append('image', image)
  formData.append('image', image1)
  formData.append('text', text)
  formData.append('title', title)
  for (const adv of advantages) {
    formData.append('advantages', adv.value)
  }
  return axios({
    method: 'post',
    url: `${baseURL}/services/create`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + token,
    },
    data: formData,
  })
}

const addNews = (token: string, title: string, description: string, image) => {
  const formData = new FormData()
  formData.append('image', image)
  formData.append('description', description)
  formData.append('title', title)
  return axios({
    method: 'post',
    url: `${baseURL}/news/create`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + token,
    },
    data: formData,
  })
}

const allForms = (token: string) =>
  axios({
    method: 'get',
    url: `${baseURL}/forms`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

const allLangs = () =>
  axios({
    method: 'get',
    url: `${baseURL}/lang`,
  })

const editLang = (token: string, form: LangItem) =>
  axios<Form>({
    method: 'post',
    url: `${baseURL}/lang/edit`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    data: form,
  })

const getById = function (token: string, id: number) {
  console.log(id)
  return axios<NewsData>({
    method: 'get',
    url: `${baseURL}/news/getById?id=` + id,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
}

export {
  baseURL,
  allServices,
  editService,
  deleteService,
  allNews,
  countNews,
  addService,
  addForm,
  loginRequest,
  editLang,
  addNews,
  allForms,
  allLangs,
  deleteNews,
  getById,
  editNews,
}
