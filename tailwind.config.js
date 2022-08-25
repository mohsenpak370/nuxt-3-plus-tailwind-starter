/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'd-primary': {
          1: '#1E76FE',
          2: '#005DDF',
          3: '#0045C2',
          4: '#002FA5',
          5: '#001C88',
        },
        'd-secondary': {
          1: '#FF8300',
          2: '#ff8f19',
          3: '#ff9c33',
          4: '#ffa84d',
          5: '#ffb566',
        },
        'd-grey': {
          1: '#0F0F0F',
          2: '#272727',
          3: '#3F3F3F',
          4: '#575757',
          5: '#6F6F6F',
          6: '#878787',
          7: '#9F9F9F',
        },
        'd-white': {
          1: '#FFFFFF',
          2: '#FDFDFD',
          3: '#F6F6F6',
          4: '#EEEEEE',
          5: '#E7E7E7',
          6: '#CFCFCF',
          7: '#B7B7B7',
        },
        'd-sdg': {
          1: '#E5243B',
          2: '#DDA63A',
          3: '#4C9F38',
          4: '#C5192D',
          5: '#FF3A21',
          6: '#CFCFCF',
          7: '#B7B7B7',
        },
        'd-alert': {
          success: '#369021',
          error: '#A81A2A',
          warning: '#A98443',
          notification: '#E72138',
        },
        'd-link': {
          default: '#005DDF',
          hover: '#0059D2',
          selected: '#001C88',
        },
        'd-icon': {
          default: '#575757',
          hover: '#0F0F0F',
        },
        'd-border': {
          default: '#CFCFCF',
          selected: '#005DDF',
          disable: '#EEEEEE',
          hover: '#6F6F6F',
        },
        'd-bg': {
          1: '#FDFDFD',
        },
        'd-hover':  '#EDF4FF',
      },
    },
  },
  plugins: [],
}
