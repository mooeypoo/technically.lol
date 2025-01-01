<template>
    <v-container fluid>
        <v-item-group v-model="model" class="mb-4">
            <v-row justify="center">
            <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="auto" class="pa-2">
                <v-item v-slot="{ toggle, isSelected }" :value="testimonial">
                    <v-btn
                    :border="isSelected ? 'thin primary opacity-50' : undefined"
                    icon
                    :ripple="false"
                    variant="flat"
                    :color="isSelected ? 'primary' : 'surface'"
                    @click="toggle"
                    >
                    <v-avatar :image="images['logo-' + testimonial.image]" />
                    </v-btn>
                </v-item>
            </v-col>
        </v-row>
        </v-item-group>
        <div class="text-center">
        <strong class="text-subtitle-1">{{ model.name }}</strong>

        <p class="text-disabled mb-4">{{ model.title }}</p>

        <p class="text-h6 text-medium-emphasis w-100 w-sm-50 w-lg-33 mx-auto">{{ model.text }}</p>
        </div>
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
    {
        image: 'chatgpt',
        name: 'ChatGPT',
        title: 'OpenAI\'s Head Chatbot',
        text: 'Her comedy special crashed my language model. Would recommend.'
    },
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
shuffleArray(testimonials)
const model = ref(testimonials[2])
</script>