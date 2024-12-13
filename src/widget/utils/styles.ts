import type { WidgetConfig } from '../types';
import { DEFAULT_CONFIG } from '../constants';

export const injectStyles = (config: WidgetConfig = DEFAULT_CONFIG) => {
  const style = document.createElement('style');
  const position = config.position || DEFAULT_CONFIG.position;
  const zIndex = config.zIndex || DEFAULT_CONFIG.zIndex;
  const containerId = config.containerId || DEFAULT_CONFIG.containerId;

  style.textContent = `
    #${containerId} {
      position: fixed;
      z-index: ${zIndex};
      ${position === 'bottom-right' ? 'right: 20px;' : 'left: 20px;'}
      bottom: 20px;
    }

    @media (max-width: 768px) {
      #${containerId} {
        right: 10px;
        bottom: 10px;
      }
    }
  `;

  document.head.appendChild(style);
  
  return () => style.remove();
};