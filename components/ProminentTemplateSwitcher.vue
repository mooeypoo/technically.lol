<template>
    <v-row
      class="fill-height"
      justify="center"
    >
        <v-col
          cols="12"
          md="6"
        >
            <v-hover v-slot="{ isHovering, props }">
                <v-card
                    :class="{
                        'on-hover': isHovering,
                        'text-black': siteTheme === 'corporate',
                        'text-white': siteTheme === 'afterhours'
                    }"
                    v-bind="props"
                    color="accent"
                    :variant="isHovering ? 'tonal' : 'text'"
                    @click="siteTheme = 'corporate'"
                >
                    <v-card-item class="pb-0">
                        <h3 class="text-center">
                            <v-icon color="primary" v-if="siteTheme === 'corporate'">mdi-microphone-variant</v-icon>
                            Corporate Events
                            <v-icon color="primary" v-if="siteTheme === 'corporate'">mdi-microphone-variant</v-icon>
                        </h3>
                        <!-- <v-divider class="my-2" /> -->
                        <v-btn v-if="siteTheme === 'corporate'" @click="siteTheme = 'corporate'" read-only variant="tonal" size="x-small">You're experiencing the SFW vibe</v-btn>
                        <v-btn v-else @click="siteTheme = 'corporate'" variant="tonal" size="x-small">Click for SFW vibe</v-btn>
                    </v-card-item>
                    <v-card-item class="text-left pt-2">
                            <p>Looking for a fresh way to energize your next corporate event? Moriel brings the perfect blend of sharp wit and relatable, workplace-friendly comedy that resonates with tech teams, leadership, and employees alike.</p>
                    </v-card-item>
                    <v-card-item class="pt-0">
                        <v-btn
                            v-if="siteTheme === 'afterhours'"
                            color="primary"
                            size="x-small"
                            @click="siteTheme = 'corporate'"
                        >
                            Switch to this vibe
                        </v-btn>
                    </v-card-item>
                </v-card>
            </v-hover>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
            <v-hover v-slot="{ isHovering, props }">
                <v-card
                    :class="{
                        'on-hover': isHovering,
                        'text-black': siteTheme === 'corporate',
                        'text-white': siteTheme === 'afterhours'
                    }"
                    v-bind="props"
                    color="accent"
                    :variant="isHovering ? 'tonal' : 'text'"
                    @click="siteTheme = 'afterhours'"
                >
                    <v-card-item class="pb-0">
                        <h3 class="text-center">
                            <v-icon color="primary" v-if="siteTheme === 'afterhours'">mdi-star-shooting-outline</v-icon>
                                After-Hours Events
                            <v-icon color="primary" v-if="siteTheme === 'afterhours'">mdi-star-shooting-outline</v-icon>
                        </h3>
                        <!-- <v-divider class="my-2" /> -->
                        <!-- <v-btn @click="siteTheme = 'corporate'" variant="tonal" size="x-small">{{siteTheme === 'afterhours' ? 'This' : 'Click to Switch'}} Style</v-btn> -->
                        <v-btn v-if="siteTheme === 'afterhours'" @click="siteTheme = 'afterhours'" variant="tonal" size="x-small">You're experiencing the afterhours vibe</v-btn>
                        <v-btn v-else @click="siteTheme = 'afterhours'" variant="tonal" size="x-small">Click for Afterhours Vibe</v-btn>
                    </v-card-item>
                    <v-card-item class="text-left pt-2">
                        <p>Turn up the energy at your afterhours event, meet Moriel — <em>"The Lesbian Techbro"</em> — a software engineer and comedian who brings an unapologetically bold, hilarious perspective to the stage.</p>
                    </v-card-item>
                    <v-card-item class="pt-0">
                        <v-btn
                            v-if="siteTheme === 'corporate'"
                            color="primary"
                            size="x-small"
                            @click="siteTheme = 'afterhours'"
                        >
                            Switch to this vibe
                        </v-btn>
                    </v-card-item>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
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
        img: images['moriel-gotham1'],
    },
    {
        title: 'Afterhours Comedy',
        img: images['moriel-gotham2'],
    }
]

</script>