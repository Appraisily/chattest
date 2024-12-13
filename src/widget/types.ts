export interface WidgetConfig {
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;
  containerId?: string;
  zIndex?: number;
}

export interface WidgetInstance {
  init: (config?: Partial<WidgetConfig>) => void;
  destroy: () => void;
}

declare global {
  interface Window {
    ChatWidget?: WidgetInstance;
  }
}