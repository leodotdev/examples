# Framer Motion Animation Guide

## 🎯 Overview

We've replaced the CSS-based animations with Framer Motion for better SSR compatibility and more sophisticated animations.

## 🎨 Available Animations

### Basic Animations

```tsx
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, scaleUp } from "@/lib/animations";

// Fade in from bottom
<motion.div
  initial="initial"
  animate="animate"
  variants={fadeInUp}
>
  Content
</motion.div>

// Fade in from left
<motion.div variants={fadeInLeft}>
  Content
</motion.div>

// Scale up
<motion.div variants={scaleUp}>
  Content
</motion.div>
```

### Scroll-Triggered Animations

```tsx
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeInUp}
>
  This animates when 20% is visible
</motion.div>
```

### Staggered Animations

```tsx
import { staggerContainer, fadeInUp } from "@/lib/animations";

<motion.div
  variants={staggerContainer}
  initial="initial"
  animate="animate"
>
  <motion.div variants={fadeInUp}>Item 1</motion.div>
  <motion.div variants={fadeInUp}>Item 2</motion.div>
  <motion.div variants={fadeInUp}>Item 3</motion.div>
</motion.div>
```

### Custom Delays

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  Delayed content
</motion.div>
```

## 🚀 Implementation Examples

### Hero Section
```tsx
<motion.div 
  className="hero-content"
  variants={staggerContainer}
  initial="initial"
  animate="animate"
>
  <motion.h1 variants={heroAnimation}>
    Title
  </motion.h1>
  <motion.p variants={heroAnimation}>
    Description
  </motion.p>
  <motion.div variants={heroAnimation}>
    <Button>CTA</Button>
  </motion.div>
</motion.div>
```

### Feature Cards
```tsx
<motion.div 
  className="features-grid"
  variants={staggerContainer}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, amount: 0.2 }}
>
  {features.map((feature, index) => (
    <motion.div
      key={index}
      variants={fadeInUp}
      className="feature-card"
    >
      {/* Feature content */}
    </motion.div>
  ))}
</motion.div>
```

### Navigation
```tsx
<motion.header
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Navigation content */}
</motion.header>
```

## 🎛️ Animation Controls

### Viewport Settings
- `once: true` - Animation runs only once
- `amount: 0.2` - Trigger when 20% visible
- `margin: "100px"` - Trigger 100px before element

### Easing Functions
```tsx
// Smooth easing (default)
ease: [0.16, 1, 0.3, 1]

// Spring animation
type: "spring",
stiffness: 100,
damping: 15
```

### Performance Tips
1. Use `will-change: transform` for complex animations
2. Avoid animating layout properties (width, height)
3. Stick to transform and opacity for best performance
4. Use `viewport={{ once: true }}` to prevent re-animations

## 🔧 Debugging

If animations aren't working:
1. Check that parent has `initial` and `animate`/`whileInView`
2. Verify variants are imported correctly
3. Ensure motion components are client-side ("use client")
4. Check browser DevTools for hydration errors

## 📦 Bundle Impact

Framer Motion adds ~30KB gzipped, but provides:
- SSR-safe animations
- Gesture support
- Advanced orchestration
- Better accessibility
- Smoother performance