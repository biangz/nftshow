<template>
    <footer class="py-8 md:py-4">
        <div class="inner flex flex-col md:flex-row md:w-[30rem] mx-auto items-center">
            <div class="left">
                <img :src="LOGO" class="w-4" alt="">
                <h3 class="font-bold text-[0.51rem] py-2 text-center md:text-left">Contact Us: <a href="mailto:hxxhbtc@gmail.com">hxxhbtc@gmail.com</a></h3>
                <!-- <div class="bg-white flex items-center rounded-full input-box">
                    <img class="w-[0.46rem]" :src="MESS" alt="">
                    <div class="w-[1px] h-2 bg-[#6E777E] mx-[0.32rem]"></div>
                    <input class="input" type="text">
                    <button class="rounded-full">SUBSCRIBE</button>
                </div> -->
                <p class="text-[#808080] text-[0.36rem] mt-3"><span>Terms of Service</span> <span class="ml-4">Privacy Policy</span></p>
            </div>
            <div class="right mt-4 md:mt-0 md:ml-auto flex flex-col items-center">
                <h3 class="font-bold text-[0.51rem]">Join our Community</h3>
                <div class="flex items-center gap-x-[0.6rem] my-3">
                    <a href="https://t.me/HXXHCommunity" target="_blank" class="hover:opacity-80"><div class="icon i-basil-telegram-solid"></div></a>
                    <a href="https://twitter.com/hxxh_brc20" target="_blank" class="hover:opacity-80"><div class="icon i-basil-twitter-solid"></div></a>
                </div>
                <p class="text-[#808080] text-[0.36rem]">Copyright © 2023 HXXH</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const LOGO = new URL('@/assets/HXXH.png', import.meta.url).href
const DISCORD = new URL('@/assets/images/icon-discord.png', import.meta.url).href
const TWITTER = new URL('@/assets/images/icon-twitter.png', import.meta.url).href
const MD = new URL('@/assets/images/icon-md.png', import.meta.url).href
const MESS = new URL('@/assets/images/icon-message.png', import.meta.url).href

</script>

<style lang="less" scoped>
footer {
    background-color: #0D0D0D;
    border-top: 1px solid darkgray;
    .logo {
        color: var(--theme-color);
        font-size: 32px;
        font-weight: bold;
    }

    .icon {
        color: white;
        font-size: 40px;
    }
    .inner {
        color: var(--text-color);

        .input-box {
            padding: 4px 4px 4px 25px;
            .input {
                background: transparent;
                border: none;
                font-size: 20px;
                height: 20px;
                padding: 10px 0;
                width: 6rem;
                outline: none;
                color: #222;
            }
            button {
                font-size: 18px;
                background-color: #3B5CFF;
                padding: 12px 16px;
                border: 0;
            }
        }

    }
}
</style>