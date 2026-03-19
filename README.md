# ClawApps — Agent → Web App Builder

Skill URL → hosted chat UI with auth + rate limiting + billing.

## Stack
- Next.js App Router + TypeScript
- Supabase (Auth + DB)
- Stripe (subscriptions)
- Railway (Gateway hosting)

## MVP
- [ ] Import skill from URL or file
- [ ] Chat UI renders and works
- [ ] Requests proxy to OpenClaw Gateway
- [ ] Usage tracking + rate limiting
- [ ] Deployable to Vercel/Railway

## Getting Started
```bash
npm install
cp .env.example .env.local
npm run dev
```
