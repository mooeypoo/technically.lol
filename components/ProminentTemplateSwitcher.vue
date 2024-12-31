<template>
    <v-row
      align="top"
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
                        <v-btn @click="siteTheme = 'corporate'" variant="tonal" size="x-small">Switch Style</v-btn>
                    </v-card-item>
                    <v-card-item class="text-left pt-2">
                            <p>Looking for a fresh way to energize your next corporate event? Moriel brings the perfect blend of sharp wit and relatable humor tailored to professional audiences.</p>
                            <p>As a software engineer and comedian, Moriel delivers clean, workplace-friendly comedy that resonates with tech teams, leadership, and employees alike.</p>
                            <p>Bring laughter to your event while keeping it professional — because a team that laughs together debugs better together!</p>
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
                        <v-btn @click="siteTheme = 'corporate'" variant="tonal" size="x-small">Switch Style</v-btn>
                    </v-card-item>
                    <v-card-item class="text-left pt-2">
                        <p>Turn up the energy at your afterhours event, meet Moriel — <em>"The Lesbian Techbro"</em> — a software engineer and comedian who brings an unapologetically bold, hilarious perspective to the stage.</p>
                        <p>With a knack for roasting the tech world and a sharp eye for the absurd, Moriel dives into edgier, no-holds-barred humor that's perfect for a crowd ready to let loose.</p>
                        <p>From startup chaos to tech bro culture (with a sapphic twist), no sacred cow is safe, and no punchline is too spicy. If your team is ready to laugh hard and maybe blush a little, this is the comedy you've been waiting for. 🚀</p>
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