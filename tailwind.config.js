/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your existing animations and keyframes:
      animation: {
        'slide-in-elliptic-top-fwd': 'slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both',
        'fade-in': 'fade-in 1.5s ease-in-out 0.5s both',
        'shine': 'shine 1.2s ease-in-out',
      },
      keyframes: {
        'shine': {
          '0%': { transform: 'translateX(-150%) skewX(-12deg)' },
          '100%': { transform: 'translateX(400%) skewX(-12deg)' },
        },
        'slide-in-elliptic-top-fwd': {
          '0%': {
            transform: 'translateY(-600px) rotateX(-30deg) scale(0)',
            'transform-origin': '50% 100%',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0) rotateX(0) scale(1)',
            'transform-origin': '50% 1400px',
            opacity: '1'
          }
        },
        'fade-in': {
            'from': {
              opacity: '0',
              transform: 'translateY(30px)'
            },
            'to': {
              opacity: '1',
              transform: 'translateY(0)'
            }
          }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

