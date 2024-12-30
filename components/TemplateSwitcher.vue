<template>
    <v-btn-toggle
        v-model="siteTheme"
        color="primary"
        mandatory
        group
        density="comfortable"
        size="small"
    >
            <v-btn density="comfortable" value="corporate">Corporate</v-btn>
            <v-btn density="comfortable" value="afterhours">Afterhours</v-btn>
    </v-btn-toggle>

</template>

<script setup>
import { ref } from 'vue'
import { useThemeAbstraction } from '../use/useThemeAbstraction'

const { siteTheme } = useThemeAbstraction()
</script>