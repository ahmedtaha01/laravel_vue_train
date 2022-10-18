<template>
    <div class="container">
        <div class="products__create ">
    
        <div class="products__create__titlebar dflex justify-content-between align-items-center">
            <div class="products__create__titlebar--item">
                
                <h1 class="my-1">Add Company</h1>
            </div>
        </div>

        <div class="products__create__cardWrapper mt-2">
            
            <div class="products__create__sidebar">
                <!-- Product Organization -->
                <div class="card py-2 px-2 bg-white">
                    
                    <!-- Product unit -->
                    <div class="my-3">
                        <p>name</p>
                        <input type="text" class="input" v-model="name">
                    </div>
                    <hr>
                    <div class="my-3">
                        <p>address</p>
                        <input type="text" class="input" v-model="address">
                    </div>
                    <hr>
                    <div class="my-3">
                        <p>website</p>
                        <input type="text" class="input" v-model="website">
                    </div>
                    <hr>
                    <div class="my-3">
                        <p>email</p>
                        <input type="text" class="input" v-model="email">
                    </div>
                    <hr>

                
                    
                </div>

            </div>
        </div>
        <!-- Footer Bar -->
        <div class="dflex justify-content-between align-items-center my-3">
            <p ></p>
            <button class="btn btn-secondary" @click="saveCompany()">Save</button>
        </div>
    </div>
</div>
</template>

<script>
    import axios from 'axios';
    import { ref } from 'vue'
    import router from '../../router';

    export default{
        name : 'signup',
        data()
        {
            return{
                name:'',
                email:'',
                address:'',
                website:'',
                errors:[],
            }
        },
        methods:{
           saveCompany()
            {
                let result = axios.post("/api/companies",{
                    email:this.email,
                    website:this.website,
                    name:this.name,
                    address:this.address,
                }).catch(error => {
                    this.errors = error.response.data.errors; // this should be errors.
                    console.log(this.errors);
                });
                
                this.$router.push("/companies")
                
                toast.fire({
                    icon:'success',
                    title:'company created successfully'
                })
            }
        }
    }
    
</script>