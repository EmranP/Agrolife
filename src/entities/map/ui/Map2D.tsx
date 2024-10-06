// import mapboxgl from 'mapbox-gl'
// import 'mapbox-gl/dist/mapbox-gl.css'
// import { FC, useEffect, useRef } from 'react'

// mapboxgl.accessToken =
// 	'pk.eyJ1IjoiZW1yYW4yMjExIiwiYSI6ImNtMXRlMTNpODAxZ3AycW9saWxyODY4YXYifQ.BIvWrvLO2X7ikxlrXjpSgA'

// interface Map2DProps {
// 	onClick: (coordinates: [number, number]) => void
// }

// export const Map2D: FC<Map2DProps> = ({ onClick }) => {
// 	const mapContainer = useRef<HTMLDivElement>(null)
// 	const mapRef = useRef<mapboxgl.Map | null>(null)

// 	useEffect(() => {
// 		if (mapContainer.current) {
// 			const map = new mapboxgl.Map({
// 				container: mapContainer.current!,
// 				style: 'mapbox://styles/mapbox/streets-v11',
// 				center: [30, 50],
// 				zoom: 3,
// 			})

// 			map.on('click', event => {
// 				const { lng, lat } = event.lngLat
// 				onClick([lng, lat])
// 			})

// 			mapRef.current = map

// 			return () => map.remove()
// 		}
// 	}, [onClick])

// 	return (
// 		<div
// 			ref={mapContainer}
// 			style={{ width: '100%', height: '500px', marginBottom: 30 }}
// 		/>
// 	)
// }
