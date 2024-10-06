import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

interface IModal {
	onClose: () => void
	children: ReactNode
	position: { x: number; y: number } // Позиция для отображения модального окна
}

export const ModalUI: FC<IModal> = ({ onClose, children, position }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, type: 'spring' }}
			className='modal-overlay'
			onClick={onClose}
			style={{ top: position.y, left: position.x, position: 'absolute' }}
		>
			<div
				className='modal-content'
				onClick={e => e.stopPropagation()}
				style={{ position: 'relative' }}
			>
				<button onClick={onClose} className='modal-close-button'>
					&times;
				</button>
				{children}
			</div>
		</motion.div>
	)
}
