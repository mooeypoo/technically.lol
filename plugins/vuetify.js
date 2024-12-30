// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

const corporateTheme = {
  dark: false,
  // Inspired by pallette: https://coolors.co/0d1b2a-1b263b-415a77-778da9-e0e1dd
  // Or https://coolors.co/fffcf2-ccc5b9-403d39-252422-eb5e28
  colors: {
    // background: '#0d1b2a',
    // surface: '#415a77',
    // 'surface-light': '#0d1b2a'
    background: '#cfbda6', // Light yellow-gray background
    surface: '#e9e0d9',    // Light yellow-gray surface
    primary: '#EB5E28',//'#252422',    // Navy blue primary color
    secondary: '#827866',  // Bright teal secondary color
    accent: '#ABA08E',     
    'on-accent': '#000000',
    error: '#FF5252',      // Standard error color
    info: '#2196F3',       // Standard info color
    success: '#4CAF50',    // Standard success color
    warning: '#FB8C00',    // Standard warning color
  }
}
const afterhoursTheme = {
  // Inspired by pallette: https://coolors.co/f72585-7209b7-3a0ca3-4361ee-4cc9f0
  dark: true,
  colors: {
    // background: '#0d1b2a',
    // surface: '#415a77',
    // 'surface-light': '#0d1b2a'
    // background: '#cfbda6', // Light yellow-gray background
    // surface: '#e9e0d9',    // Light yellow-gray surface
    primary: '#F72585',    
    secondary: '#ffffff',  
    accent:'#016154',     // Teal accent color
    error: '#FF5252',      // Standard error color
    info: '#2196F3',       // Standard info color
    success: '#4CAF50',    // Standard success color
    warning: '#FB8C00',    // Standard warning color
  }
}


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
        defaultTheme: 'corporateTheme',
        themes: {
          corporateTheme,
          afterhoursTheme
        }
    }
  })
  app.vueApp.use(vuetify)
})
