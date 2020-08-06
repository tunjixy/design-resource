/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    fontFamily: {
      karla: ['Karla', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'outline-primary': '0 0 0 2px rgba(112, 36, 89, 0.5)',
        btn:
          '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
      },
      colors: {
        primary: '#702459',
        accent: '#FED7E2',
        secondary: '#381a26',
        'dark-gray': '#121212',
        'dark-gray-light': '#1E1E1E',
        'gray-light': '#919191',
      },
    },
  },
  variants: {
    textColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'responsive',
      'hover',
      'focus',
    ],
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-active',
      'dark-placeholder',
      'responsive',
      'hover',
      'focus',
      'active',
    ],
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
