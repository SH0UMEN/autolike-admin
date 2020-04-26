import Vue from 'vue'
import VueRouter from 'vue-router'
import CurrentRequests from '../views/CurrentRequests'
import ApprovedRequests from '../views/ApprovedRequests'
import DepositHistory from '../views/DepositHistory'
import Bots from '../views/Bots'
import SocialsManagement from '../views/SocialsManagement'
import IndexTemplate from '../views/IndexTemplate'
import SupportMessages from '../views/SupportMessages'
import SupportHistory from '../views/SupportHistory'
import Auth from '../views/Auth'
import store from '../store'
import Statistics from '../views/Statistics'

Vue.use(VueRouter)

function isAuthenticated(to, from, next) {
    if(store.getters.isAuthenticated) {
        next()
        // if(!store.getters.getUser) {
        //
        // }
    } else {
        next({ name: "auth" })
    }
    return
}

const routes = [
    {
        path: "/auth",
        name: "auth",
        component: Auth
    },
    {
        path: "/",
        name: "index",
        component: IndexTemplate,
        beforeEnter: isAuthenticated,
        redirect: () => {
            return { name: 'current-requests' }
        },
        children: [
            {
                path: '/current-requests',
                name: 'current-requests',
                component: CurrentRequests
            },
            {
                path: '/approved-requests',
                name: 'approved-requests',
                component: ApprovedRequests
            },
            {
                path: '/deposit-history',
                name: 'deposit-history',
                component: DepositHistory
            },
            {
                path: '/statistics',
                name: 'statistics',
                component: Statistics
            },
            {
                path: '/social-management',
                name: 'social-management',
                component: SocialsManagement
            },
            {
                path: '/support-messages',
                name: 'support-messages',
                component: SupportMessages
            },
            {
                path: '/support-history',
                name: 'support-history',
                component: SupportHistory
            },
            {
                path: '/bots',
                name: 'bots',
                component: Bots
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
