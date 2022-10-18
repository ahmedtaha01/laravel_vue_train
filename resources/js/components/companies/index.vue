<template>
    <h1>companies list</h1>
    <div class="container">
        <div class="products__list table  my-3">
              <div>{{ user.name }}</div>
              <div class="customers__titlebar dflex justify-content-between align-items-center">
                  <div class="customers__titlebar--item">
                      <h1 class="my-1">Products</h1>
                  </div>
                  <div class="customers__titlebar--item">
                      <button class="btn btn-secondary my-1" @click="newCompany()">
                          Add Product
                      </button>
                  </div>
                  <div class="customers__titlebar--item">
                      <button class="btn btn-secondary my-1" @click="logout()">
                          Logout
                      </button>
                  </div>
              </div>
      
              <div class="table--heading mt-2 products__list__heading " style="padding-top: 20px;background:#FFF">
                  <!-- <p class="table--heading--col1">&#32;</p> -->
                  <p class="table--heading--col1">image</p>
                  <p class="table--heading--col2">
                      Product
                  </p>
                  <p class="table--heading--col3">email</p>
                  <p class="table--heading--col4">
                      adrress
                  </p>
                  <!-- <p class="table--heading--col5">&#32;</p> -->
                  <p class="table--heading--col5">actions</p>
              </div>
      
              <!-- product 1 -->
              <div class="table--items products__list__item" v-for="item in companies" :key="item.id" v-if="companies.length > 0">
                  <div class="products__list__item--imgWrapper">
                      <img class="products__list__item--img" src="1.jpg"  style="height: 40px;">
                  </div>
                  <a href="# " class="table--items--col2">
                      {{ item.name }}
                  </a>
                  <p class="table--items--col2">
                      {{ item.email }}
                  </p>
                  <p class="table--items--col3">
                      {{ item.address }}
                  </p>
                    
                  <div>     
                      <button class="btn-icon btn-icon-success" >
                          <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button class="btn-icon btn-icon-danger" @click="deleteCompany(item.id)">
                          <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
              </div>
              <div v-else>
                companies not found
              </div>
          </div>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted,ref } from 'vue'
    import { useRouter } from 'vue-router'

    
    const router = useRouter()
    let companies = ref([])
    let user = ref([])

    onMounted( async () => {
        getCompanies()
        User()
    })

    const User = async () => {
        let response = await axios.get('/api/user')
        user.value = response.data 
    }

    const newCompany = () => {
        router.push('/companies/new')
    }

    const getCompanies = async() =>{
        let response = await axios.get('/api/companies')
        companies.value = response.data.data 
    }

    const deleteCompany = (id) =>{
        axios.delete('/api/companies/'+id)
        getCompanies()
    }

    const logout = () =>{
        axios.post('/api/logout')
        router.push('/signin')
    }


</script>