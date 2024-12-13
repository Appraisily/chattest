import type { WidgetConfig } from '../types';
import { DEFAULT_CONFIG } from '../constants';

export const createContainer = (config: WidgetConfig = DEFAULT_CONFIG) => {
  const container = document.createElement('div');
  container.id = config.containerId || DEFAULT_CONFIG.containerId;
  return container;
};