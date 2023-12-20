<template>
    <header class="sticky top-0 w-full flex items-center px-[0.8rem] md:px-[5.12rem]">
        <Logo class="logo block w-[1.4rem]"/>
        <div class="flex items-center gap-x-4 ml-auto">
            <w3m-button :balance="'hide'"/>
        </div>
    </header>
</template>

<script setup>
import { onMounted } from 'vue';
import { getAccount } from '@wagmi/core';
import { useWeb3Modal } from '@web3modal/wagmi/vue'
const { open, close } = useWeb3Modal()

import { useAuthStore } from '@/store/auth'
const authStore = useAuthStore()

const handleIncrece = (address) => {
    authStore.setAddress(address)
}

const handleConnectWallet = async () => {
    open().then(res => {
        console.log('res:', res)
    })
    
}

onMounted(() => {
    console.log('result:', getAccount())
})

</script>

<style scoped lang="less">
header {
    box-sizing: border-box;
    background: var(--bg-theme-color);
    height: var(--header-height);
    z-index: 99;
}
</style>