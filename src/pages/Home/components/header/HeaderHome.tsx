// left
import headerTop02 from '../../assets/icons/header/top/02.svg'
// right
import headerTop03 from '../../assets/icons/header/top/03.svg'
import headerTop04 from '../../assets/icons/header/top/04.svg'
import headerTop05 from '../../assets/icons/header/top/05.svg'
import headerTop06 from '../../assets/icons/header/top/06.svg'
import './header.scss'
// body
import { FC } from 'react'
import { Link } from 'react-router-dom'
import headerBody01 from '../../assets/icons/header/body/01.svg'

export const Header: FC = () => {
	return (
		<header className='header'>
			<div className='header__top'>
				<div className='layout__container'>
					<div className='header-row header__row-top'>
						<div className='header__top-col'>
							<div className='col-item col-item__time'>
								<img src={headerTop02} alt='' />
								<h1>Mon - Sat 9.00 - 18.00</h1>
							</div>
							<div className='col-item col-item__media'>
								<img src={headerTop03} alt='' />
								<img src={headerTop04} alt='' />
								<img src={headerTop05} alt='' />
								<img src={headerTop06} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='header__body'>
				<div className='layout__container'>
					<div className='header-row'>
						<div className='header__body-col'>
							<div className='header__body-logo'>
								<h1>Logo</h1>
							</div>
							<div className='header__body-support'>
								<img src={headerBody01} alt='' />
								<h1>
									Get Quick Support <br /> +993 61000000
								</h1>
							</div>
						</div>
						<nav className='header__body-menu'>
							<ul>
								<li>
									<Link to={'/'}>home</Link>
								</li>
								<li>
									<Link to={'map'}>map</Link>
								</li>
								<li>
									<Link to={'farmers'}>farmers</Link>
								</li>
								<li>
									<Link to={'services'}>services</Link>
								</li>
								<li>
									<Link to={'room'}>my room</Link>
								</li>
								<li>
									<Link to={'about'}>about us</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}
