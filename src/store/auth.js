import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({ 
        count: 0,
        address: null,
    }),
    getters: {
        double: (state) => state.count * 2,
        address: state => state.address
    },
    actions: {
        increment() {
            this.count++
        },
        setAddress(a) {
            console.log('a::', a)
        }
    },
})