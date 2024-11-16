import { NextResponse } from 'next/server';

// 需要阻止收录的域名列表
const BLOCKED_DOMAINS = [
  'zhuyue.tech',
];

export function middleware(request) {
  const response = NextResponse.next();
  
  // 检查当前域名是否在阻止列表中
  const hostname = request.headers.get('host');
  if (BLOCKED_DOMAINS.some(domain => hostname.includes(domain))) {
    // 添加 X-Robots-Tag 响应头
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  
  return response;
}

export const config = {
  matcher: '/:path*',
};