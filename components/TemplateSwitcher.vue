<template>
    <v-btn-toggle
        v-model="siteTheme"
        color="primary"
        mandatory
        group
        density="compact"
        size="x-small"
        variant="outlined"
    >
            <v-btn miltiline size="x-small" value="corporate">Corporate</v-btn>
            <v-btn miltiline size="x-small" value="afterhours">Afterhours</v-btn>
    </v-btn-toggle>

</template>

<script setup>
import { ref } from 'vue'
import { useThemeAbstraction } from '../use/useThemeAbstraction'

const { siteTheme } = useThemeAbstraction()
</script>