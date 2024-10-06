// import framer01 from '../../assets/img/ideal/01.png'
// import framer02 from '../../assets/img/ideal/02.png'
// import framer03 from '../../assets/img/ideal/03.png'
// import framer04 from '../../assets/img/ideal/04.png'
// import framer05 from '../../assets/img/ideal/05.png'
// import framer06 from '../../assets/img/ideal/06.png'
// import framer07 from '../../assets/img/ideal/07.png'
// import framer08 from '../../assets/img/ideal/08.png'
// ==================
import bg from '../../assets/img/ideal/bg.png'
import group from '../../assets/img/ideal/group.png'
export const Framer = () => {
	return (
		<div className='framer-col'>
			<h1>Find your ideal farmer</h1>
			<h2>
				Build your profile, share your knowledge, and connect with other farmers
				across the globe...
			</h2>
			<div className='framer-item'>
				<div className='items'>
					<img src={bg} className='bg__ideal' alt='' />
					<img src={group} className='persons' alt='' />
				</div>
				{/* =========== */}
				{/* <img src={framer01} alt='' />
				<img src={framer02} alt='' />
				<img src={framer03} alt='' />
				<img src={framer04} alt='' />
				<img src={framer05} alt='' />
				<img src={framer06} alt='' />
				<img src={framer07} alt='' />
				<img src={framer08} alt='' /> */}
			</div>
		</div>
	)
}
