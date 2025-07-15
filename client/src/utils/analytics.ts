import { v4 as uuidv4 } from 'uuid';

// Generate or retrieve session ID
export function getSessionId(): string {
  let sessionId = sessionStorage.getItem('asterik_session_id');
  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem('asterik_session_id', sessionId);
  }
  return sessionId;
}

// Track page view
export async function trackPageView(path: string): Promise<void> {
  try {
    const sessionId = getSessionId();
    const userAgent = navigator.userAgent;
    const referrer = document.referrer;

    await fetch('/api/analytics/pageview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        path,
        userAgent,
        referrer,
        sessionId,
      }),
    });
  } catch (error) {
    console.warn('Failed to track page view:', error);
  }
}

// Track AI interaction
export async function trackAiInteraction(
  currentPage: string,
  recommendationsShown: any[],
  clickedRecommendation?: string
): Promise<void> {
  try {
    const sessionId = getSessionId();

    await fetch('/api/analytics/ai-interaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        currentPage,
        recommendationsShown,
        clickedRecommendation,
      }),
    });
  } catch (error) {
    console.warn('Failed to track AI interaction:', error);
  }
}