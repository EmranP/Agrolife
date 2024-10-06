import { FC, useEffect, useRef, useState } from 'react'
import { fetchClimateData, fetchSoilData } from '../../../shared/api/mapAPI'
import { ModalUI } from '../../../shared/ui/ModalUI'

interface ClimateData {
	climate: string
	soilQuality: string
}

export const EarthMap: FC = () => {
	const mapContainerRef = useRef<HTMLDivElement | null>(null)
	const mapInstanceRef = useRef<any>(null) // Ref для хранения экземпляра карты
	const [coords, setCoords] = useState<[number, number]>([55.751244, 37.618423]) // Default coordinates (Moscow)
	const [data, setData] = useState<ClimateData | null>(null)
	const [info, setInfo] = useState<string | null>(null) // Info about soil and climate
	const [isDataFetched, setIsDataFetched] = useState<boolean>(false) // Track if data is fetched initially
	const [showModal, setShowModal] = useState<boolean>(false) // State для отображения модального окна
	const [modalPosition, setModalPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	}) // Координаты для отображения модального окна

	// Initialize the map and set event listeners for map interaction
	useEffect(() => {
		if (!mapContainerRef.current || mapInstanceRef.current || !window.ymaps)
			return

		window.ymaps.ready(() => {
			if (mapContainerRef.current?.innerHTML !== '') {
				mapContainerRef.current.innerHTML = '' // Очищаем контейнер, если в нём уже что-то есть
			}

			const map = new window.ymaps.Map(mapContainerRef.current, {
				center: coords,
				zoom: 5,
			})

			const placemark = new window.ymaps.Placemark(
				coords,
				{},
				{ draggable: true }
			)
			map.geoObjects.add(placemark)
			mapInstanceRef.current = map // Сохраняем экземпляр карты в рефе

			// Handle map click
			map.events.add('click', (e: any) => {
				const clickedCoords = e.get('coords')

				// Проверяем, находится ли клик внутри границ карты
				const bounds = map.getBounds() // Получаем границы карты
				if (
					clickedCoords[0] >= bounds[0][0] &&
					clickedCoords[0] <= bounds[1][0] &&
					clickedCoords[1] >= bounds[0][1] &&
					clickedCoords[1] <= bounds[1][1]
				) {
					setCoords([clickedCoords[0], clickedCoords[1]])
					placemark.geometry.setCoordinates(clickedCoords)

					// Устанавливаем координаты для отображения модального окна на месте клика
					const clickPosition = e.get('domEvent').originalEvent
					setModalPosition({
						x: clickPosition.clientX,
						y: clickPosition.clientY,
					})

					fetchEarthData(clickedCoords[0], clickedCoords[1])
					setShowModal(true) // Показать модальное окно при клике внутри карты
				}
			})

			// Handle placemark drag and drop
			placemark.events.add('dragend', () => {
				const newCoords = placemark.geometry.getCoordinates()
				setCoords([newCoords[0], newCoords[1]])
				fetchEarthData(newCoords[0], newCoords[1])
			})

			// Fetch initial data when the map loads for the first time
			if (!isDataFetched) {
				fetchEarthData(coords[0], coords[1])
				setIsDataFetched(true)
			}
		})
	}, [coords, isDataFetched])

	// Fetch both climate and soil data
	const fetchEarthData = async (lat: number, lon: number) => {
		try {
			const climate = await fetchClimateData(lat, lon)
			const soilQuality = await fetchSoilData(lat, lon)

			setData({ climate, soilQuality })
			setInfo(`Почва: ${soilQuality}, Климат: ${climate}`)
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
			setInfo('Не удалось загрузить данные.')
		}
	}

	// Закрытие модального окна
	const handleCloseModal = () => {
		setShowModal(false)
	}

	return (
		<div className='page__map'>
			<div
				ref={mapContainerRef}
				style={{ width: '100%', height: '100%' }}
			></div>

			{/* Модальное окно, показывающее информацию при клике */}
			{showModal && (
				<ModalUI onClose={handleCloseModal} position={modalPosition}>
					<div className='modal-ui'>
						<h3>Информация о местоположении</h3>
						<p>Климат: {data?.climate}</p>
						<p>Качество почвы (pH): {data?.soilQuality}</p>
					</div>
				</ModalUI>
			)}
		</div>
	)
}
