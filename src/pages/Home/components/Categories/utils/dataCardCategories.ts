import image01 from '../../../assets/img/categories/01.png'
import image02 from '../../../assets/img/categories/02.png'
import image03 from '../../../assets/img/categories/03.png'
import image04 from '../../../assets/img/categories/04.png'
import image05 from '../../../assets/img/categories/05.png'
import image06 from '../../../assets/img/categories/06.png'

type TDataCardCategories = {
	id: number
	title: string
	image: string
}

export const dataCardCategories: TDataCardCategories[] = [
	{
		id: 1,
		title: 'EXCAVATORS',
		image: image01,
	},
	{
		id: 2,
		title: 'SCISSOR LIFT',
		image: image02,
	},
	{
		id: 3,
		title: 'BOOMLIFT',
		image: image03,
	},
	{
		id: 4,
		title: 'FORKLIFT',
		image: image04,
	},
	{
		id: 5,
		title: 'COMPACTION',
		image: image05,
	},
	{
		id: 6,
		title: 'ROLLER',
		image: image06,
	},
]
