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
                    <p>Hi, I’m Moriel—a software engineer and comedian who turns the madness of the tech world into sharp, relatable humor for anyone.</p>
                    <p>Whether you’re trying to decode AI, laughing at startup culture, or wondering what all those apps are actually doing, I’ll break it down in a way that’s funny and easy to follow. No need for a computer science degree, just a sense of humor.</p>
                </div>
                <div v-else>
                    <p>What’s up? I’m Moriel—a software engineer who does stand-up comedy to blow off steam and spill the tea about the tech world.</p>
                    <p>I’m here to make you laugh at startups, Silicon Valley, and the ridiculous ways we’re all being “optimized” by apps. If you’ve ever rolled your eyes at tech bros or felt personally attacked by autocorrect, you’re in the right place.</p>
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="tech">
                <div v-if="siteTheme === 'corporate'">
                    <p>Hey, tech crew! I’m Moriel—a software engineer and comedian who knows exactly what keeps you up at night (hint: it’s not just your on-call rotation).</p>
                    <p>From the absurdity of “Agile best practices” to the unspoken truth that we’re all just one bad merge conflict away from chaos, I bring humor that speaks to every corner of the industry.</p>
                    <p>Whether you’re debugging microservices, surviving endless standups, or silently judging someone’s code quality, I’m here to make sure you laugh about it all instead of rage-quitting.</p>
                </div>
                <div v-else>
                    <p>Hey, tech fam! I’m Moriel—a software engineer who doubles as a comedian when the Jenkins builds are running.</p>
                    <p>From the agony of pull requests getting nitpicked to the chaos of “just a quick hotfix,” I know the struggle. Whether you’re buried in JIRA tickets or trying to explain to your boss why the staging environment is on fire, I’ve got laughs for every part of the process.</p>
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="leadership">
                <div v-if="siteTheme === 'corporate'">
                    <p>Hello, movers and shakers! I’m Moriel—a software engineer and comedian who’s here to say what your team won’t (but definitely wants to).</p>
                    <p>From navigating “seamless integrations” to translating buzzwords like “synergy” and “scaling” into real strategies, I bring a sharp lens to the joys and headaches of being in charge.</p>
                    <p>Let’s laugh about product pivots, unmanageable roadmaps, and that one person who always dominates the all-hands Q&A.</p>
                </div>
                <div v-else>
                    <p>Hey, leaders! I’m Moriel—a software engineer and comedian with a knack for turning your challenges into comedy gold.</p>
                    <p>Let’s laugh about your “data-driven decisions,” “OKRs” that don’t even make sense, and the endless parade of reorgs. You’re working hard scaling teams, managing burnout, and trying to survive QBRs, so let me give you a reason to enjoy the chaos for once.</p>
                </div>
            </v-tabs-window-item>
            <v-tabs-window-item value="techbros">
                <div v-if="siteTheme === 'corporate'">
                    <p>Yo, legends. I’m Moriel—software engineer, comedian, and your unofficial CTO of comedy.</p>
                    <p>I know you’re out there optimizing your CI/CD pipelines and debating Kubernetes versus Docker while sipping your cold brew. Let me optimize your laughs instead.</p>
                    <p>From flexing your GitHub stars to “disrupting” your lunch break with another hackathon, I’m here to roast the grind and your 10x engineer energy. Let’s deploy these jokes straight to production. 🚀</p>
                </div>
                <div v-else>
                    <p>Yo, rockstars. I’m Moriel—a software engineer and comedian ready to roast your entire vibe.</p>
                    <p>Whether you’re bragging about your multi-cloud strategy, optimizing your React components, or hyping up your latest ChatGPT prompt engineering skills, I’m here to keep it real.</p>
                    <p>You’re not “disrupting” anything, but you’ll disrupt your own laughter when you hear these jokes. Fire up the Kubernetes cluster, grab your Soylent, and let’s vibe. 🚀</p>
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