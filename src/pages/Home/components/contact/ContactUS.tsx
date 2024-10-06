import img01 from '../../assets/icons/contact/01.svg'
import img02 from '../../assets/icons/contact/02.svg'
import line01 from '../../assets/icons/contact/line01.svg'
import line02 from '../../assets/icons/contact/line02.svg'

export const ContactUS = () => {
	return (
		<>
			<section className='section section__contact'>
				<img src={line01} alt='' />
				<div className='contact__layout'>
					<div className='layout__container contact__container'>
						<div className='contact__row'>
							<div className='contact-info'>
								<div className='info-item'>
									<h1>
										We Help Industry To Utilize The Heavy Equipment Work Better
									</h1>
								</div>
								<div className='info-item'>
									<img src={img01} alt='' />
									<h2>Get Quick Support +993 61000000</h2>
								</div>
							</div>
							<button className='contact-btn'>
								<h1>Contact us</h1>
								<img src={img02} alt='' />
							</button>
						</div>
					</div>
				</div>
				<img src={line02} alt='' />
			</section>
		</>
	)
}
