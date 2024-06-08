import { EStoreNames } from '@/stores/storeNames.enum'
import { defineStore } from 'pinia'

interface State {
  count: number
}

export const useCounter = defineStore(EStoreNames.COUNTER, {
  state: (): State => ({
    count: 22
  }),
  getters: {
    getDoubleCount: (state) => state.count * 2
  },
  actions: {
    setCounter(value: number) {
      this.count = value
    }
  }
})
