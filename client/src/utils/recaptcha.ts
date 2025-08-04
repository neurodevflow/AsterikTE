// reCAPTCHA utility functions
export const RECAPTCHA_SITE_KEY = '6LfP65krAAAAANLUj10EsLgK2YcGeEdA40tKOyRG';

export interface RecaptchaResponse {
  success: boolean;
  token?: string;
  error?: string;
}

export const executeRecaptcha = async (action: string): Promise<RecaptchaResponse> => {
  try {
    if (typeof window === 'undefined') {
      return { success: false, error: 'Window object not available' };
    }

    if (!window.grecaptcha) {
      console.warn('reCAPTCHA not loaded');
      return { success: true, token: 'fallback_token' };
    }

    const token = await new Promise<string>((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action })
          .then(resolve)
          .catch(reject);
      });
    });

    return { success: true, token };
  } catch (error) {
    console.error('reCAPTCHA execution failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Check if reCAPTCHA is loaded and ready
export const isRecaptchaReady = (): boolean => {
  return typeof window !== 'undefined' && !!window.grecaptcha;
};