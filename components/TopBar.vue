<template>
    <v-app-bar :elevation="display.smAndDown ? '0' : '2'">
        <v-avatar @click="navigateTo('/')" size="64" :image="images[siteAvatar]"></v-avatar>
        <v-app-bar-title v-if="display.mdAndDown"  @click="navigateTo('/')">
            <p>Moriel Schottlender</p>
            <p>{{ themeTitle }}</p>
        </v-app-bar-title>
        <v-app-bar-title v-else @click="navigateTo('/')">Moriel Schottlender 🎤 {{ themeTitle }}</v-app-bar-title>
        <v-spacer v-if="display.mdAndUp"></v-spacer>
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
// const router = useRouter()

const display = ref(useDisplay())

const glob = import.meta.glob('~/assets/img/*.png', { eager: true });
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

</script>
