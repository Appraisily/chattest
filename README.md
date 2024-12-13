# Chat Widget

A lightweight, customizable chat widget for seamless customer support integration.

## Quick Start

Add the widget to your website:

```html
<!-- Add to your HTML -->
<script src="https://your-domain.com/widget/widget.js"></script>
<link rel="stylesheet" href="https://your-domain.com/widget/widget.css">

<!-- Initialize the widget -->
<script>
  window.ChatWidget.init({
    position: 'bottom-right',
    primaryColor: '#007bff'
  });
</script>
```

## Configuration

```typescript
interface WidgetConfig {
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;
  containerId?: string;
  zIndex?: number;
}
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build widget:
```bash
npm run build:widget
```

The build process generates two files in `dist/widget/`:
- `widget.js`: Widget bundle
- `widget.css`: Widget styles

## Architecture

The widget uses a modular architecture:

```
src/widget/
├── components/     # React components
├── hooks/         # Custom React hooks
├── services/      # Core services
├── utils/         # Utility functions
├── types.ts       # TypeScript types
└── index.ts       # Entry point
```

## Security

- Uses secure WebSocket (WSS)
- Implements proper CORS headers
- Sanitizes all inputs
- Rate limiting support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)