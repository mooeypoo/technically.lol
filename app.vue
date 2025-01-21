<template>
  <v-app>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTheme, useDisplay } from 'vuetify';
import { useThemeAbstraction } from '../use/useThemeAbstraction'

const display = ref(useDisplay())
const { siteTheme } = useThemeAbstraction()
const vuetifyTheme = useTheme()

// Watch the pinia store's definition of the theme and update the global theme accordingly
watch(siteTheme, (newTheme) => {
  vuetifyTheme.global.name.value = newTheme === 'corporate' ? 'corporateTheme' : 'afterhoursTheme'
})
</script>
