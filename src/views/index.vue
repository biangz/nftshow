<template>

    <div class="banner md:h-[16rem] bg-cover md:bg-contain">
        <div class="inner w-[20rem] md:w-[35rem] flex items-center gap-4">
            <div class="discription py-10 md:py-0">
                <h1 data-aos="fade-up" data-aos-once="true">HXXH</h1>
                <h1 data-aos="fade-up" data-aos-once="true">Pioneering Decentralized UTXO-Based NFT Social Protocol</h1>
                <p data-aos="fade-up" data-aos-once="true">HXXH is at the vanguard of decentralized social platforms, integrating UTXO-based mechanisms with the dynamic world of NFTs to redefine online interactions. It's a space where users can truly own and control their data, engage in secure communications, and partake in a new economy of digital collectibles, all underpinned by the principles of UTXO technology.</p>
                <button data-aos="fade-up" data-aos-once="true" class="launch">Coming <icon-arrow-right /></button>
            </div>
            <img class="w-24 hidden md:block" src="../assets/HXXH.png" alt="">
        </div>
    </div>

    <div class="instroduction px-4 text-center flex flex-col items-center">
        <h1 data-aos="fade-up" data-aos-once="true">Why HXXH is your better social future.</h1>
        <p data-aos="fade-up" data-aos-once="true">Unite, Innovate, Transact: HXXH - Bridging UTXO BTC Inscriptions with Multi-Chain NFTs in a Decentralized Social Ecosystem</p>
        <div class="mt-[1.8rem] grid md:w-[25rem] grid-cols-1 md:grid-cols-2 gap-y-[1.6rem] gap-x-[2.6rem]">
            <dl class="flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
                <dt class="img-wrapper"><img class="block" src="../assets/images/icon-01.png" alt=""></dt>
                <dd class="font-bold">The Economic Foundation</dd>
                <dd>At the heart of HXXH lies the innovative use of UTXO BTC inscriptions, forming the economic backbone of the platform. This unique approach leverages the reliability of Bitcoin's UTXO model, ensuring a robust and secure financial infrastructure</dd>
            </dl>
            <dl class="flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
                <dt class="img-wrapper"><img src="../assets/images/icon-02.png" alt=""></dt>
                <dd class="font-bold">Community Fusion</dd>
                <dd>HXXH's protocol seamlessly integrates NFT assets from various blockchains, creating a diverse and inclusive NFT community. This integration not only enhances user experience but also fosters a unified platform for digital asset enthusiasts</dd>
            </dl>
            <dl class="flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
                <dt class="img-wrapper"><img src="../assets/images/icon-03.png" alt=""></dt>
                <dd class="font-bold">Defining Interactive Behaviors</dd>
                <dd>The platform's social protocol introduces expandable social behaviors, linking the foundational UTXO inscriptions with the vibrant NFT community. This design enables rich, meaningful social interactions within the HXXH ecosystem</dd>
            </dl>
            <dl class="flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
                <dt class="img-wrapper"><img src="../assets/images/icon-04.png" alt=""></dt>
                <dd class="font-bold">Harmonizing Assets and Community</dd>
                <dd>HXXH skillfully blends its inscription-based assets with NFT communities into its product offerings. This integration enriches the platform, making every social action a part of a larger, interconnected digital narrative</dd>
            </dl>
        </div>
    </div>

    <div class="version-box">
        <div class="inner md:w-[25rem] flex flex-col-reverse md:flex-row items-center gap-[3rem]">
            <img class="version-img" src="../assets/images/pic-version.png" data-aos="zoom-in" data-aos-once="true" alt="">
            <div class="text-center px-8 md:px-0 md:text-left">
                <h1 class="title" data-aos="fade-up" data-aos-once="true">Our Mission</h1>
                <p class="des" data-aos="fade-up" data-aos-once="true">HXXH's mission is to redefine social networking through a secure, decentralized platform, uniting UTXO BTC inscriptions and multi-chain NFTs for empowering user-driven interactions and asset control.</p>
            </div>
        </div>
    </div>
    <div class="version-box pt-8">
        <div class="inner md:w-[25rem] flex flex-col-reverse md:flex-row items-center gap-[3rem]">
            <div class="text-center px-8 md:px-0 md:text-left">
                <h1 class="title" data-aos="fade-up" data-aos-once="true">Our Vision</h1>
                <p class="des" data-aos="fade-up" data-aos-once="true">HXXH envisions a future of social networking that is seamlessly integrated with blockchain technology, fostering a transparent, community-driven ecosystem for authentic digital engagement and asset management.</p>
            </div>
            <img class="version-img" src="../assets/images/pic-version-02.png" data-aos="zoom-in" data-aos-once="true" alt="">
        </div>
    </div>

    <div class="visiter-box flex flex-col items-center">
        <h1 class="title" data-aos="fade-up" data-aos-once="true">What our community says</h1>
        <p class="des" data-aos="fade-up" data-aos-once="true">Learn from our users about their transformative experiences and groundbreaking opportunities with HXXH.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-4 mt-[1.8rem]">
            <div class="item" data-aos="fade-up" data-aos-once="true">
                <div class="item-inner bg-white">
                    <div class="flex items-center">
                        <img class="w-[1.28rem] block" :src="AVATAR01" alt="">
                        <span class="font-bold text-[0.52rem] ml-[0.3rem]">Block***eth</span>
                    </div>
                    <img class="w-[2.74rem] block my-[0.2rem]" :src="START" alt="">
                    <p class="text-[0.4rem]">Embarking on the HXXH platform has completely changed my view on social networking. The seamless integration of UTXO and NFTs into my daily interactions is not just innovative, it's revolutionary!</p>
                </div>
            </div>
            <div class="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
                <div class="item-inner bg-white">
                    <div class="flex items-center">
                        <img class="w-[1.28rem] block" :src="AVATAR02" alt="">
                        <span class="font-bold text-[0.52rem] ml-[0.3rem]">Crypt***os.dao</span>
                    </div>
                    <img class="w-[2.74rem] block my-[0.2rem]" :src="START" alt="">
                    <p class="text-[0.4rem]">Never thought I'd see the day when a social protocol could effectively combine UTXO inscriptions with a thriving NFT marketplace. HXXH has done just that, and it's been a game-changer for my digital interactions.</p>
                </div>
            </div>
            <div class="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                <div class="item-inner bg-white">
                    <div class="flex items-center">
                        <img class="w-[1.28rem] block" :src="AVATAR03" alt="">
                        <span class="font-bold text-[0.52rem] ml-[0.3rem]">Nan***.nft</span>
                    </div>
                    <img class="w-[2.74rem] block my-[0.2rem]" :src="START" alt="">
                    <p class="text-[0.4rem]">The ability to integrate my NFT collections within a social platform like HXXH has opened up a whole new world of networking and asset management. It's the future, and I'm here for it!:)</p>
                </div>
            </div>
        </div>
    </div>

    <div data-aos="fade-up" data-aos-once="true" class="question-box flex flex-col md:flex-row justify-center items-center md:items-start bg-[#F9FAFF] color-[#2A2934]">
        <div class="md:ml-[1.4rem]">
            <h1 class="title">Frequently Asked Questions</h1>
            <a-collapse class="collapse" :default-active-key="[]" :expand-icon-position="'right'" :bordered="false">
                <a-collapse-item 
                    v-for="item,index in questions" 
                    :key="index" 
                    :header="item.question" 
                    :style="customStyle"
                >
                    <template #expand-icon="{ active }"><icon-close class="transition-all transform" :class="[active?'rotate-90':'rotate-45' ]" :style="{fontSize:'14px'}" /></template>
                    <p class="qa">{{ item.answer }}</p>
                </a-collapse-item>
            </a-collapse>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth'
import { ref, onMounted, reactive } from 'vue';
import { IconClose, IconArrowRight } from '@arco-design/web-vue/es/icon';
import AOS from "aos";

const AVATAR01 = new URL('@/assets/images/avatar01.png', import.meta.url).href
const AVATAR02 = new URL('@/assets/images/avatar02.png', import.meta.url).href
const AVATAR03 = new URL('@/assets/images/avatar03.png', import.meta.url).href
const START = new URL('@/assets/images/icon_xing.png', import.meta.url).href
const QUESTON = new URL('@/assets/images/qa-pic.png', import.meta.url).href

const questions = ref([
  {
    "question": "How does HXXH work?",
    "answer": "HXXH is a decentralized platform that utilizes UTXO BTC inscriptions to tokenize assets, allowing users to engage in secure, blockchain-based social interactions and NFT integrations."
  },
  {
    "question": "When will HXXH Launch?",
    "answer": "HXXH plans to initially release its whitepaper, followed by the launch of the first version of its protocol in the first quarter of next year, which will also mark the commencement of OG usage."
  },
])
const topList = ref([1,2,3,4,5])
const customStyle = ref({
    backgroundColor: '#F9FAFF',
    border: 'none',
    overflow: 'hidden',
    color: '#64646C',
    fontSize: '0.36rem',
})

const store = useAuthStore()
const handleIncrece = () => {
    store.increment()
}

// onMounted
onMounted(() => {
    AOS.init();
})

</script>

<style scoped lang="less">
.banner {
    background: url('../assets/images/banner-HXXH.jpg') no-repeat top right -200px / cover, linear-gradient(to bottom, var(--bg-theme-color), #0D0D0D);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .inner {
        // width: 1412px;
        .discription {
            h1 {
                font-size: 76px;
                line-height: 1.2;
                margin: 0;
            }
            > p {
                font-size: 24px;
                line-height: 1.4;
                margin-top: 30px;
            }
            .launch {
                font-size: 26px;
                border: 1px solid #fff;
                border-radius: 99PX;
                background-color: transparent;
                padding: 18px 52px;
                margin-top: 82px;
                color: var(--text-color);
                cursor: pointer;
            }
        }
    }
}

.description-box {
    > p {
        font-size: 24px;
        line-height: 1.4;
        margin-top: 30px;
    }
}

.instroduction {
    color: #2A2934;
    background-color: #0D0D0D;
    padding: 88px 0 134px;
    h1 {
        font-size: 54px;
        color: white;
    }
    p {
        margin-top: 12px;
        font-size: 20px;
        color: white;
        width: 80%;
    }
    .grid {

        > dl {
            background-color: white;
            padding: 34px;
            box-shadow: 0px 0px 40px 0px rgba(192,202,213,0.08);
            border-radius: 30px;
            box-sizing: border-box;
            max-width: 500px;
            .img-wrapper {
                height: 108px;
                img {
                    width: 110px;
                }
            }
            dd {
                font-size: 22px;
                width: 100%;
                
                &:nth-of-type(1) {
                    margin: 32px 0 10px;
                }
                &:nth-of-type(2) {
                    color: #5E6F86;
                    font-size: 18px;
                    line-height: 1.3;
                }
            }
        }
    }
}

.version-box {
    background-color: #0D0D0D;
    padding: 46px 0 72px;
    color: white;
    .inner {
        margin: 0 auto;

        .version-img {
            width: 720px;
        }
    }
}

.title {
    font-size: 54px;
}
.des {
    font-size: 20px;
}


.visiter-box {
    color: white;
    padding: 90px 0 125px;
    background-color: #0D0D0D;
    .item {
        width: 374px;
        border-radius: 20px;
        padding: 20px 0 20px 24px;
        color: black;
        &:nth-of-type(1) {
            background: #39AEC0;
        }
        &:nth-of-type(2) {
            background: #FAA37C;
        }
        &:nth-of-type(3) {
            background: #3B5CFF;
        }

        .item-inner {
            width: 414px;
            box-shadow: 0px 9px 20px 0px rgba(0,0,0,0.11);
            border-radius: 20px;
            padding: 30px 30px 24px;
            box-sizing: border-box;
        }
    }
}

.question-box {
    padding: 80px 0 100px;
    background-color: #0D0D0D;

    .title {
        color: white;
    }
    .qa {
        color: white;
        font-size: 18px;
    }
    .collapse {
        width: 712px;
        :deep(.arco-collapse-item) {
            background: #0D0D0D;
            .arco-collapse-item-content {
                background: #0D0D0D;
            }
        }
        /deep/ .arco-collapse-item-header {
            background-color: transparent;
            padding-top: 30px;
            padding-bottom: 30px;
            color: white;
            background: #0D0D0D;
            .arco-collapse-item-header-title {
                font-size: 22px;
                font-weight: bold;
            }
        }
    }
}
</style>