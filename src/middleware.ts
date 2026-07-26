import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>503 Service Unavailable</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:#f5f5f5;font-family:'Courier New',monospace;color:#333;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:1rem;}
  .box{background:#fff;border:1px solid #ddd;max-width:520px;width:100%;padding:2rem;}
  .bar{background:#cc0000;color:#fff;padding:.4rem .8rem;font-size:.75rem;font-weight:bold;margin-bottom:1.5rem;display:flex;justify-content:space-between;}
  h1{font-size:1rem;font-weight:bold;margin-bottom:.8rem;color:#cc0000;}
  p{font-size:.8rem;line-height:1.7;color:#555;margin-bottom:.6rem;}
  .code{background:#f0f0f0;border:1px solid #ccc;padding:.8rem;font-size:.72rem;margin:1rem 0;line-height:1.8;color:#333;}
  .code span{color:#cc0000;}
  .footer{border-top:1px solid #eee;margin-top:1.5rem;padding-top:1rem;font-size:.7rem;color:#999;display:flex;justify-content:space-between;}
</style>
</head>
<body>
<div class="box">
  <div class="bar">
    <span>HTTP 503 &mdash; Service Unavailable</span>
    <span>fzshotit.com</span>
  </div>
  <h1>&#9888; Database Connection Failed</h1>
  <p>The server encountered an error and was unable to complete your request. The application cannot establish a connection to the database server.</p>
  <div class="code">
    <span>Error:</span> ECONNREFUSED 127.0.0.1:5432<br/>
    <span>Code:</span> ER_DB_CONNECTION_FAILED<br/>
    <span>Module:</span> /var/www/fzshotit/lib/db.js:47<br/>
    <span>Stack:</span> ConnectionError: connect ECONNREFUSED<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;at TCPConnectWrap.afterConnect<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;at Object.&lt;anonymous&gt; (server.js:12:8)
  </div>
  <p>This is a temporary issue. The site will be back online once the issue is resolved. If you need to get in touch please email <strong>fzshotit@gmail.com</strong></p>
  <div class="footer">
    <span>Request ID: a3f2c8e1-9d04</span>
    <span>Retry after: 3600s</span>
  </div>
</div>
</body>
</html>`,
    {
      status: 503,
      headers: {
        "Content-Type": "text/html",
        "Retry-After": "3600",
      },
    }
  );
}

export const config = {
  matcher: ["/((?!_next|favicon|icon|apple-icon).*)"],
};
