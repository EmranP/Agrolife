// import { useEffect, useState } from 'react'
// import { getMapData } from '../../../shared/api/nasaAPI'

// interface MapData {
// 	climate: string
// 	soilQuality: string
// }

// export const useMapData = (coordinates: [number, number]) => {
// 	const [climateData, setClimateData] = useState<string | null>(null)
// 	const [soilQuality, setSoilQuality] = useState<string | null>(null)

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const data: MapData = await getMapData(coordinates[0], coordinates[1])
// 				setClimateData(data.climate)
// 				setSoilQuality(data.soilQuality)
// 			} catch (error) {
// 				console.error('Error fetching map data:', error)
// 			}
// 		}

// 		fetchData()
// 	}, [coordinates])

// 	return { climateData, soilQuality }
// }
