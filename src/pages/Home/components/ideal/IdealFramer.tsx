import { Framer } from './Framer'
import { FramerAbout } from './FramerAbout'

export const IdealFramer = () => {
	return (
		<section className='section section__framer'>
			<div className='framer__row'>
				<Framer />
				<FramerAbout />
			</div>
		</section>
	)
}
