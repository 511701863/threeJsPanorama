import { AppRouteRecordRaw } from '@/types/routeType';
const LAYOUT = () => import('@/layout/index.vue');

const routes: AppRouteRecordRaw = {
    path: '/three',
    name: 'Three',
    component: LAYOUT,
    meta:{
        title:'全景图'
    },
    redirect:'/three/index',
    children: [{
        path: 'index',
        name: 'ThreePage',
        component: () => import('@/views/AboutView.vue'),
        meta:{
            title:'全景图首页'
        }
    }]
}

export default routes;