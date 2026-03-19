import { NextRequest, NextResponse } from 'next/server';

// Proxy chat requests to the OpenClaw Gateway
export async function POST(request: NextRequest) {
  try {
    const { appId, message } = await request.json();
    if (!appId || !message) return NextResponse.json({ error: 'appId and message required' }, { status: 400 });

    // TODO: Look up app's gateway_url and api_key from Supabase
    // For MVP, pass them in the request
    const { gatewayUrl, apiKey } = await request.json();

    if (!gatewayUrl || !apiKey) {
      return NextResponse.json({ error: 'Gateway URL and API key required' }, { status: 400 });
    }

    const response = await fetch(`${gatewayUrl}/v1/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Gateway request failed' }, { status: 502 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: unknown) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
