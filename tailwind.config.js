module.exports = {
  ...require('config/tailwind.config'),
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', '../../packages/ui/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
};
