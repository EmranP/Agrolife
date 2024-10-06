import flag from '../../assets/img/main/02.png'

export const Login = ({
	value,
	onChange,
}: {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
	return (
		<div className='card__login'>
			<form action='#' className='card__form'>
				<h1>Welcome onboard with us!</h1>
				<div className='form__action'>
					<label htmlFor='phone'>Enter your phone number</label>
					<div className='form__input'>
						<input
							type='tel'
							placeholder='+993'
							value={value}
							onChange={onChange}
						/>
						<img src={flag} alt='' className='active__flag' />
					</div>
					<button type='submit'>Sign in</button>
					<h2>
						Already have an account? <span>Log in</span> Here
					</h2>
				</div>
			</form>
		</div>
	)
}
