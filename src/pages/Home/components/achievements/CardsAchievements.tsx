import { FC } from 'react'
import card01 from '../../assets/img/about/01.png'
import card02 from '../../assets/img/about/02.svg'
import card03 from '../../assets/img/about/03.svg'

interface ICardAchievement {
	title: string
	subtitle: string
	image: string
}

const CardAchievements: FC<ICardAchievement> = ({ title, subtitle, image }) => {
	return (
		<div className='achievement__item'>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</div>
	)
}

export const CardsAchievements: FC = () => {
	return (
		<div className='layout__container'>
			<div className='card__achievement'>
				<CardAchievements title='40+' subtitle='Countries' image={card01} />
				<CardAchievements title='2577+' subtitle='Farmers' image={card02} />
				<CardAchievements title='33+' subtitle='Services' image={card03} />
			</div>
		</div>
	)
}
