# Hero Section - Modular Architecture

## 📁 Structure

```
src/
├── sections/
│   └── Hero.jsx                    # Main Hero section (orchestrator)
├── components/
│   └── hero/
│       ├── HeroLogo.jsx           # Logo with Instagram link
│       ├── HeroHeadline.jsx       # Main headline
│       ├── HeroSubheadline.jsx    # Subheadline with highlights
│       ├── HeroSocialProof.jsx    # Avatars and rating
│       ├── HeroComparisonCards.jsx # What it is/isn't cards
│       └── HeroResultsGallery.jsx  # Results media gallery
└── data/
    ├── heroData.js                # Hero content configuration
    └── heroImages.js              # Results gallery images
```

## 🎯 Best Practices Applied

### 1. **Separation of Concerns**

- **Data Layer**: All content in `heroData.js`
- **Presentation Layer**: Modular components in `components/hero/`
- **Orchestration Layer**: Main `Hero.jsx` composes everything

### 2. **Component Modularity**

Each component has a single responsibility:

- `HeroLogo` - Displays logo with link
- `HeroHeadline` - Main headline text
- `HeroSubheadline` - Subheadline with dynamic highlights
- `HeroSocialProof` - Social proof with avatars and rating
- `HeroComparisonCards` - Comparison cards (what it is/isn't)
- `HeroResultsGallery` - Media gallery grid

### 3. **Reusability**

- `ComparisonCard` is a reusable subcomponent
- All components accept props for flexibility
- Easy to use in other sections if needed

### 4. **Maintainability**

- Content changes: Edit `heroData.js`
- Style changes: Edit individual component files
- Structure changes: Edit `Hero.jsx` orchestrator

### 5. **Documentation**

- JSDoc comments on all components
- Clear prop types and descriptions
- Inline comments for complex logic

### 6. **Performance**

- Lazy loading with `RevealOnScroll`
- Optimized media rendering
- Minimal re-renders with proper component structure

## 🔧 Usage

### Updating Content

Edit `src/data/heroData.js`:

```javascript
export const heroContent = {
  headline: {
    main: "Your New Headline",
    secondary: "Your Secondary Text",
  },
  // ... other content
};
```

### Customizing Components

Each component is independently customizable:

```jsx
<HeroHeadline main="Custom Main Text" secondary="Custom Secondary Text" />
```

### Adding New Sections

Simply import and use in `Hero.jsx`:

```jsx
import NewHeroComponent from "../components/hero/NewHeroComponent";

// In Hero component
<NewHeroComponent {...props} />;
```

## 📝 Component Props

### HeroLogo

- `src`: string - Logo image path
- `alt`: string - Alt text
- `link`: string - Instagram URL

### HeroHeadline

- `main`: string - Main headline
- `secondary`: string - Secondary headline

### HeroSubheadline

- `text`: string - First text segment
- `highlight1`: string - First highlight
- `text2`: string - Second text segment
- `minAmount`: string - Minimum amount
- `maxAmount`: string - Maximum amount
- `text3`: string - Third text segment

### HeroSocialProof

- `avatars`: string[] - Avatar image URLs
- `rating`: number - Rating (1-5)
- `ratingText`: string - Rating text
- `handle`: string - Social handle

### HeroComparisonCards

- `notWhatItIs`: string[] - Negative items
- `whatItIs`: string[] - Positive items

### HeroResultsGallery

- `images`: Array<{src: string, type: 'image'|'video'}> - Media items

## 🚀 Benefits

1. **Easy to Test**: Each component can be tested independently
2. **Easy to Maintain**: Changes are isolated to specific files
3. **Easy to Scale**: Add new components without touching existing ones
4. **Easy to Understand**: Clear structure and documentation
5. **Easy to Reuse**: Components can be used in other sections
