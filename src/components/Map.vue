<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'

import territories from '@/data/mapData.json'

import 'leaflet/dist/leaflet.css'

onMounted(() => {

  // Création de la carte
  const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
  })

  // Taille image
  const width = 8248
  const height = 6214

  const bounds = [
    [0, 0],
    [height, width]
  ]

  // Image
  L.imageOverlay('/carte_worldera.png', bounds).addTo(map)

  // Zoom automatique
  map.fitBounds(bounds)

  // Génération des territoires
  territories.forEach(territory => {

    territory.points.forEach(point => {
        point[0] = height - point[0]
    })

    const polygon = L.polygon(
      territory.points,

      {
        color: 'transparent',
        fillColor: territory.color,
        fillOpacity: 0
      }

    ).addTo(map)

    // Popup
    polygon.bindPopup(`
      <h2>${territory.data.LongName}</h2>

      <p>Coming soon...</p>
    `)

    // Hover
    polygon.on('mouseover', () => {

      polygon.setStyle({
        fillOpacity: 0.4
      })

    })

    polygon.on('mouseout', () => {

      polygon.setStyle({
        fillOpacity: 0
      })

    })

  })

})
</script>

<template>
  <div id="map" style="width: 8248px; height: 6214px;"></div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  transform: none !important;
}
</style>