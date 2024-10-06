import { CardsCategories } from './CardsCategories'

export const CategoriesLayout = () => {
	return (
		<section className='section section__categories'>
			<div className='layout__container'>
				<div className='title__categories'>
					<h2>We Promise To Find You The Right Equipment</h2>
					<h1>Browse Machinery Categories</h1>
				</div>
				<CardsCategories />
			</div>
		</section>
	)
}
