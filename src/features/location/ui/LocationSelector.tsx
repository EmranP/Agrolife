import { FC } from 'react'
import { EarthMap } from '../../../entities/map/ui/EarthMap'

export const LocationSelector: FC = () => {
	return (
		<div className='location__map'>
			<h1>Информация о местоположении</h1>
			{/* 2V */}
			<EarthMap />
		</div>
	)
}

// import { useMapData } from '../../../entities/map/model/useMapData'
// import { Map2D } from '../../../entities/map/ui/Map2D'
// import { Map3D } from '../../../entities/map/ui/Map3D'

// const initialCoordinates: [number, number] = [55.751244, 37.618423] // Москва
// const [coordinates, setCoordinates] = useState<[number, number] | null>(null)
// const { climateData, soilQuality } = useMapData(coordinates || [30, 50])

// const handleMapClick = (coords: [number, number]) => {
// 	setCoordinates(coords)
// }

{
	/* 1V */
}
{
	/* <Map2D onClick={handleMapClick} /> */
}
{
	/* <Map3D /> */
}
{
	/* {climateData && soilQuality && (
				<div>
					<h2>Климатические данные: {climateData}</h2>
					<h2>Качество почвы: {soilQuality}</h2>
				</div>
			)} */
}
