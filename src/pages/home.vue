<template>
  <div @click="router.push('/login')">首页</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
