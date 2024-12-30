export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: 'corporate'
    }),
    getters: {
      getTheme: (state) => state.theme,
    },
    actions: {
      setTheme(theme) {
        this.theme = theme
      },
      toggleTheme() {
        this.theme = this.theme === 'corporate' ? 'afterhours' : 'corporate'
      },
    },
  })