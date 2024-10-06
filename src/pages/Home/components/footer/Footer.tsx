import { FooterBody } from './FooterBody'
import { FooterContent } from './FooterContent'
import { FooterTop } from './FooterTop'

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='layout__container'>
				<FooterTop />
				<FooterContent />
				<FooterBody />
			</div>
		</footer>
	)
}
