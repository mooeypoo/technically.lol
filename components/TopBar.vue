<template>
    <v-app-bar :elevation="display.smAndDown ? '0' : '2'">
        <v-avatar size="64" :image="images[siteAvatar]"></v-avatar>
        <v-app-bar-title v-if="display.mdAndDown">
            <p>Moriel Schottlender</p>
            <p>{{ themeTitle }}</p>
        </v-app-bar-title>
        <v-app-bar-title v-else>Moriel Schottlender 🎤 {{ themeTitle }}</v-app-bar-title>
        <v-spacer v-if="display.mdAndUp"></v-spacer>
        <span v-if="display.mdAndUp" class="mx-2 text-overline">Change vibe:</span>
        <TemplateSwitcher v-if="display.mdAndUp" />
    </v-app-bar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { filename } from 'pathe/utils';
import { useThemeAbstraction } from '../use/useThemeAbstraction'
// import TemplateSwitcher from './TemplateSwitcher.vue';

const { siteTitle, siteAvatar } = useThemeAbstraction()
const themeTitle = ref(siteTitle)

const display = ref(useDisplay())

const glob = import.meta.glob('~/assets/img/*.png', { eager: true });
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

</script>
