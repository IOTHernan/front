  // postcss.config.js
   const purgecss = require('@fullhuman/postcss-purgecss')({
     content: [
       './src/**/*.html',
       './src/**/*.component.ts',
       './src/**/*.component.html'
     ],
     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
   });

   module.exports = {
     plugins: [
       require('tailwindcss'),
       require('autoprefixer'),
       ...process.env.NODE_ENV === 'production'
         ? [purgecss]
         : []
     ]
   };
