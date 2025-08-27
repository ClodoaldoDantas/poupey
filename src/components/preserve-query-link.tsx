'use client'

import Link, { type LinkProps } from 'next/link'
import { useSearchParams } from 'next/navigation'

type PreserveQueryLinkProps = LinkProps & {
	children: React.ReactNode
}

export function PreserveQueryLink({
	children,
	href,
	...props
}: PreserveQueryLinkProps) {
	const searchParams = useSearchParams()
	const fullHref = `${href}?${searchParams.toString()}`

	return (
		<Link href={fullHref} {...props}>
			{children}
		</Link>
	)
}
