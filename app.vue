<template>
  <NuxtLayout>
    <v-app>
      <TopBar />
      <v-main>
        <v-container class="text-center">
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
          </v-container>

          <v-container class="text-center">
            <h2 class="mb-2">Comedy for any events</h2>
            <v-divider class="mb-4" />
            <ProminentTemplateSwitcher />
          </v-container>

          <v-container class="text-center">
            <h2 v-if="siteTheme === 'corporate'" class="mb-2">Comedy for all audiences</h2>
            <h2 v-else class="mb-2">Laugh your techbro off</h2>
            <v-divider class="mb-4" />
            <IntroSwitcher class="text-left" />
          </v-container>

          <v-container class="text-center">
            <h2 v-if="siteTheme === 'corporate'" class="mb-2">Engineering expertise</h2>
            <h2 v-else class="mb-2">10x engineer</h2>
            <v-divider class="mb-4" />
            <v-card color="accent">
              <v-card-item class="text-left">
                <p class="mb-2">Moriel is a physicist turned software engineer turned systems architect, currently working on modernizing Wikipedia’s systems. She’s an Open Source enthusiast, right-to-left language support and localization evangelist, and a general domain hoarder.</p>
                <p>Moriel has presented in technical conferences across the world about 
                  <a href="https://ltr.wtf/talks/2016-11-02-linux-conf-au.html" target="_blank">localization</a> 
                  and <a href="https://ltr.wtf/talks/2018-08-23-bidi-wat.html" target="_blank">i18n</a>, 
                  <a href="https://blog.archive.org/2019/10/29/weaving-books-into-the-web-starting-with-wikipedia/" target="_blank">Wikipedia</a> 
                  and <a href="https://www.youtube.com/watch?v=IvTmHMAd7nY&ab_channel=Domain-DrivenDesignEurope" target="_blank">systems architecture</a>.
                  You can read more about Moriel's technical work on <a href="https://moriel.tech" target="_blank">moriel.tech</a></p>
              </v-card-item>
            </v-card>
          </v-container>

          <v-container class="text-center">
            <h2 v-if="siteTheme === 'corporate'" class="mb-2">Contact & Inquiries</h2>
            <h2 v-else class="mb-2">Shoot me an email</h2>
            <v-divider class="mb-4" />
            <ContactForm />
          </v-container>
      </v-main>
      <v-footer class="mt-10 text-center">
            <v-row>
              <v-col>
                <p>&copy; 2024 Moriel Schottlender</p>
              </v-col>
            </v-row>
          </v-footer>
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
// import TemplateSwitcher from './components/TemplateSwitcher.vue'
import ProminentTemplateSwitcher from './components/ProminentTemplateSwitcher.vue'

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