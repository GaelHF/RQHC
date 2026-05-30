<script setup>
import { useHome } from './home.js'

const {
  isFuture, units,
  aboutCards,
  teamMembers, slide, nextSlide, prevSlide, goTo,
  starsCanvas,
} = useHome()
</script>

<template>
  <!-- ═══ HERO ══════════════════════════════════════════════ -->
  <section class="hero">
    <canvas class="star-canvas" ref="starsCanvas"></canvas>
    <div class="hero-bg"></div>

    <div class="hero-content">
      <div class="hero-emblem">
        <div class="emblem-pulse outer"></div>
        <div class="emblem-pulse inner"></div>
        <img src="/RQHCFlag.jpg" alt="Drapeau du RQHC" class="emblem-img" />
      </div>

      <span class="hero-eyebrow">WorldEra · Serveur Minecraft</span>

      <h1 class="hero-title">
        <span class="deco">✦</span> RQHC <span class="deco">✦</span>
      </h1>

      <p class="hero-sub">Royaume du Québec et de la Baie d'Hudson</p>

      <div class="hero-rule">
        <span></span><em>⚜</em><span></span>
      </div>

      <p class="hero-desc">
        Un pays représentant les valeurs du Québec et de la Baie d'Hudson<br>
        dans l'univers de <em>WorldEra</em>.
      </p>

      <div class="hero-cta">
        <a href="https://discord.gg/6cYtpVj98V" target="_blank" class="btn-royal">
          <i class="bi bi-discord"></i> Rejoindre le Royaume
        </a>
        <router-link :to="{ name: 'Map' }" class="btn-royal btn-ghost">
          <i class="bi bi-map"></i> Explorer la Carte
        </router-link>
      </div>
    </div>

    <div class="hero-scroll-hint">
      <span>Défiler</span>
      <i class="bi bi-chevron-down bounce"></i>
    </div>
  </section>

  <!-- ═══ COUNTDOWN ════════════════════════════════════════ -->
  <section class="countdown-section">
    <div class="s-inner">
      <span class="s-badge">⏱ Horloge Royale</span>
      <h2 class="s-title">
        {{ isFuture ? "Compte à rebours jusqu'au lancement" : 'Temps écoulé depuis le lancement' }}
      </h2>
      <p class="s-sub">de WorldEra — 30 mai 2026</p>

      <div class="cd-grid">
        <div class="cd-seg" v-for="unit in units" :key="unit.label">
          <div class="cd-card">
            <div class="cd-shimmer"></div>
            <span class="cd-val">{{ unit.value }}</span>
            <span class="cd-lbl">{{ unit.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ ABOUT CARDS ═══════════════════════════════════════ -->
  <section class="about-section">
    <div class="s-inner">
      <span class="s-badge">✦ Notre Mission</span>
      <h2 class="s-title">Le Royaume en bref</h2>

      <div class="cards-grid">
        <div
          class="info-card reveal"
          v-for="(card, i) in aboutCards"
          :key="i"
          :style="{ '--d': i * 0.12 + 's' }"
        >
          <div class="card-ico">
            <i :class="['bi', card.icon]"></i>
          </div>
          <h3 class="card-h">{{ card.title }}</h3>
          <p class="card-p">{{ card.body }}</p>
          <div class="card-top-line"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ TEAM CAROUSEL ════════════════════════════════════ -->
  <section class="team-section">
    <div class="s-inner">
      <span class="s-badge">👑 Gouvernement Royal</span>
      <h2 class="s-title">Membres du Gouvernement</h2>
      <p class="s-sub-text">Le conseil qui gouverne le RQHC</p>

      <div class="carousel">
        <button class="c-btn c-prev" @click="prevSlide" aria-label="Précédent">
          <i class="bi bi-chevron-left"></i>
        </button>

        <div class="c-window">
          <div class="c-track" :style="{ transform: `translateX(-${slide * 100}%)` }">
            <div class="c-slide" v-for="(m, i) in teamMembers" :key="i">
              <div class="member-card">
                <div class="m-avatar">
                  <i :class="['bi', m.icon]"></i>
                </div>
                <div class="m-crown" v-if="m.isKing">♛</div>
                <h3 class="m-name">{{ m.name }}</h3>
                <div class="m-rule"></div>
                <p class="m-title">{{ m.title }}</p>
                <p class="m-desc">{{ m.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <button class="c-btn c-next" @click="nextSlide" aria-label="Suivant">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>

      <div class="c-dots">
        <button
          class="dot"
          v-for="(_, i) in teamMembers"
          :key="i"
          :class="{ active: i === slide }"
          @click="goTo(i)"
        ></button>
      </div>

      <p class="team-note">Soyez respectueux envers tous les membres du gouvernement.</p>
    </div>
  </section>

  <!-- ═══ LINKS ════════════════════════════════════════════ -->
  <section class="links-section">
    <div class="s-inner">
      <span class="s-badge">🔗 Liens Importants</span>
      <h2 class="s-title">Rejoignez l'Aventure</h2>

      <div class="links-grid">
        <a href="https://discord.gg/UdE4kADuvB" target="_blank" class="l-card">
          <i class="bi bi-globe2"></i>
          <h3>WorldEra</h3>
          <p>Rejoindre le serveur Minecraft officiel</p>
          <span class="l-arrow"><i class="bi bi-arrow-up-right"></i></span>
        </a>

        <a href="https://discord.gg/6cYtpVj98V" target="_blank" class="l-card l-discord">
          <i class="bi bi-discord"></i>
          <h3>Discord RQHC</h3>
          <p>Notre communauté Discord</p>
          <span class="l-arrow"><i class="bi bi-arrow-up-right"></i></span>
        </a>

        <router-link :to="{ name: 'Map' }" class="l-card l-map">
          <i class="bi bi-map-fill"></i>
          <h3>Carte Interactive</h3>
          <p>Explorer les territoires du RQHC</p>
          <span class="l-arrow"><i class="bi bi-arrow-up-right"></i></span>
        </router-link>

        <a href="https://github.com/SwitchotG/RQHC/issues" target="_blank" class="l-card l-bug">
          <i class="bi bi-bug-fill"></i>
          <h3>Bug Report</h3>
          <p>Signaler un problème sur GitHub</p>
          <span class="l-arrow"><i class="bi bi-arrow-up-right"></i></span>
        </a>
      </div>

      <p class="contact-note">
        Pour ajouter des informations à la carte, contactez
        <strong>Switchot</strong> sur Discord.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import './home.css';
</style>
