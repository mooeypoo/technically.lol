<template>
    <v-card
        class="mx-auto"
        color="surface"
    >
        <v-card-item >
            <div class="reel-embed mx-auto">
                <div v-if="currentReel" class="reel">
                    <iframe
                        :src="currentReel"
                        width="300"
                        height="600"
                        frameborder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <div v-else>
                    <p>No reels available.</p>
                </div>
                <!-- <button @click="refreshReel" class="refresh-btn">Load Random Reel</button> -->
            </div>
        </v-card-item>
        <v-card-item>
            <v-btn size="small" variant="elevated" color="primary" @click="refreshReel">Load another reel</v-btn>
        </v-card-item>
    </v-card>
</template>

<script setup>

import { ref, computed, watch } from 'vue';

const props = defineProps({
  reels: {
    type: Array,
    required: true,
    validator: (value) => value.every((url) => typeof url === 'string'),
  },
});

const currentIndex = ref(Math.floor(Math.random() * props.reels.length));

function refreshReel() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * props.reels.length);
  } while (newIndex === currentIndex.value); // Prevent the same reel from loading
  currentIndex.value = newIndex;
}

const currentReel = computed(() => props.reels[currentIndex.value]);

watch(
  () => props.reels,
  (newReels) => {
    if (!newReels.length) {
      currentIndex.value = -1; // Handle empty reel array case
    } else {
      refreshReel();
    }
  }
);
</script>

<style lang="scss" scoped>
.reel iframe {
  border-radius: 10px;
  border: none;
}
</style>