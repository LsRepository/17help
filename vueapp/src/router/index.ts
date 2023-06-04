import { createRouter, createWebHashHistory } from 'vue-router'
import InputView from '@/components/InputView.vue'
import SerchResult from '@/components/SearchResult.vue'
import SearchCondition from '@/components/SearchCondition.vue'
import AddOrEdit from '@/components/AddOrEdit.vue'
import Upload from '@/Partialpage/Upload.vue'

const routes: any = [
    {
        path: "/",
        component: InputView
    },
    {
        path: "/SearchResult.vue",
        component: SerchResult
    },
    {
        path: "/SearchCondition.vue",
        component: SearchCondition
    }, {
        path: "/AddOrEdit.vue",
        component: AddOrEdit
    }, {
        path: "/Upload.vue",
        component: Upload
    }


]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router