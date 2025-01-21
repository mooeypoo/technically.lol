<template>

        <v-container max-width="900px" class="text-center">
        <h2 class="mb-2">Comedy for any events</h2>
        <v-divider class="mb-4" />
        <ProminentTemplateSwitcher />
        </v-container>

        <v-container max-width="900px" class="text-center">
        <h2 class="mb-2">AI testimonials</h2>
        <v-divider class="mb-4" />
        <Testimonials />
        </v-container>

        <v-container max-width="900px" class="text-center">
        <h2 v-if="siteTheme === 'corporate'" class="mb-2">Comedy for all audiences</h2>
        <h2 v-else class="mb-2">Laugh your techbro off</h2>
        <v-divider class="mb-4" />
        <IntroSwitcher class="text-left" />
        </v-container>

        <v-container max-width="900px" class="text-center">
        <h2 v-if="siteTheme === 'corporate'" class="mb-2">Comedy samples</h2>
        <h2 v-else class="mb-2">Check this out</h2>
        <v-divider class="mb-4" />
        <InstagramEmbed :reels="reelUrls" />
        </v-container>

        <v-container max-width="900px" class="text-center">
        <h2 class="mb-2">Play around</h2>
        <v-divider class="mb-4" />
        <Terminal />
        </v-container>

        <v-container max-width="900px" class="text-center">
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
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTheme, useDisplay } from 'vuetify';
import { useThemeAbstraction } from '../use/useThemeAbstraction'
import Testimonials from '~/components/Testimonials.vue'
import IntroSwitcher from '~/components/IntroSwitcher.vue'
import InstagramEmbed from '~/components/InstagramEmbed.vue'
import Terminal from '~/components/Terminal.vue'
import ProminentTemplateSwitcher from './components/ProminentTemplateSwitcher.vue'

const display = ref(useDisplay())
const { siteTheme } = useThemeAbstraction()
const vuetifyTheme = useTheme()

const reelUrls = [
  'https://www.instagram.com/reel/DDFP7UXuQc1/embed', // day 2
  'https://www.instagram.com/reel/DDIauENyXvp/embed', // day 3
  'https://www.instagram.com/reel/DDLajWsOC0i/embed', // day 4
  'https://www.instagram.com/reel/DDN4S9wuOMs/embed', // day 5
  'https://www.instagram.com/reel/DDP46cOypoV/embed', // day 6
  'https://www.instagram.com/reel/DDSd6q_y4p3/embed', // day 7
  'https://www.instagram.com/reel/DDVHGB1S_uW/embed', // day 8
  'https://www.instagram.com/reel/DDXhdcFOr-Z/embed', // day 9
  'https://www.instagram.com/reel/DDaAeQlO4Qn/embed', // day 10
  'https://www.instagram.com/reel/DDckmdYSDe3/embed', // day 11
  'https://www.instagram.com/reel/DDe6-qDOR4U/embed', // day 12
  'https://www.instagram.com/reel/DDh3MN8SmKL/embed', // day 13
  'https://www.instagram.com/reel/DDj7WucyeDs/embed', // day 14
  'https://www.instagram.com/reel/DDntZAWOEH6/embed', // day 15
  'https://www.instagram.com/reel/DDp-x38uAhs/embed', // day 16
  'https://www.instagram.com/reel/DDsfO11SM6T/embed', // day 17
  'https://www.instagram.com/reel/DDvDxgCykt6/embed', // day 18
  'https://www.instagram.com/reel/DDyL1zsOiu2/embed', // day 19
  'https://www.instagram.com/reel/DD0M9tYyupj/embed', // day 20
  'https://www.instagram.com/reel/DD3RtJFuZld/embed', // day 21
  'https://www.instagram.com/reel/DD5-a_pu1On/embed', // day 22
  'https://www.instagram.com/reel/DD76h2hSRN8/embed', // day 23
//  'https://www.instagram.com/reel/DD-smqJupti/embed', // day 24
];

// Watch the pinia store's definition of the theme and update the global theme accordingly
watch(siteTheme, (newTheme) => {
  vuetifyTheme.global.name.value = newTheme === 'corporate' ? 'corporateTheme' : 'afterhoursTheme'
})
</script>

