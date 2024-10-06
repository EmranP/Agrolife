import { PropsWithChildren } from 'react'
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
	useRouteError,
} from 'react-router-dom'
import { Map } from '../../pages/Map/Map'
import { App } from '../App'

interface RouteError {
	statusText?: string
	message?: string
}

const BubbleError = () => {
	const error = useRouteError() as RouteError
	if (error)
		throw new Error(error.statusText || error.message || 'Unknown Error')
	return null
}

const router: RouteObject[] = createBrowserRouter([
	{
		path: '/*',
		element: <App />,
		errorElement: <h1>Not found</h1> || <BubbleError />,
	},
	{
		path: 'map',
		element: <Map />,
		errorElement: <h1>Not found</h1> || <BubbleError />,
	},
])

export const BrowserRouter = ({ children }: PropsWithChildren) => {
	return <RouterProvider router={router}>{children}</RouterProvider>
}
