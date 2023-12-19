<template>
    <!-- <img :src="logo" alt=""> -->
    <span class="logo">LOGO</span>
</template>

<script setup>
const logo = new URL('@/assets/logo.png', import.meta.url).href
</script>

<style scoped lang="less">
.logo {
    color: var(--theme-color);
    font-size: 32px;
    font-weight: bold;
}
</style>