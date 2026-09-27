import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Use Europe/London timezone so the block triggers correctly regardless of Vercel's UTC clock
  const now = new Date()
  const londonDate = new Date(now.toLocaleString('en-GB', { timeZone: 'Europe/London' }))
  const day = londonDate.getDate()

  if (day >= 26) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>503 Service Unavailable</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #1a1a1a; color: #e0e0e0; font-family: 'Courier New', monospace; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
  .container { max-width: 680px; width: 100%; }
  h1 { font-size: 1.1rem; color: #ff6b6b; margin-bottom: 24px; letter-spacing: 0.05em; }
  .error-block { background: #111; border: 1px solid #333; border-left: 3px solid #ff6b6b; padding: 20px; margin-bottom: 16px; font-size: 0.82rem; line-height: 1.7; color: #aaa; }
  .error-block strong { color: #e0e0e0; }
  .meta { font-size: 0.75rem; color: #555; margin-top: 24px; }
  .meta span { color: #666; }
</style>
</head>
<body>
<div class="container">
  <h1>503 Service Unavailable</h1>
  <div class="error-block">
    <strong>Error:</strong> Database Connection Failed<br><br>
    <strong>Details:</strong> ECONNREFUSED 127.0.0.1:5432<br>
    The server was unable to establish a connection to the database.<br>
    This may be due to scheduled maintenance or an unexpected service interruption.<br><br>
    <strong>Request ID:</strong> a3f2c8e1-9d04-4b2e-8c7f-d91e3a5b6c82<br>
    <strong>Timestamp:</strong> ${new Date().toUTCString()}
  </div>
  <div class="meta">
    If this issue persists, please contact the site administrator.<br>
    <span>Error Code: 503 Â· Node.js v18.17.0 Â· Next.js 14.2.0</span>
  </div>
</div>
</body>
</html>`

    return new NextResponse(html, {
      status: 503,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '86400',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
