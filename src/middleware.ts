import { type NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/auth'

const publicRoutes = ['/sign-in']
const protectedRoutes = ['/dashboard']

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const isProtectedRoute = protectedRoutes.includes(path)

	const isPublicRoute = publicRoutes.includes(path)
	const session = await getSession()

	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/sign-in', request.nextUrl))
	}

	if (isPublicRoute && session?.userId) {
		return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
}
