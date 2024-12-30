import { computed } from 'vue'
import { useThemeStore } from '~/store/theme'
import { useTheme } from 'vuetify'

export function useThemeAbstraction () {
    const theme = useTheme()
    const store = useThemeStore()

    const siteTitle = computed(() => {
        return store.getTheme === 'corporate' ? 'Technically Funny' : 'The Lesbian Techbro'
    })

    const siteAvatar = computed(() => {
        return store.getTheme === 'corporate' ? 'moriel-official' : 'moriel-comedy'
    })

    const siteTheme = computed({
        get: () => store.theme,
        set: (value) => store.setTheme(value)
    })
    

    const toggleTheme = () => {
        store.toggleTheme()
        theme.global.currentTheme = store.getTheme === 'corporate' ? 'afterhours' : 'corporate'
    }

    return {
        siteTheme, // Reactive
        getTheme: computed(() => store.getTheme),
        toggleTheme: () => store.toggleTheme(),
        siteTitle,
        siteAvatar
    }
}