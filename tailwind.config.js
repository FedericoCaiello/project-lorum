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
        '300' : '#F2F2F2', /* 250 */
        '400' : '#9FA2A5', /* 300 */
        '500' : '#BDBDBD', /* 400 */
        '600' : '#333333', /* 500 */
        '700' : '#2C2C2C', /* 600 */
        '800' : '#5D6970', /* 700 */

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
