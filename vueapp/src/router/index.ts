import { createRouter, createWebHashHistory } from 'vue-router'
import SerchResult from '@/components/SearchResult.vue'
import SearchCondition from '@/components/SearchCondition.vue'
const routes: any = [
    {
        path: "/SearchResult.vue",
        component: SerchResult
    },
    {
        path: "/SearchResult.vue",
        component: SearchCondition
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router