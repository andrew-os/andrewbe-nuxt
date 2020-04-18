/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    container: {
      center: true,
    },
    colors:{
      primary: '#f3a712',
      secondary: '#29335c',
      white: '#fff',
      txtwhite: '#fbf7f5',
    },
  },
  variants: {},
  plugins: []
}
