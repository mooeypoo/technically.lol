<template>
    <v-card color="accent" max-width="900" class="intro-switcher mx-auto">
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
                <div v-if="siteTheme === 'corporate'">
                    <p>Hi, I'm Moriel — a software engineer and comedian who brings a fresh, funny take on the tech world that anyone can enjoy. Whether you're curious about what goes on behind the screens or just looking for a good laugh, I'll make the complex world of technology entertaining and easy to understand. No coding required, just good humor about the quirks and chaos of the industry.</p>
                </div>
                <div v-else>
                    <p>Hey there! I'm Moriel—software engineer by day, comedian by night.</p>
                    <p>I'm here to give you a hilarious peek behind the curtain of the tech world, where we use buzzwords like “synergy” and “disruption” to sound smart. Whether you know tech or just know people in tech, you'll love laughing about the absurdity of startups, Silicon Valley, and my personal war with autocorrect.</p>
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="tech">
                <div v-if="siteTheme === 'corporate'">
                    Hi, I'm Moriel—a software engineer and stand-up comedian with an insider's view of the tech world. I combine my technical background with a sharp sense of humor to deliver laughs about everything from sprint planning to stakeholder chaos. Whether you're debugging code or managing people, my comedy is here to celebrate, commiserate, and entertain everyone in the tech ecosystem.
                </div>
                <div v-else>
                    What's up, tech fam? I'm Moriel—a software engineer who doubles as a stand-up comedian when the laptops go to sleep. From the agony of merging conflicts to the never-ending “quick syncs,” I turn our shared struggles into laughs. Whether you're pushing to production or just pushing deadlines, I'm here to roast the industry we love (and love to hate).
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="leadership">
                <div v-if="siteTheme === 'corporate'">
                    Hello, leaders! I'm Moriel—a software engineer and comedian who specializes in humor tailored for tech leadership. Whether you're rebranding “burnout” as “passion,” surviving reorgs, or inspiring your team, my comedy shines a light on the quirks of leadership in the tech world. It's relatable, professional, and guaranteed to make you laugh about your latest pivot—or at least your last quarterly all-hands.
                </div>
                <div v-else>
                    Hi there, tech leaders! I'm Moriel—a software engineer and comedian with a knack for turning your unique challenges into comedy gold. Whether it's navigating reorgs, pretending to “align on strategy,” or herding cats (ahem, engineers), I'll bring relatable humor to the executive world. Let's face it—sometimes you just need a laugh to get through that quarterly planning session.
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="techbros">
                <div v-if="siteTheme === 'corporate'">
                    Hey there! I'm Moriel—a software engineer and comedian here to deliver a polished, tongue-in-cheek look at the tech world, even for you 10x engineers. From optimizing workflows to debating over dark mode supremacy, I've got you covered. Let's laugh about the grind, the hustle, and the ridiculous acronyms we all pretend to understand.
                </div>
                <div v-else>
                    Yo, what's up, code kings? I'm Moriel—a software engineer who moonlights as a comedian, here to roast and toast your tech bro glory. Think of me as the stand-up comic version of your favorite Hacker News thread: spicy, over the top, and absolutely ridiculous. Grab your Soylent, flex those GitHub stats, and let's vibe. 🚀
                </div>
            </v-tabs-window-item>
        </v-tabs-window>
        </v-card-item>
    </v-card>
</template>

<script setup>
import { useThemeAbstraction } from '../use/useThemeAbstraction'
const { siteTheme } = useThemeAbstraction()

const tab = ref('general')
</script>

<style lang="scss">
.intro-switcher {
    .text-primary {
        color: black !important;
    }
    // .v-btn__content {
    // }
}
</style>