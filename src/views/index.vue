<template>

    <div class="banner md:h-[16rem] bg-cover md:bg-contain">
        <div class="inner md:w-[28rem]">
            <div class="discription py-10 md:py-0">
                <h1 data-aos="fade-up" data-aos-once="true">HXXH</h1>
                <h1 data-aos="fade-up" data-aos-once="true">Pioneering Decentralized UTXO-Based NFT Social Protocol</h1>
                <p data-aos="fade-up" data-aos-once="true">HXXH is at the vanguard of decentralized social platforms, integrating UTXO-based mechanisms with the dynamic world of NFTs to redefine online interactions. It's a space where users can truly own and control their data, engage in secure communications, and partake in a new economy of digital collectibles, all underpinned by the principles of blockchain technology.</p>
                <button data-aos="fade-up" data-aos-once="true" class="launch">Launch APP <icon-arrow-right /></button>
            </div>
        </div>
    </div>

    <div class="instroduction px-4 text-center flex flex-col items-center">
        <h1 data-aos="fade-up" data-aos-once="true">Why HXXH is your better social future.</h1>
        <p data-aos="fade-up" data-aos-once="true">Powered by blockchain technology, DormyAI offers a secure, transparent, and simple investment experience</p>
        <div class="mt-[1.8rem] grid md:w-[25rem] grid-cols-1 md:grid-cols-2 gap-y-[1.6rem] gap-x-[2.6rem]">
            <dl class="flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
                <dt class="img-wrapper"><img class="block" src="../assets/images/icon-01.png" alt=""></dt>
                <dd class="font-bold">Secure Investment</dd>
                <dd>Make investment by Web3 wallet to ensure security</dd>
            </dl>
            <dl class="flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
                <dt class="img-wrapper"><img src="../assets/images/icon-02.png" alt=""></dt>
                <dd class="font-bold">Transparent Transactions</dd>
                <dd>Make investment by Web3 wallet to ensure security</dd>
            </dl>
            <dl class="flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
                <dt class="img-wrapper"><img src="../assets/images/icon-03.png" alt=""></dt>
                <dd class="font-bold">Efficient Buying Process</dd>
                <dd>Make investment by Web3 wallet to ensure security</dd>
            </dl>
            <dl class="flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
                <dt class="img-wrapper"><img src="../assets/images/icon-04.png" alt=""></dt>
                <dd class="font-bold">Easy to Use</dd>
                <dd>Make investment by Web3 wallet to ensure security</dd>
            </dl>
        </div>
    </div>

    <div class="version-box">
        <div class="inner md:w-[25rem] flex flex-col-reverse md:flex-row items-center gap-[3rem]">
            <img class="version-img" src="../assets/images/pic-version.png" data-aos="zoom-in" data-aos-once="true" alt="">
            <div class="text-center px-8 md:px-0 md:text-left">
                <h1 class="title" data-aos="fade-up" data-aos-once="true">Our Vision</h1>
                <p class="des" data-aos="fade-up" data-aos-once="true">To pioneer a blockchain network of tokenised real-word assets, enabling small-scale investors to achieve fractional property ownership worldwide.</p>
            </div>
        </div>
    </div>
    <div class="version-box pt-8">
        <div class="inner md:w-[25rem] flex flex-col-reverse md:flex-row items-center gap-[3rem]">
            <div class="text-center px-8 md:px-0 md:text-left">
                <h1 class="title" data-aos="fade-up" data-aos-once="true">Our Vision</h1>
                <p class="des" data-aos="fade-up" data-aos-once="true">To pioneer a blockchain network of tokenised real-word assets, enabling small-scale investors to achieve fractional property ownership worldwide.</p>
            </div>
            <img class="version-img" src="../assets/images/pic-version-02.png" data-aos="zoom-in" data-aos-once="true" alt="">
        </div>
    </div>

    <div class="visiter-box flex flex-col items-center">
        <h1 class="title" data-aos="fade-up" data-aos-once="true">What our investors say</h1>
        <p class="des" data-aos="fade-up" data-aos-once="true">Learn from our community about their feelings and successful investment experiences</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-4 mt-[1.8rem]">
            <div class="item" data-aos="fade-up" data-aos-once="true">
                <div class="item-inner bg-white">
                    <div class="flex items-center">
                        <img class="w-[1.28rem] block" :src="AVATAR01" alt="">
                        <span class="font-bold text-[0.52rem] ml-[0.3rem]">Catherine_Y</span>
                    </div>
                    <img class="w-[2.74rem] block my-[0.2rem]" :src="START" alt="">
                    <p class="text-[0.4rem]">At first I thought real estate investment was far away from me because I didn't have a lot of money. But through DormyAI I found it is not a problem any more!</p>
                </div>
            </div>
            <div class="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
                <div class="item-inner bg-white">
                    <div class="flex items-center">
                        <img class="w-[1.28rem] block" :src="AVATAR02" alt="">
                        <span class="font-bold text-[0.52rem] ml-[0.3rem]">0xNotfomo.eth</span>
                    </div>
                    <img class="w-[2.74rem] block my-[0.2rem]" :src="START" alt="">
                    <p class="text-[0.4rem]">I believe RWA will definitely be a great narrative in the next cycle. DormyAI is on the right path and hopes it can become the top fractional real estate platform in the future.</p>
                </div>
            </div>
            <div class="item" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                <div class="item-inner bg-white">
                    <div class="flex items-center">
                        <img class="w-[1.28rem] block" :src="AVATAR03" alt="">
                        <span class="font-bold text-[0.52rem] ml-[0.3rem]">Popypinko</span>
                    </div>
                    <img class="w-[2.74rem] block my-[0.2rem]" :src="START" alt="">
                    <p class="text-[0.4rem]">The design of SFT and Fractional Title Deed is amazing! I had imagined the combination of NFT and real estate, but DormyAI gave me a big surprise! Now I want to get more Title deeds :)</p>
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
    "question": "How DormyAI works?",
    "answer": "DormyAI is a Real-World Asset (RWA) platform specializing in tokenizing UK properties. Each property listed on DormyAI is owned by a DAO LLC. This DAO LLC is then tokenized into Square Foot Tokens (SFTs) on the blockchain. When an SFT is purchased, it signifies that the buyer has acquired one square foot of the corresponding property."
  },
  {
    "question": "What's SFT? Is it an ERC-20 Token?",
    "answer": "The Square Foot Token (SFT) is a pioneered token type introduced by DormyAI, representing one square foot of a specific property. SFTs follow the ERC3525 standard, combining features of both ERC20 and ERC721 standards. SFTs of the same property can be combined into a whole unit like an ERC721 NFT or be split like ERC20 tokens."
  },
  {
    "question": "What's fractional title deed?",
    "answer": "On the DormyAI platform, SFT is presented as a fractional title deed of the corresponding property. It is a digital version of the title deed, representing fractional ownership of the property. It holds the same legal validity as the physical counterpart."
  },
  {
    "question": "Why should I invest in UK real estate?",
    "answer": "Investing in UK real estate can offer several advantages, including a stable and transparent legal system, a strong rental market, potential for capital appreciation, and a diversified property portfolio. The UK also has a robust economy and a reputation for property investment."
  },
  {
    "question": "What are the unique benefits of investing in UK real estate compared with other countries?",
    "answer": "The UK real estate market is known for its stability, well-established legal framework, and attractive rental yields. Additionally, London, in particular, is considered a global financial hub, attracting international investors. The UK offers a diverse range of property types, from residential to commercial, and it has a history of strong property price growth."
  },
  {
    "question": "Why does DormyAI focus on the students' housing market?",
    "answer": "DormyAI focuses on the student housing market due to its potential for steady rental income and long-term demand. Student housing can be a resilient investment sector because universities tend to have a consistent influx of students seeking accommodation."
  }
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
    background: url('../assets/images/banner-HXXH.png') no-repeat top right / 900px, linear-gradient(to bottom, var(--bg-theme-color), #0D0D0D);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .inner {
        // width: 1412px;
        .discription {
            width: 740px;
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
    }
    .grid {

        > dl {
            background-color: white;
            padding: 34px 134px;
            box-shadow: 0px 0px 40px 0px rgba(192,202,213,0.08);
            border-radius: 30px;
            box-sizing: border-box;
            .img-wrapper {
                height: 108px;
                img {
                    width: 110px;
                }
            }
            dd {
                font-size: 22px;
                max-width: 270px;
                &:nth-of-type(1) {
                    margin: 32px 0 10px;
                }
                &:nth-of-type(2) {
                    color: #5E6F86;
                    font-size: 18px;
                    line-height: 1.1;
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