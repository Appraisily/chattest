import type { WidgetConfig } from '../types';
import { WidgetError } from '../utils/error';

export class WidgetService {
  private static instance: WidgetService | null = null;
  private initialized = false;

  private constructor() {}

  static getInstance(): WidgetService {
    if (!WidgetService.instance) {
      WidgetService.instance = new WidgetService();
    }
    return WidgetService.instance;
  }

  init(config?: Partial<WidgetConfig>): void {
    if (this.initialized) {
      throw new WidgetError('Widget already initialized');
    }
    this.initialized = true;
    // Additional initialization logic
  }

  destroy(): void {
    if (!this.initialized) {
      return;
    }
    this.initialized = false;
    WidgetService.instance = null;
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}