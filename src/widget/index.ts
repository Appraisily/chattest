import { Widget } from './core/Widget';
import type { WidgetConfig } from './types';

// Create and export the widget instance
const widget = new Widget();

// Export for global usage
declare global {
  interface Window {
    ChatWidget: {
      init: (config?: Partial<WidgetConfig>) => void;
      destroy: () => void;
    };
  }
}

// Initialize global widget object
window.ChatWidget = {
  init: (config?: Partial<WidgetConfig>) => widget.init(config),
  destroy: () => widget.destroy()
};

// Auto-initialize if config is provided via data attributes
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔧 Chat Widget script loaded');
  
  // Auto-initialize with default config
  try {
    widget.init();
    console.log('✨ Chat Widget initialized');
  } catch (error) {
    console.error('❌ Failed to initialize Chat Widget:', error);
  }
});