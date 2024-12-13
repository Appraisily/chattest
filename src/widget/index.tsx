import { Widget } from './Widget';
import type { WidgetConfig } from './types';

// Initialize global widget object
const widget = new Widget();

// Export for GTM and direct usage
window.AppraisilyChatWidget = {
  init: (config?: WidgetConfig) => widget.init(config),
  destroy: () => widget.destroy()
};