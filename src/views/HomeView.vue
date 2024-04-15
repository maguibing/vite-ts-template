<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ChildrenProps from '@/components/children-props.vue';

const msg = ref('helloworld')

onMounted(() => {

})

</script>

<template>
  <main>
    <children-props :msg="msg" />
  </main>
</template>
