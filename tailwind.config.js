module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'rgba(255,225,255, 0)',
      black: {
        '900':'#000000',
      }, /* colori da sistemare  */
      grey: {
        '100' : '#FBFBFB', /* 700 */
        '200' : '#F9F9F9', /* 500 */
        '300' : '#9FA2A5', /* 300 */
        '400' : '#BDBDBD', /* 400 */
        '500' : '#333333', /* 100 */
        '600' : '#2C2C2C', /* 200 */
        '700' : '#5D6970', /* 600 */

      },
      pink: {
        '100': '#FAC3CA',
      },
      blue: {
        '100': '#3686F7',
        '200': '#6C63FF',
        '300': '#5A5773',
        '400': '#67647E',
        '500': '#E7ECFF',
        '600': '#505F98',
        '700': '#111B47',
        '900': '#091133',
      },
      white: '#FFFFFF',
    },
    extend: {
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    }
  },
  plugins: [],
}
