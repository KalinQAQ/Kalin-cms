<template>
  <div class="list">
    <page-content :contentTableConfig="contentTableConfig"></page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
</script>

<style scoped></style>
