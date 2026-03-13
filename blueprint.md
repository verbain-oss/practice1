# Lotto Number Generator Blueprint

## Overview
A simple, modern web-based Lotto number generator that provides 6 unique random numbers between 1 and 45.

## Current State & Features
- **Structure:** Modern HTML with a clear container for Lotto balls and a styled "Generate" button.
- **Functionality:** `main.js` generates 6 unique random numbers (1-45), sorts them, and displays them with a color-coded system and staggered animations.
- **Styling:** `style.css` uses CSS variables for theming, provides a responsive card layout, and implements vibrant, shaded Lotto balls with interactive hover effects.
- **Typography:** Uses the 'Inter' font from Google Fonts for a clean, modern look.

## Plan for Implementation
1.  **Logic (main.js):**
    - Select DOM elements (`generate-btn`, `lotto-numbers`).
    - Add click event listener to the button.
    - Generate 6 unique random numbers (1-45).
    - Sort numbers in ascending order.
    - Display numbers as styled circles or "balls".
    - Add a simple animation effect when numbers appear.
2.  **Styling (style.css):**
    - Use modern CSS (Flexbox/Grid, CSS variables, logical properties).
    - Design "Lotto balls" with vibrant colors and subtle depth (shadows/gradients).
    - Ensure responsive design for mobile and desktop.
    - Add a tactile feel with hover effects and smooth transitions.
3.  **Refinement (index.html):**
    - Ensure correct linkage to CSS and JS.
    - Add a container for the generated numbers.
