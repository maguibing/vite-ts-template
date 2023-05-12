import { defineStore } from 'pinia';
import { ref } from 'vue';

// defineStore 第一个参数是id，必需且值唯一
export const useHomeStore = defineStore('home', () => {
  const msg = ref('这是首页的pinia');
  return {
    msg,
  };
});
