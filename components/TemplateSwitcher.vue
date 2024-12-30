<template>
    <v-btn-toggle
        v-model="siteTheme"
        color="primary"
        mandatory
        group
        density="compact"
        size="small"
        variant="outlined"
    >
            <v-btn size="small" value="corporate">Corporate</v-btn>
            <v-btn size="small" value="afterhours">Afterhours</v-btn>
    </v-btn-toggle>

</template>

<script setup>
import { ref } from 'vue'
import { useThemeAbstraction } from '../use/useThemeAbstraction'

const { siteTheme } = useThemeAbstraction()
</script>