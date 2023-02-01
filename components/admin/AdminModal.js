import React from 'react'
import {
	Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
	ModalFooter, ModalBody,
	useDisclosure, useToast
} from '@chakra-ui/react'
import AuthAxios from '../../Helpers/AuthAxios'


function AdminModal({ data }) {
	const toast = useToast()
	const Axios = AuthAxios();
	const { name, id, nameOption, color, description, url } = data
	const { isOpen, onOpen, onClose } = useDisclosure()

	const Tost = () => {
		toast({
			title: 'deleted ...',
			description: "articals is deleted successfly",
			status: 'success',
			duration: 9000,
			isClosable: true,
			position: 'top'
		})
	}
	const DeleteArtical = (id) => {
		console.log('is clicks')
		Axios.delete(`http://localhost:8000/api/${url}` + id).then(res => console.log('jksa altigani'))
		onClose();
		Tost();
	}
	return (
		<>
			<Button onClick={onOpen} size='xs' colorScheme={color}>{name}</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{description}
					</ModalBody>
					<ModalFooter>
						<Button colorScheme={color} mr={3} onClick={() => DeleteArtical(id)}>
							{nameOption}
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
export default AdminModal
