<template>
  <div @click="router.push('/home')">登录页</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
