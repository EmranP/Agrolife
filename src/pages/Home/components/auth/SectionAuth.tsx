import React, { useState } from 'react'
import { Login } from './Login'
import './login.scss'

export const SectionAuth = () => {
	const [value, setValue] = useState<string>('')

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value)
	return (
		<section className='main__section'>
			<div className='layout__container'>
				<h1>agriculture matter for a good production</h1>
				<Login value={value} onChange={onChangeInput} />
			</div>
		</section>
	)
}
