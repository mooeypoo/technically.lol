<template>
  <NuxtLayout>
    <v-app>
      <TopBar />
      <v-app-bar v-if="display.xs">
        <TemplateSwitcher class="mobile-template-switcher" />
      </v-app-bar>
      <v-main>
        <v-container>
          <v-card dark image="~/assets/img/onstage.jpg" class="hero-section">
            <template #image>
              <v-img gradient="to bottom, rgba(39, 39, 39, .5), rgba(39, 39, 39, .9)" />
            </template>
            <v-card-title class="text-white">
              <h2 class="text-white">Moriel Schottlender</h2>
              <p>Where code meets comedy</p>
            </v-card-title>
            <v-card-item>
              <Testimonials />
            </v-card-item>
          </v-card>

          <v-container>
            <h1 v-if="siteTheme === 'corporate'" class="mb-2">Comedy for Everyone</h1>
            <h1 v-else class="mb-2">Laugh your techbro off</h1>
            <IntroSwitcher />
          </v-container>
        </v-container>
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTheme, useDisplay } from 'vuetify';
import { useThemeAbstraction } from '../use/useThemeAbstraction'
import TopBar from '~/components/TopBar.vue'
import Testimonials from '~/components/Testimonials.vue'
import IntroSwitcher from '~/components/IntroSwitcher.vue'
import TemplateSwitcher from './components/TemplateSwitcher.vue'

const display = ref(useDisplay())
const { siteTheme } = useThemeAbstraction()
const vuetifyTheme = useTheme()

// Watch the pinia store's definition of the theme and update the global theme accordingly
watch(siteTheme, (newTheme) => {
  vuetifyTheme.global.name.value = newTheme === 'corporate' ? 'corporateTheme' : 'afterhoursTheme'
  // console.log('theTheme in app.vue', theTheme.value)
})
</script>

<style lang="scss">
.v-application {
  .mobile-template-switcher {
    margin: 0 auto;
  }

  .hero-section {
    background-color: #272727;

    .v-parallax img {
      opacity: 0.8;
    }
  }

  &.v-theme--corporateTheme {
    font-family: 'Lato', sans-serif;

    h1, h2, h3 {
      font-family: 'Playfair Display';
    }

  }

  &.v-theme--afterhoursTheme {
    font-family: 'Montserrat', sans-serif;

    h1, h2, h3 {
      font-family: 'Chelsea Market';
    }
  }
}
</style>