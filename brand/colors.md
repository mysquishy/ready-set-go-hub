# Ready Set Go - Color System

Official brand colors used across all products.

## Primary Colors

### Purple → Blue-Purple → Electric Blue Gradient

```css
/* Light Mode */
Primary: #7B68EE          /* Blue-Purple (main brand) */
Primary Dark: #9D4EDD     /* Purple (accents) */
Primary Light: #5B9FFF    /* Electric Blue (highlights) */
Accent: #FF7F50           /* Coral (CTAs) */

/* Dark Mode Variants */
Primary: #8B7AFF
Primary Dark: #A85FED
Primary Light: #6BAFFF
```

## Usage Guidelines

- **Primary (#7B68EE)**: Main brand color, logos, primary CTAs
- **Primary Dark (#9D4EDD)**: Gradients, secondary elements
- **Primary Light (#5B9FFF)**: Hover states, highlights
- **Accent (#FF7F50)**: Call-to-actions, urgency elements

## Where Used

- ✅ Mobile Boilerplate landing page
- ✅ PRO Edition landing page (TBD)
- ✅ Modular SaaS landing page (TBD)
- ✅ Hub website
- ✅ Product Hunt assets
- ✅ Social media graphics

## Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B68EE',
          dark: '#9D4EDD',
          light: '#5B9FFF',
        },
        accent: '#FF7F50',
      },
    },
  },
};
```

## Color Accessibility

All color combinations meet WCAG AA standards:
- Purple on white: 4.5:1 contrast ✅
- White on purple: 4.5:1 contrast ✅
- Coral on white: 3.5:1 contrast (use for large text only) ⚠️

## Gradient Combinations

### Hero Gradient
```css
background: linear-gradient(135deg, #9D4EDD 0%, #7B68EE 50%, #5B9FFF 100%);
```

### Button Gradient
```css
background: linear-gradient(90deg, #9D4EDD 0%, #7B68EE 100%);
```

### Text Gradient
```css
background: linear-gradient(to right, #9D4EDD, #7B68EE, #5B9FFF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

**Last Updated:** November 11, 2024
**Status:** Production - Do not modify without team approval
