import { useEffect, useCallback } from 'react';
import type { WidgetConfig } from '../types';
import { createContainer } from '../utils/dom';
import { injectStyles } from '../utils/styles';

export function useWidgetDOM(config: WidgetConfig) {
  useEffect(() => {
    const container = createContainer(config);
    const cleanupStyles = injectStyles(config);

    if (!container.parentNode) {
      document.body.appendChild(container);
    }

    return () => {
      cleanupStyles();
      container.parentNode?.removeChild(container);
    };
  }, [config]);

  const getContainer = useCallback(() => {
    return document.getElementById(config.containerId);
  }, [config.containerId]);

  return {
    getContainer
  };
}