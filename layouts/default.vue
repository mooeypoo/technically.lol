<template>
    <v-app>
      <v-main>
        <TopBar />

        <v-container max-width="900px" class="text-center">
          <v-card height="220" dark image="~/assets/img/onstage.jpg" class="hero-section d-flex align-center justify-center flex-wrap text-center mx-auto px-4">
              <template #image>
                  <v-img gradient="to bottom, rgba(39, 39, 39, .5), rgba(39, 39, 39, .9)" />
              </template>
              <v-card-title class="text-white">
                  <h2 class="text-white">Moriel Schottlender</h2>
                  <p>Where code meets comedy</p>
              </v-card-title>
          </v-card>
        </v-container>

        <v-app-bar v-if="display.smAndDown" elevation="0">
        <div class="mx-auto">
            <span class="mx-2 text-overline">Change vibe:</span>
            <TemplateSwitcher />
            </div>
        </v-app-bar>

          <v-container>
            <slot></slot>
          </v-container>
        </v-main>
        <v-bottom-navigation
          color="primary"
          active
        >
          <v-btn
              color="primary"
              @click="navigateTo('/')"
              variant="text"
              size="x-small"
            >Home</v-btn>
            <v-btn
              color="primary"
              @click="navigateTo('/contact')"
              variant="text"
              size="x-small"
            >Contact</v-btn>
        </v-bottom-navigation>
        <!-- <v-footer app class="mt-10 text-center">
            <v-row no-gutters="true">
              <v-col>
                <p>&copy; 2024 Moriel Schottlender</p>
              </v-col>
            </v-row>
        </v-footer> -->
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify';
import TopBar from '~/components/TopBar.vue'
import TemplateSwitcher from '~/components/TemplateSwitcher.vue'
const display = ref(useDisplay())

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
