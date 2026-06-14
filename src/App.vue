<template>
  <div id="app">
    <div
      v-if="isPreloaderMounted"
      id="preloader"
      :class="{ 'is-hidden': !isPreloaderVisible }"
      aria-hidden="true"
    ></div>
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
    <a href="#" class="scroll-top d-flex align-items-center justify-content-center" aria-label="Scroll to top">
      <i class="bi bi-arrow-up-short"></i>
    </a>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

const isPreloaderMounted = ref(true)
const isPreloaderVisible = ref(true)
let hideTimerId = null

function hidePreloader() {
  if (!isPreloaderMounted.value || !isPreloaderVisible.value) return

  isPreloaderVisible.value = false

  hideTimerId = window.setTimeout(() => {
    isPreloaderMounted.value = false
  }, 650)
}

onMounted(() => {
  if (document.readyState === 'complete') {
    requestAnimationFrame(() => {
      hidePreloader()
    })
    return
  }

  window.addEventListener('load', hidePreloader, { once: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('load', hidePreloader)

  if (hideTimerId) {
    window.clearTimeout(hideTimerId)
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#preloader.is-hidden {
  opacity: 0;
  visibility: hidden;
}
</style>