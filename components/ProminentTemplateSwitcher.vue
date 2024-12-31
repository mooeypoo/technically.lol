<template>
<!-- <v-row
      align="center"
      class="fill-height"
      justify="center"
    >
      <template v-for="(item, i) in items" :key="i">
        <v-col
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              dark
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 12 : 2"
              :image="item.img"
              v-bind="props"
              height="225px"
            >
            <template #image>
              <v-img gradient="to bottom, rgba(39, 39, 39, .7), rgba(39, 39, 39, 1)" />
            </template>
                <v-card-title class="text-h6 text-white d-flex flex-column">
                  <p class="mt-4">
                    {{ item.title }}
                  </p>

                  <div>
                    <p class="ma-0 text-body-2 font-weight-bold">
                      {{ item.text }}
                    </p>
                    <p class="text-caption font-weight-medium">
                      {{ item.subtext }}
                    </p>
                  </div>
                </v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row> -->
    <v-btn-toggle
        v-model="siteTheme"
        mandatory
        group
        size="x-large"
        variant="tonal"
        rounded="lg"
        stacked
        style="height: auto"
        class="mx-auto"
    >
        <v-btn stacked value="corporate" class="pa-4">
            <v-icon>mdi-lectern</v-icon>
            Corporate<br />Comedy
        </v-btn>
        <v-btn stacked value="afterhours" class="pa-4">
            <v-icon>mdi-microphone-variant</v-icon>
            Afterhours<br/>Comedy
        </v-btn>
    </v-btn-toggle>

</template>

<script setup>
import { ref } from 'vue'
import { filename } from 'pathe/utils';

import { useThemeAbstraction } from '../use/useThemeAbstraction'

const { siteTheme } = useThemeAbstraction()
const glob = import.meta.glob('~/assets/img/*.png', { eager: true });
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

const items = [
    {
        title: 'Corporate Comedy',
        text: `It's New Release Friday`,
        subtext: 'Newly released songs.',
        img: images['moriel-gotham1'],
    },
    {
        title: 'Afterhours Comedy',
        text: 'Greatest Rock Hits',
        subtext: 'Lose yourself in rock tunes.',
        img: images['moriel-gotham2'],
    }
]

</script>