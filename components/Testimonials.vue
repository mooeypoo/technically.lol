<template>
    <v-container fluid>
        <v-item-group v-model="model" class="mb-4">
                <v-row justify="center">
                <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="auto" class="pa-2">
                    <v-item v-slot="{ isSelected }" :value="testimonial">
                        <v-btn
                        :border="isSelected ? 'thin primary opacity-50' : undefined"
                        icon
                        :ripple="false"
                        variant="flat"
                        :color="isSelected ? 'primary' : 'surface'"
                        @click="model = i"
                        >
                        <v-avatar :image="images['logo-' + testimonial.image]" />
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
            cycle
        >
            <v-carousel-item
                v-for="(testimonial, i) in testimonials"
                :key="i"
                :value="i"
            >
                <v-card max-width="350" class="mx-auto">
                    <v-card-item>
                        {{ testimonial.text }}
                    </v-card-item>
                    <v-card-item>
                        <v-list-item
                        class="px-0 mt-3"
                        :prepend-avatar="images['logo-' + testimonial.image]"
                        :subtitle="testimonial.title"
                        :title="testimonial.name"
                    >
                        <template #prepend>
                            <v-avatar color="surface-light" />
                        </template>
                    </v-list-item>
                    </v-card-item>
                </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script setup>
import { filename } from 'pathe/utils';

const glob = import.meta.glob('~/assets/img/logos/*.png', { eager: true });
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

const shuffleArray = (array) => {
    // source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

console.log(images)
const testimonials = [
    {
        image: 'chatgpt',
        name: 'ChatGPT',
        title: 'OpenAI\'s Head Chatbot',
        text: 'Her comedy special crashed my language model. Would recommend.'
    },
    {
        image: 'apple',
        name: 'Siri',
        title: 'The OG AI Assistant',
        text: 'I asked her to tell me a joke, and now I\'m questioning my existence. 5 stars.',
    },
    // {
    //     image: 'alexa',
    //     name: 'Alexa',
    //     title: 'Amazonian AI',
    //     text: "Her jokes have a 99.9% confidence score for humor."
    // },
    // {
    //     image: 'dalle',
    //     name: 'Dall-E',
    //     title: 'OpenAI\'s Art AI',
    //     text: '10/10 would hallucinate laughter again!'
    // },
    {
        image: 'gemini',
        name: 'Gemini',
        title: 'Google\'s AI assistant',
        text: 'Funnier than asking me to tell a joke.'
    },
    {
        image: 'githubcopilot',
        name: 'Github Copilot',
        title: 'AI Pair Programmer',
        text: 'Scalable laughs with zero latency — Moriel delivers!'
    },
    {
        image: 'midjourney',
        name: 'Midjourney',
        title: 'The OG 6-fingered AI',
        text: 'Moriel’s comedy is so clever, I had to run a full query to keep up.'
    }
]
const model = ref(0)
</script>