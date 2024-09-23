import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (request.nextUrl.pathname.startsWith("/login") && !token) {
    return NextResponse.next();
  }

  if (
    request.nextUrl.pathname.startsWith("/_next/static/") ||
    request.nextUrl.pathname.startsWith("/static/")
  ) {
    return NextResponse.next();
  }

  if (!token) {
    // اگر توکن وجود نداشت، کاربر به صفحه ورود هدایت شود
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && request.nextUrl.pathname.startsWith('/login')) {
    // هدایت کاربر به صفحه اصلی
    return NextResponse.redirect(new URL('/', request.url));
  }

  // اگر توکن وجود داشت، به مسیر درخواست شده دسترسی داده می‌شود
  return NextResponse.next();
}

// لیست مسیرهایی که می‌خواهید محافظت کنید
export const config = {
  matcher: ["/:path*", "/clients/:path*"], // یا هر مسیر دیگر که می‌خواهید محافظت شود
};
