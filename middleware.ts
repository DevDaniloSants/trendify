import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server';

const publicRoutes = [
    {
        path: '/',
        whenAuthenticated: 'next',
    },
    {
        path: '/sign-in',
        whenAuthenticated: 'redirect',
    },
] as const;

const REDIRECT_WHEN_AUTHENTICATED = '/sign-in';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    const publicRoute = publicRoutes.find((route) => route.path === path);
    const authToken = request.cookies.get('access_token');

    if (!authToken && publicRoute) {
        return NextResponse.next();
    }

    if (!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED;

        return NextResponse.redirect(redirectUrl);
    }

    if (
        authToken &&
        publicRoute &&
        publicRoute.whenAuthenticated === 'redirect'
    ) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = '/';

        return NextResponse.redirect(redirectUrl);
    }

    if (authToken && !publicRoute) {
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
};
