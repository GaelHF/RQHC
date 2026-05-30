import { ref, onMounted, onUnmounted } from 'vue'

export function useApp() {
  const scrolled    = ref(false)
  const mobileOpen  = ref(false)

  function onScroll() {
    scrolled.value = window.scrollY > 60
  }

  function toggleMobile() {
    mobileOpen.value = !mobileOpen.value
  }

  function closeMobile() {
    mobileOpen.value = false
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { scrolled, mobileOpen, toggleMobile, closeMobile }
}
