/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New Teal Color Palette
        'lilac-olive': '#306e78',        // Primary teal (for text, buttons)
        'lilac-olive-dark': '#306e78',   // Dark teal (headings)
        'lilac-cream': '#eef6f9',        // Light blue-white (backgrounds)
        'lilac-sage': '#deeeec',         // Soft mint (sections)
        'lilac-beige': '#eef6f9',        // Light blue (cards)
        'lilac-tan': '#deeeec',          // Soft mint (accents)
        'lilac-lavender': '#49838d',     // Lighter teal (gradients)
        // Gradient colors
        'teal-dark': '#306e78',
        'teal-light': '#49838d',
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'sans-serif'],
        'serif': ['"Plus Jakarta Sans"', 'sans-serif'],
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        // Hero headings - ~88px
        'hero': ['5.5rem', { lineHeight: '1.04', fontWeight: '500' }],
        // Large section headings - ~57px
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '500' }],
        // Medium headings - ~36px
        'heading': ['2.25rem', { lineHeight: '1.2', fontWeight: '500' }],
        // Small headings - ~24px
        'subheading': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
        // Body text - ~20px
        'body-lg': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        // Regular body - ~16px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        // Small text - ~14px
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #306e78 0%, #49838d 100%)',
      },
    },
  },
  plugins: [],
}
