# Clients Section - Modular Architecture

## 📁 Structure

```
src/
├── sections/
│   └── ClientsSection.jsx              # Main Clients section (orchestrator)
├── components/
│   └── clients/
│       ├── ClientsHeader.jsx          # Section header with icon
│       ├── ClientsGrid.jsx            # Grid of client cards
│       ├── InvestmentPlanCard.jsx     # Investment plan container
│       ├── InvestmentDeliverables.jsx # Deliverables grid
│       └── OptimizationAreas.jsx      # Optimization areas list
└── data/
    ├── clients.js                     # Client images and names
    └── clientsData.js                 # Clients content configuration
```

## 🎯 Best Practices Applied

### 1. **Separation of Concerns**

- **Data Layer**: Content in `clientsData.js`, client info in `clients.js`
- **Presentation Layer**: Modular components in `components/clients/`
- **Orchestration Layer**: Main `ClientsSection.jsx` composes everything

### 2. **Component Modularity**

Each component has a single responsibility:

- `ClientsHeader` - Section title and icon
- `ClientsGrid` - Grid layout with client cards
- `ClientCard` - Individual client card (subcomponent)
- `InvestmentPlanCard` - Investment plan container
- `InvestmentDeliverables` - Deliverables grid
- `DeliverableCard` - Individual deliverable (subcomponent)
- `OptimizationAreas` - Optimization areas list

### 3. **Reusability**

- `ClientCard` is reusable for any client display
- `DeliverableCard` can be used for any numbered item
- All components accept props for flexibility

### 4. **Maintainability**

- Content changes: Edit `clientsData.js`
- Client updates: Edit `clients.js`
- Style changes: Edit individual component files
- Structure changes: Edit `ClientsSection.jsx` orchestrator

### 5. **Documentation**

- JSDoc comments on all components
- Clear prop types and descriptions
- Inline comments for complex logic

### 6. **Performance**

- Lazy loading with `RevealOnScroll`
- Optimized image rendering
- Minimal re-renders with proper component structure

## 🔧 Usage

### Updating Content

Edit `src/data/clientsData.js`:

```javascript
export const clientsContent = {
  header: {
    title: "Your New Title",
    subtitle: "Your Subtitle",
  },
  investmentPlan: {
    title: "Plan Title",
    // ... other content
  },
};
```

### Adding Clients

Edit `src/data/clients.js`:

```javascript
export const clientes = [
  {
    nombre: "Client Name",
    imagen: "/path/to/image.jpg",
    position: "center", // optional
  },
  // ... more clients
];
```

### Customizing Components

Each component is independently customizable:

```jsx
<ClientsGrid clients={customClients} />
```

### Adding New Deliverables

Simply update the data:

```javascript
deliverables: [
  {
    num: "07",
    title: "New Deliverable:",
    desc: "Description here",
    highlight: true, // optional
  },
];
```

## 📝 Component Props

### ClientsHeader

- `title`: string - Main title
- `subtitle`: string - Subtitle text

### ClientsGrid

- `clients`: Array<{imagen: string, nombre: string, position?: string}> - Client data

### ClientCard (subcomponent)

- `imagen`: string - Client image URL
- `nombre`: string - Client name
- `position`: string - Image object position (optional)

### InvestmentPlanCard

- `title`: string - Plan title
- `description`: string - Plan description
- `sectionTitle`: string - Deliverables section title
- `badge`: string - Badge text
- `deliverables`: Array - Deliverables data
- `optimizationAreas`: Object - Areas data
- `disclaimer`: string - Disclaimer text

### InvestmentDeliverables

- `sectionTitle`: string - Section title
- `badge`: string - Badge text
- `deliverables`: Array<{num: string, title: string, desc: string, highlight?: boolean}> - Deliverables

### DeliverableCard (subcomponent)

- `num`: string - Deliverable number
- `title`: string - Deliverable title
- `desc`: string - Description
- `highlight`: boolean - Whether to highlight (optional)

### OptimizationAreas

- `title`: string - Section title
- `areas`: string[] - Array of optimization areas

## 🚀 Benefits

1. **Easy to Test**: Each component can be tested independently
2. **Easy to Maintain**: Changes are isolated to specific files
3. **Easy to Scale**: Add new components without touching existing ones
4. **Easy to Understand**: Clear structure and documentation
5. **Easy to Reuse**: Components can be used in other sections
6. **Consistent Design**: Shared styling patterns across components

## 🎨 Design Patterns

### Composition Pattern

```jsx
<InvestmentPlanCard>
  <InvestmentDeliverables />
  <OptimizationAreas />
</InvestmentPlanCard>
```

### Data-Driven Rendering

All content is driven by data objects, making it easy to:

- A/B test different content
- Internationalize (i18n)
- Generate content dynamically
- Maintain consistency
