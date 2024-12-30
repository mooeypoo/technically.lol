<template>
    <v-card color="background" max-width="900" class="mx-auto">
        <v-card-item>
            <v-tabs
                v-model="tab"
                align-tabs="center"
                color="primary"
                center-active
                show-arrows
            >
                <v-tab value="general">General audience</v-tab>
                <v-tab value="tech">Tech industry</v-tab>
                <v-tab value="leadership">Leadership</v-tab>
                <v-tab value="techbros">Tech bros</v-tab>
            </v-tabs>
        </v-card-item>
        <v-card-item>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="general">
                Tech humor that doesn't require a computer science degree! Just a lesbian making fun of Silicon Valley bros and their coffee-to-code conversion habits.
            </v-tabs-window-item>
            <v-tabs-window-item value="tech">
                Yes, I will make jokes about TypeScript's type inference and why React's useEffect is basically a relationship status - it's complicated.
            </v-tabs-window-item>
            <v-tabs-window-item value="leadership">
                ROI-driven humor leveraging cross-functional synergies to maximize employee engagement while maintaining optimal work-life balance paradigms.
            </v-tabs-window-item>
            <v-tabs-window-item value="techbros">
                Disrupting the comedy industry with blockchain-enabled microservices and AI-powered joke optimization. To the moon! 🚀
            </v-tabs-window-item>
        </v-tabs-window>
        </v-card-item>
    </v-card>
</template>

<script setup>
const tab = ref('general')
</script>