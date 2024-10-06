import icon01 from '../../assets/img/ideal/02.svg'

const FramerCard = ({ title }: { title: string }) => {
	return (
		<div className='card-framer'>
			<h1>{title}</h1>
			<p>read more</p>
			<div className='card__box'></div>
		</div>
	)
}

export const FramerAbout = () => {
	return (
		<>
			<div className='framer__about'>
				<FramerCard title='I am Lyudmila. I am Quality Control Engineer in Industrial Construction. When I was younger, I heard many stories from grandfather who was a civil engineer. The stories inspired me to eventually become an engineer. My advice for woman..' />
				<FramerCard title='I am Lyudmila. I am Quality Control Engineer in Industrial Construction. When I was younger, I heard many stories from grandfather who was a civil engineer. The stories inspired me to eventually become an engineer. My advice for woman..' />
				<FramerCard title='I am Lyudmila. I am Quality Control Engineer in Industrial Construction. When I was younger, I heard many stories from grandfather who was a civil engineer. The stories inspired me to eventually become an engineer. My advice for woman..' />
				<FramerCard title='I am Lyudmila. I am Quality Control Engineer in Industrial Construction. When I was younger, I heard many stories from grandfather who was a civil engineer. The stories inspired me to eventually become an engineer. My advice for woman..' />
				<FramerCard title='I am Lyudmila. I am Quality Control Engineer in Industrial Construction. When I was younger, I heard many stories from grandfather who was a civil engineer. The stories inspired me to eventually become an engineer. My advice for woman..' />
				<div className='card-framer'>
					<h1>Show all farmers..</h1>
					<img src={icon01} alt='' />
				</div>
			</div>
		</>
	)
}
