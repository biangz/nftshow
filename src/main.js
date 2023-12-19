import { createApp } from 'vue'
import { setupRouter } from './router';
import { setupAssets } from './plugins';
import { setupAxios } from './axios';
import { setupStore } from './store';
import App from './App.vue'
import AppLoading from '@/components/layout/appLoading.vue';

async function setupApp() {
    
    // app loading
    let appLoading = createApp(AppLoading)
    appLoading.mount('#AppLoading')
    
    // app
    let app = createApp(App)
    
    setupAssets(app)

    setupStore(app)

    setupAxios()

    // 路由
    await setupRouter(app)

    appLoading.unmount();
    
    // 挂载
    app.mount('#app');
}

setupApp()
