import { createRouter, createWebHistory } from "vue-router";

import CompaniesIndex from '../components/companies/index'
import CompaniesNew from '../components/companies/new'
import SignUp from '../components/signup'
import SignIn from '../components/signin'

import notFound from '../components/notFound.vue'

const routes = [
    {
        path:'/companies',
        component: CompaniesIndex,
        name:'companies',

        beforeEnter: (to, form, next) =>{
            axios.get("/api/authenticated").then(()=>{
                next()
            }).catch(()=> {
                return next ({ name: 'signin'})
            })
        }    
    },
    {
        path:'/companies/new',
        component: CompaniesNew,
        name:'companies.new'
    },
    {
        path:'/',
        component: SignUp,
    },
    {
        path:'/signin',
        component: SignIn,
        name:'signin'
    },
    {
        path:'/:pathMatch(.*)*',
        component: notFound,
    }
] 

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router