const plugin = require('tailwindcss/plugin');

module.exports = {
  prefix: ``, 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  important: true,
  theme: { 
    extend: {}, 
  }, 
  plugins: [
    
  ]
};
