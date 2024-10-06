import { FC } from 'react'
import { dataCardCategories } from './utils/dataCardCategories'

interface ICategoriesCard {
	title: string
	image: string
}

const CategoriesCard = ({ title, image }: ICategoriesCard) => {
	return (
		<div className='card__categories'>
			<img src={image} alt='' />
			<h1>{title}</h1>
		</div>
	)
}

export const CardsCategories: FC = () => {
	return (
		<div className='categories__row'>
			{dataCardCategories.map(item => (
				<CategoriesCard key={item.id} image={item.image} title={item.title} />
			))}
		</div>
	)
}
