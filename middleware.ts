import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AI_BOTS: Record<string, string> = {
  'GPTBot': 'OpenAI',
  'ChatGPT-User': 'ChatGPT',
  'ClaudeBot': 'Anthropic',
  'Claude-Web': 'Anthropic',
  'PerplexityBot': 'Perplexity',
  'Bytespider': 'ByteDance',
  'cohere-ai': 'Cohere',
  'GoogleOther': 'Google AI',
  'Google-Extended': 'Google AI',
  'Amazonbot': 'Amazon',
  'YouBot': 'You.com',
  'AppleBot-Extended': 'Apple',
  'Meta-ExternalAgent': 'Meta',
  'anthropic-ai': 'Anthropic',
  'Diffbot': 'Diffbot',
  'CCBot': 'Common Crawl',
}

const SITE = 'aios.marketing'
const SUPABASE_URL = 'https://exzeayeoosiabwhgyquq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4emVheWVvb3NpYWJ3aGd5cXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NzQ3MDksImV4cCI6MjA2OTU1MDcwOX0.9xwKT8fyCH7GTPOEFh-1eP-l3Myfv-nwJpsAwvjEW0s'

export async function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || ''

  // Check if this is an AI bot
  let matchedBot: string | null = null
  let botCompany: string | null = null

  for (const [botSignature, company] of Object.entries(AI_BOTS)) {
    if (ua.toLowerCase().includes(botSignature.toLowerCase())) {
      matchedBot = botSignature
      botCompany = company
      break
    }
  }

  if (matchedBot && botCompany) {
    // Log to Supabase (fire and forget - don't block the request)
    fetch(`${SUPABASE_URL}/rest/v1/ai_bot_visits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        bot: botCompany,
        path: request.nextUrl.pathname,
        site: SITE,
        user_agent: ua.substring(0, 500), // Limit length
      }),
    }).catch(() => {
      // Silently fail - don't break the site if logging fails
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
}
