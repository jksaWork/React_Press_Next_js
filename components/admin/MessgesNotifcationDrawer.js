import React from 'react'

import {
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Icon
} from '@chakra-ui/react'

import { MdSettings, MdMail, MdNotifications } from 'react-icons/md'
import NotificationTab from './NotificationTab';




function MessgesNotifcationDrawer({ data }) {
	const { icon, name, type } = data;
	const { isOpen, onOpen, onClose } = useDisclosure()
	const placement = 'right'
	return (
		<div>
			<Button onClick={onOpen} size='sm' colorScheme='white' color='black.200'>
				{type == 'n' ? <Icon as={MdNotifications} w={10} h={10} /> : <Icon as={MdMail} w={8} h={8} />}
			</Button>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen} size='md'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth='1px'>  <Icon as={MdNotifications} w={10} h={10} />  {name}  </DrawerHeader>
					<DrawerBody>
						{type == 'n' ? <NotificationTab /> : <Icon as={MdMail} w={8} h={8} />}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default MessgesNotifcationDrawer
