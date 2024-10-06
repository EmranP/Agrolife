import { Box, Button, Modal, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { getAIResponse } from '../model/assistantAPI'
import './assistant.scss'

export const AssistantModal = () => {
	const [open, setOpen] = useState(false)
	const [input, setInput] = useState('')
	const [response, setResponse] = useState('')
	const [loading, setLoading] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleAsk = async () => {
		setLoading(true)
		try {
			const aiResponse = await getAIResponse(input)
			setResponse(aiResponse)
		} catch (error) {
			setResponse('Ошибка при запросе к AI')
			console.error(error)
		} finally {
			setLoading(false)
		}
	}
	return (
		<div className='modal__ai'>
			<Button
				style={{
					position: 'fixed',
					bottom: 20,
					right: 20,
					backgroundColor: '#025002',
					color: '#fff',
					borderRadius: 10,
					fontWeight: 600,
				}}
				variant='contained'
				onClick={handleOpen}
			>
				AI помощника
			</Button>
			<Modal open={open} onClose={handleClose}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Box
						sx={{
							position: 'absolute',
							top: '10%',
							left: '50%',
							transform: 'translate(-50%, 50%)',
							width: 400,
							bgcolor: 'background.paper',
							borderRadius: '10px',
							boxShadow: 24,
							p: 4,
						}}
					>
						<h1 style={{ color: '#242424' }} className='title__ai'>
							AI
						</h1>
						{response && (
							<motion.div
								className='ai__response'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
								style={{ marginTop: '20px' }}
							>
								<h4 style={{ color: '#242424', fontSize: 20 }}>Ответ AI:</h4>
								<p style={{ color: '#242424', fontSize: 18 }}>{response}</p>
							</motion.div>
						)}
						<h3 style={{ color: '#242424', fontSize: 20, marginBottom: 20 }}>
							Задайте вопрос AI
						</h3>
						<TextField
							fullWidth
							value={input}
							onChange={e => setInput(e.target.value)}
							label='Ваш вопрос'
							variant='outlined'
						/>
						<Button
							variant='contained'
							onClick={handleAsk}
							disabled={loading}
							style={{
								marginTop: '15px',
								backgroundColor: '#025002',
								color: '#fff',
								borderRadius: 10,
							}}
						>
							{loading ? 'Загрузка...' : 'Задать вопрос'}
						</Button>
					</Box>
				</motion.div>
			</Modal>
		</div>
	)
}
