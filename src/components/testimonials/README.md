# Testimonials Section - Modular Architecture

## 📁 Structure

```
src/
├── sections/
│   └── TestimonialSection.jsx         # Main section (orchestrator)
├── components/
│   └── testimonials/
│       ├── HorizontalTestimonialCard.jsx # Wide layout card
│       └── VerticalTestimonialCard.jsx   # Tall layout card
└── data/
    ├── testimonialsData.js            # Section configuration
    └── testimonials.js                # Testimonials list data
```

## 🎯 Best Practices Applied

### 1. **Separation of Concerns**

- **Data Layer**: Content in `testimonialsData.js`, list in `testimonials.js`
- **Presentation Layer**: Modular components in `components/testimonials/`
- **Orchestration Layer**: Main `TestimonialSection.jsx`

### 2. **Component Modularity**

- `HorizontalTestimonialCard`: Optimized for wide layout display
- `VerticalTestimonialCard`: Optimized for grid/column display
- Both handle Wistia video embedding and achievement rendering

### 3. **Maintainability**

- Adding testimonials: Edit `src/data/testimonials.js`
- Changing layout logic: Edit `TestimonialSection.jsx`
- Styling updates: Edit specific card components

## 🔧 Usage

### Adding a Testimonial

Edit `src/data/testimonials.js`:

```javascript
export const testimonials = [
  {
    id: "unique-id",
    name: "Client Name",
    videoId: "wistia-id",
    isHorizontal: true, // or false
    achievements: ["Achievement 1", { text: "Revenue: ", highlight: "$50k" }],
  },
  // ...
];
```

## 📝 Component Props

### HorizontalTestimonialCard / VerticalTestimonialCard

- `name`: string - Client name
- `videoId`: string - Wistia video ID
- `achievements`: Array - List of achievements
- `index`: number - Index for animation delay
