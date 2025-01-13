<template>
    <v-container fluid>
        <v-item-group v-model="model" class="mb-4">
            <v-row justify="center">
                <v-col v-for="intro in intros" :key="intro.name" cols="auto" class="pa-1 ma-0">
                    <v-item v-slot="{ isSelected }" :value="intro.name">
                        <v-btn
                        :border="isSelected ? 'thin primary opacity-50' : undefined"
                        :ripple="false"
                        variant="flat"
                        :color="isSelected ? 'primary' : 'surface'"
                        size="small"
                        @click="model = intro.name"
                        >
                            <v-icon :icon="intro.icon" />
                            {{ intro.label }}
                        </v-btn>
                    </v-item>
                </v-col>
            </v-row>
        </v-item-group>
        <v-carousel
            v-model="model"
            max-width="350"
            style="height: auto;"
            hide-delimiters
            :show-arrows="false"
        >
            <v-carousel-item v-for="intro in intros" :key="intro.name" :value="intro.name">
                <v-card class="mx-auto" color="accent">
                    <v-card-title>
                        <v-icon :icon="intro.icon" />
                        {{ intro.label }}
                    </v-card-title>
                    <v-card-text class="intro-text px-4">
                        <ContentDoc :path="`intros/${intro.name}`" />
                    </v-card-text>
                    <v-card-item>
                        {{ intro.github }}
                        <v-btn
                            href="https://github.com/mooeypoo/technically.lol"
                            target="_blank"
                            size="x-small"
                            variant="outlined"
                        >
                            <v-icon>mdi-github</v-icon>
                            See source
                        </v-btn>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script setup>
const model = ref('general')

const intros = [
{
        name: 'general',
        label: 'General audience',
        icon: 'mdi-account',
        github: 'I mean... Look at this website. I totally made it.',
    },
    {
        name: 'tech',
        label: 'Tech audience',
        icon: 'mdi-laptop-account',
        github: 'Also, I totally made this website.',
    },
    {
        name: 'management',
        label: 'Management',
        icon: 'mdi-handshake',
        github: 'I totally made this website outside of work hours.',
    },
    {
        name: 'techbros',
        label: 'Tech bros',
        icon: 'mdi-account-cowboy-hat',
        github: '... and I totally shipped this website.',
    },
]
</script>

<style lang="scss">
.intro-text {
    ul li {
        margin: 0.5rem 2rem;
    }

    p {
        margin: 0.5rem 0;
    }
}
</style>