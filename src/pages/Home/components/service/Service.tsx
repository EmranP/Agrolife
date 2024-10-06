import { ServiceAbout } from './ServiceAbout'
import { ServiceAssets } from './ServiceAssets'

export const Service = () => {
	return (
		<section className='section section__service'>
			<div className='layout__container'>
				{/* <img className='bg__service' src={bg} alt='' /> */}
				<div className='service__row'>
					<ServiceAssets />
					<ServiceAbout />
				</div>
			</div>
		</section>
	)
}
