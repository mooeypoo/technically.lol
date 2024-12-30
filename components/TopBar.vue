<template>
    <v-app-bar :elevation="display.xs ? '0' : '2'">
        <!-- <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template> -->
        <v-avatar size="64" :image="images[siteAvatar]"></v-avatar>
        <v-app-bar-title v-if="display.xs">
            <p>Moriel Schottlender</p>
            <p>{{ themeTitle }}</p>
        </v-app-bar-title>
        <v-app-bar-title v-else>Moriel Schottlender 🎤 {{ themeTitle }}</v-app-bar-title>

        <template v-slot:append>
            <TemplateSwitcher
                v-if="!display.xs"
            />
        </template>
    </v-app-bar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { filename } from 'pathe/utils';
import TemplateSwitcher from '~/components/TemplateSwitcher.vue'
import { useThemeAbstraction } from '../use/useThemeAbstraction'

const { siteTitle, siteAvatar } = useThemeAbstraction()
const themeTitle = ref(siteTitle)

const display = ref(useDisplay())


const glob = import.meta.glob('~/assets/img/*.png', { eager: true });
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

</script>
