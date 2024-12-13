import { createRoot, type Root } from 'react-dom/client';
import React from 'react';
import { ChatWidget } from '@/components/chat';
import { createContainer, createStyles } from './dom';
import { handleError } from './errors';
import { DEFAULT_CONFIG } from './constants';
import type { WidgetConfig } from './types';

export class Widget {
  private container: HTMLElement | null = null;
  private root: Root | null = null;
  private config: WidgetConfig;
  private cleanup: (() => void)[] = [];

  constructor(config?: Partial<WidgetConfig>) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  private isInitialized = () => {
    return !!this.container && !!this.root;
  };

  private setupDOM = () => {
    try {
      // Create and append container
      this.container = createContainer(this.config);
      if (!this.container.parentNode) {
        document.body.appendChild(this.container);
      }

      // Create and append styles
      const style = createStyles(this.config);
      document.head.appendChild(style);

      // Add cleanup for styles
      this.cleanup.push(() => style.remove());
    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  private mountComponent = () => {
    if (!this.container) return;

    try {
      this.root = createRoot(this.container);
      this.root.render(
        React.createElement(React.StrictMode, null,
          React.createElement(ChatWidget)
        )
      );
    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  init = (config?: Partial<WidgetConfig>) => {
    if (this.isInitialized()) {
      console.warn('[AppraisilyChatWidget] Widget already initialized');
      return;
    }

    try {
      if (config) {
        this.config = { ...this.config, ...config };
      }

      this.setupDOM();
      this.mountComponent();
    } catch (error) {
      handleError(error);
      this.destroy();
    }
  };

  destroy = () => {
    try {
      if (this.root) {
        this.root.unmount();
        this.root = null;
      }

      this.cleanup.forEach(fn => fn());
      this.cleanup = [];

      if (this.container && this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
        this.container = null;
      }
    } catch (error) {
      handleError(error);
    }
  };
}