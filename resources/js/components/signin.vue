<template>

    <div>
        <div class="logo">
        </div>
        <div class="register">
            <input type="email" v-model="email" placeholder="Enter Email">
            <div v-if="errors.email" class="alert alert-danger text-center">
                <span> {{ errors.email[0] }} </span>
            </div>
            <input type="password" v-model="password" placeholder="Enter Password">
            <div v-if="errors.password" class="alert alert-danger text-center">
                <span> {{ errors.password[0] }} </span>
            </div>
            <div v-if="errors.error" class="alert alert-danger text-center">
                <span> {{ errors.error[0] }} </span>
            </div>
            <button v-on:click="signUp" >Sign Up</button>
            
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    export default{
        data()
        {
            return{
                email:'',
                password:'',
                errors:[],
                message:''
            }
        },
        methods:{
           signUp()
            {
                axios.post("/api/login",{
                    email:this.email,
                    password:this.password,
                })
                .then(() => {
                    this.$router.push("companies")
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                    this.message = error.response.data.message
                })
            }
        }
    }
</script>


<style>
.logo{
    margin-left: 45%;
    margin-top: 10px;
}
img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid rgb(48, 124, 155) ;
    border-radius: 10px;
    outline:none;
   
}
.register button{
    width: 250px;
    height: 40px;
    border: 2px solid rgb(79, 85, 120);
    background-color: rgb(26, 71, 153);
    color: white;
    cursor: pointer;
    border-radius: 10px;
    margin-left: 42%;
    font-weight: bold;
}
.register button:hover{
    background-color: rgb(37, 115, 205);
}
</style>