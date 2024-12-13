import { useState, useCallback } from 'react';
import type { WidgetConfig } from '../types';
import { DEFAULT_CONFIG } from '../constants';

export function useWidgetConfig(initialConfig?: Partial<WidgetConfig>) {
  const [config, setConfig] = useState<WidgetConfig>({ 
    ...DEFAULT_CONFIG,
    ...initialConfig 
  });

  const updateConfig = useCallback((newConfig: Partial<WidgetConfig>) => {
    setConfig(current => ({
      ...current,
      ...newConfig
    }));
  }, []);

  return {
    config,
    updateConfig
  };
}