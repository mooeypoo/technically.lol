<template>
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

    <!-- <v-row no-gutters>
        <v-col cols="5">
            <v-card>
                <v-card-item class="text-center">
                    <h3>Corporate comedy</h3>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
            <v-card>
                <v-card-item class="text-center">
                    <h3>Afterhours comedy</h3>
                </v-card-item>
            </v-card>
       </v-col>
    </v-row> -->
</template>

<script setup>
import { ref } from 'vue'
import { useThemeAbstraction } from '../use/useThemeAbstraction'

const { siteTheme } = useThemeAbstraction()
</script>