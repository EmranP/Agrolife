export const Title = ({
	title,
	subtitle,
}: {
	title: string
	subtitle: string
}) => {
	return (
		<div className='title__page'>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
		</div>
	)
}
