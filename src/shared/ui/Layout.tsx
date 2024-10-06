import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
	return <div className='app-layout'>{children}</div>
}
