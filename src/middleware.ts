import { type NextRequest, NextResponse } from 'next/server'

const BASIC_AUTH_USER = process.env.AUTH_USER
const BASIC_AUTH_PASS = process.env.AUTH_PASSWORD

export function middleware(request: NextRequest) {
	const authHeader = request.headers.get('authorization')

	if (!authHeader || !authHeader.startsWith('Basic ')) {
		return new NextResponse('Unauthorized', {
			status: 401,
			headers: {
				'WWW-Authenticate': 'Basic realm="Dashboard Access"',
			},
		})
	}

	const base64Credentials = authHeader.split(' ')[1]
	const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
	const [username, password] = credentials.split(':')

	const isAuthorized =
		username === BASIC_AUTH_USER && password === BASIC_AUTH_PASS

	if (!isAuthorized) {
		return new NextResponse('Unauthorized', { status: 401 })
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
