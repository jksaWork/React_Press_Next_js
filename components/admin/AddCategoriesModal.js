import React, { useState } from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Box,
	Button, Text, Input
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import AuthAxios from '../../Helpers/AuthAxios'


function AddCategoriesModal() {
	const Axios = AuthAxios()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const finalRef = React.useRef()
	const initialValues = {
		name: '',
	}
	const [Name, setName] = useState('')
	const onSubmit = (e) => {
		e.preventDefault();
		console.log('clicked')
		const API = 'http://localhost:8000/api/categories'
		Axios.post(API, {
			name: Name
		}).then(() => {
			setName('')
			console.log('done')
		});
		onClose()
	}


	return (
		<>
			<Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
				Some other content that'll receive focus on close.
			</Box>

			<Button mt={4} onClick={onOpen}>
				Add Category
			</Button>
			<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>add category</ModalHeader>
					<ModalCloseButton />
					<ModalBody p='5'>
						<form p='5' onSubmit={(e) => onSubmit(e)}>
							<Text mb='8px'> Categry name: </Text>
							<Input
								placeholder='Here is a sample placeholder'
								size='sm'
								variant='filled'
								name='name'
								id='name'
								value={Name}
								onChange={(e) => setName(e.target.value)}
							/>

						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default AddCategoriesModal
