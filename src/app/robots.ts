import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      // Google AI crawler — allow full access for AI-powered search features
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Google extended AI training — allow for AI Overviews
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // GPTBot — OpenAI web crawler
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // ChatGPT user agent
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/'],
      },
      // Anthropic Claude web crawler
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Perplexity AI crawler
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Common Content Bot (CCBot) — used by various AI services
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Bing AI crawler
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://tyrand.dev/sitemap.xml',
    host: 'https://tyrand.dev',
  };
}
