<template>
    <v-carousel
        height="250"
        show-arrows="hover"
        cycle
        hide-delimiter-background
    >
        <v-carousel-item
            v-for="testimonial in testimonials" :key="testimonial.from"
            class="pa-4"
        >
            <div class="d-flex fill-height justify-center align-center">
                <v-card max-width="500">
                    <v-card-item>
                        <p class="text-sm-h5 text-subtitle-1 text-medium-emphasis mt-2">
                            {{ testimonial.text}}
                        </p>
                    </v-card-item>
                    <v-card-item>
                        <v-list-item
                            class="px-0 mt-3"
                            :title="testimonial.from"
                        >
                            <template #prepend>
                            <v-avatar :image="images[`logo-${testimonial.image}`]" />
                            </template>
                        </v-list-item>
                    </v-card-item>
                </v-card>
            </div>
        </v-carousel-item>
    </v-carousel>

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

const testimonials = [
    {
        image: 'apple',
        from: 'Siri',
        text: 'I asked her to tell me a joke, and now I\'m questioning my existence. 5 stars.',
    },
    {
        image: 'alexa',
        from: 'Alexa',
        text: "Her jokes have a 99.9% confidence score for humor."
    },
    {
        image: 'chatgpt',
        from: 'ChatGPT',
        text: 'Her comedy special crashed my language model. Would recommend.'
    },
    {
        image: 'dalle',
        from: 'Dall-E',
        text: '10/10 would hallucinate laughter again!'
    },
    {
        image: 'gemini',
        from: 'Gemini',
        text: 'Funnier than asking me to tell a joke.'
    },
    {
        image: 'githubcopilot',
        from: 'Github Copilot',
        text: 'Scalable laughs with zero latency — Moriel delivers!'
    },
    {
        image: 'midjourney',
        from: 'Midjourney',
        text: 'Moriel’s comedy is so clever, I had to run a full query to keep up.'
    }
]
shuffleArray(testimonials)
</script>