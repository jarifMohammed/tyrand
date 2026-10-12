// Google Analytics (GA4) Configuration & Event Utilities
// Measurement ID directly configured for production reliability
export const GA_MEASUREMENT_ID = "G-Y31D36ECVC";

export type GtagValue = string | number | boolean | null | undefined;
export type GtagParams = Record<string, GtagValue | GtagValue[]>;

// TypeScript declarations for window.gtag and window.dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (
      command: "config" | "event" | "js" | "set" | "consent",
      targetIdOrAction: string | Date,
      params?: GtagParams
    ) => void;
  }
}

/**
 * Log pageview events when route changes in Next.js App Router
 */
export const pageview = (url: string) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
};

/**
 * Generic custom event dispatcher for Google Analytics
 */
export const event = (action: string, params: GtagParams = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
};

/**
 * Recommended GA4 Lead Generation Event
 * Tracks successful contact form submissions and inquiry valuations
 */
export const trackLead = ({
  formName = "Contact Form",
  budget,
  reasons,
}: {
  formName?: string;
  budget?: number;
  reasons?: string[];
}) => {
  event("generate_lead", {
    event_category: "Form Submission",
    event_label: formName,
    value: budget,
    currency: "EUR",
    contact_reasons: reasons ? reasons.join(", ") : undefined,
  });
};

/**
 * Track Call-To-Action (CTA) interactions
 */
export const trackCTAClick = (buttonName: string, location: string) => {
  event("cta_click", {
    event_category: "Engagement",
    event_label: buttonName,
    cta_location: location,
  });
};

/**
 * Track external outbound links
 */
export const trackOutboundLink = (url: string) => {
  event("click", {
    event_category: "Outbound Link",
    event_label: url,
    transport_type: "beacon",
  });
};
