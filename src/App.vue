<script setup lang="ts">
import { map } from 'leaflet';

</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
            <div class="container-fluid">
                <img src="/RQHCFlag.jpg" alt="Drapeau du RQHC" class="navbar-brand" style="width:7vw"/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{name:'Home'}" class="nav-link">Accueil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'Map'}" class="nav-link">Map</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://discord.gg/6cYtpVj98V" target="_blank">Nous rejoindre !</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<style scoped>
</style>
