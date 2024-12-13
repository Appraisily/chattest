export class WidgetError extends Error {
  constructor(message: string) {
    super(`[ChatWidget] ${message}`);
    this.name = 'WidgetError';
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof WidgetError) {
    console.error(error.message);
  } else {
    console.error('[ChatWidget] An unexpected error occurred:', error);
  }
};