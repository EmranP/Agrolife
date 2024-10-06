import { FC } from 'react'
import { EarthMap } from '../../../../entities/map/ui/EarthMap'
import { Title } from '../../ui/Title'
import { CardsAchievements } from './CardsAchievements'

export const Achievement: FC = () => {
	return (
		<section className='section__achievement'>
			<CardsAchievements />
			<Title
				title='Find Your Perfect Plot'
				subtitle='find the ideal location for your crops, ensuring success and sustainability.'
			/>
			<EarthMap />
		</section>
	)
}
