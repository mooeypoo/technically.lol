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
                        <div v-if="intro.name === 'general'">
                            <p>I'm a Software Engineer that can make you laugh about working in <strong>Tech</strong>, working <strong>with Tech</strong>, or working <strong>on Tech</strong>.</p>
                            <ul>
                                <li>You use technology every day. That's <strong>(technically) funny</strong>.</li>
                                <li>Your friends who don't know how to use technology? <strong>Technically, they're funny.</strong></li>
                                <li>Your friends who do know how to use technology? <strong>They're Technically Funny.</strong></li>
                                <li>I am technology. I am <strong>&quot;technically&quot; &quot;funny.&quot;</strong></li>
                            </ul>
                        </div>
                        <div v-if="intro.name === 'management'">
                            <p>I'm Moriel from Engineering. I practice comedy for my <strong>professional development</strong> time.</p>
                            <p>My shows increase <strong>employee satisfaction</strong>, without spending RSUs or giving away promotions.</p>
                            <p>I am a <strong>woman</strong> who's part of the <strong>LGBTQ+</strong> and <strong>neurodivergence</strong> groups, so by bringing me to your company, you can tick off the <strong>DEI quota</strong> for the quarter!</p>
                        </div>
                        <div v-if="intro.name === 'tech'">
                            <p>I'm a Software Engineer that takes <strong>Team Standup</strong> to the next level.</p>
                            <p>I am with you in the trenches tracking a bug with git blame just to discover <strong>it's my code</strong>.</p>
                            <p>I'm the one that <strong>wrote the code</strong> that you're debugging right now.</p>
                            <p>And Tech can be <strong>technically funny.</strong></p>
                        </div>
                        <div v-if="intro.name === 'techbros'">
                            <p>I'm a <strong>10x Software Engineer</strong> that exposes the system by WTFing it.</p>
                            <p>Hey, my joke blockchain lineup is like <strong>crypto for Musk</strong>, laugh-ensured with <strong>Typescript level validation</strong>.</p>
                            <p>It's so unicorn stellar, there's no need for <strong>pre-deployment QA</strong>, bugs are reported in <code>prod</code></p>
                            <p>.. and I totally <a href="https://github.com/mooeypoo/technically.lol/">shipped this website</a>.</p>
                        </div>
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

debugger
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