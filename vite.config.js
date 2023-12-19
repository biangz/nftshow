import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import postCssPxToRem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      resolvers: [ArcoResolver()],
      eslintrc: {
        enabled: true, // <-- this
      },
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
          importStyle: 'less',
          exclude: /node_modules/i,
        })
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'arcoblue-6': '#FFA503',
          // 'color-primary-6': '#13c2c2',
          // 'color-primary-6': `rgb(var(~'@{arco-cssvars-prefix}-green-6'))`
        },
        javascriptEnabled: true,
      }
    },
    postcss:{
      plugins:[
        postCssPxToRem({
          rootValue: 50,
          propList:['*'],
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') 
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/localapi': {
        // target: "http://192.168.3.49:9999",
        target: "http://vocosmos-dev.fancynote.vip/v1",
        // target: "https://www.vega.fan/v1/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/localapi/, '')
      },
    }
  }, 
})
