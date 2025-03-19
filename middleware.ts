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
    {
        path: '/product',
        whenAuthenticated: 'next',
    },
    {
        path: '/category',
        whenAuthenticated: 'next',
    },
    {
        path: '/about',
        whenAuthenticated: 'next',
    },
] as const;

const REDIRECT_WHEN_AUTHENTICATED = '/sign-in';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    if (path.match(/\.(jpg|jpeg|png|gif|svg|webp|css|js|ico|json)$/i)) {
        return NextResponse.next();
    }

    const publicRoute = publicRoutes.find((route) => {
        if (path.startsWith('/product/') || path.startsWith('/category')) {
            return path.startsWith(route.path);
        }
        return route.path === path;
    });
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
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
