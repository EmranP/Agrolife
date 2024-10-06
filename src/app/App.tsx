import { FC, lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from '../shared/ui/Layout'
import './index.scss'
// Import component
const Home = lazy(() => import('../pages/Home/Home'))

const Map = lazy(() => import('../pages/Map/Map'))

export const App: FC = () => {
	const location = useLocation()
	return (
		<Layout>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes location={location} key={location.key}>
					<Route path='/' element={<Home />} />
					<Route path='map' element={<Map />} />
				</Routes>
			</Suspense>
		</Layout>
	)
}
