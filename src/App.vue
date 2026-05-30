<script setup>
import { useApp } from './app.js'

const { scrolled, mobileOpen, toggleMobile, closeMobile } = useApp()
</script>

<template>
  <div class="app-root">
    <nav class="royal-nav" :class="{ scrolled }">
      <div class="nav-inner">
        <router-link :to="{ name: 'Home' }" class="nav-brand">
          <div class="brand-ring">
            <img src="/RQHCFlag.jpg" alt="RQHC" class="brand-img" />
          </div>
          <span class="brand-label">RQHC</span>
        </router-link>

        <button
          class="nav-burger"
          :class="{ open: mobileOpen }"
          @click="toggleMobile"
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        <div class="nav-menu" :class="{ open: mobileOpen }">
          <router-link :to="{ name: 'Home' }" class="nav-link-royal" @click="closeMobile">
            <i class="bi bi-house-door-fill"></i> Accueil
          </router-link>
          <router-link :to="{ name: 'Map' }" class="nav-link-royal" @click="closeMobile">
            <i class="bi bi-map-fill"></i> Carte
          </router-link>
          <a class="nav-link-royal nav-discord" href="https://discord.gg/6cYtpVj98V" target="_blank" @click="closeMobile">
            <i class="bi bi-discord"></i> Nous rejoindre
          </a>
        </div>
      </div>
    </nav>

    <main class="app-main">
      <router-view />
    </main>

    <footer class="royal-footer">
      <div class="footer-inner">
        <div class="footer-fleur">⚜</div>
        <p class="footer-title">RQHC — Royaume du Québec et de la Baie d'Hudson</p>
        <p class="footer-sub">
          WorldEra &copy; {{ new Date().getFullYear() }}
          &nbsp;·&nbsp;
          <a href="https://github.com/SwitchotG/RQHC/issues" target="_blank">Signaler un bug</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import './app.css';
</style>
