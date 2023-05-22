<script lang="ts" setup>
import { useRouter} from 'vue-router'
const router = useRouter()
</script>

<template>
    <div class="h-screen flex flex-col">
        <div class="h-[100px] w-screen px-[30px] pt-normal">
            <button class="p-[20px] border-blue-300 border bg-slate-100 hover:bg-blue-500 hover:text-white" @click="router.push('/home/index')">首页</button>
            <button class="p-[20px] border-blue-300 border bg-slate-100 hover:bg-blue-500 ml-large hover:text-white" @click="router.push('/three')">three</button>
        </div>
        <div class="bg-contentBg box-border flex-1 overflow-y-auto flex justify-between p-normal w-screen">
            <router-view v-slot="{ Component, route }">
                <transition name="fade" mode="out-in" appear>
                    <component :is="Component" :key="route.name" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<style></style>
