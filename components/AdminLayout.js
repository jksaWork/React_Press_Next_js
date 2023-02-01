import React from 'react'
import Drawer from './admin/Drawer.js'
import MessgesNotifcationDrawer from './admin/MessgesNotifcationDrawer.js'
import {
	Box, Flex, Heading, Spacer, Button, Input,
	InputLeftElement,
	InputGroup,
	Icon,
} from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'
import DropPofile from './admin/DropPofile'
import FetchNotification from '../Helpers/FetchNotification'


function AdminHeader() {
	const notifcation = {
		name: 'notification',
		icon: 'notify',
		type: 'n'
	}
	const messages = {
		name: 'messages',
		icon: 'messages',
		type: 'm'
	}
	const { data, isloading, error } = FetchNotification();

	return (
		<div className='site-header'>
			<Flex>
				<Box>
					<Drawer />
				</Box>
				<Box p='2'>
					<Heading size='md'>Control Panel</Heading>
				</Box>
				<Spacer />
				<Box w='300px'>
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							children={<MdSearch color='gray.300' />}
						/>
						<Input type='tel'
							variant='flushed'
							placeholder='Search On Admin Panle' />
					</InputGroup>
				</Box>
				<Spacer />
				<Box mx='2'>
					<MessgesNotifcationDrawer data={notifcation} />
				</Box>
				<Box mx='2'>
					<MessgesNotifcationDrawer data={messages} />
				</Box>
				<Box><DropPofile /></Box>
			</Flex>

		</div>
	)
}
function AdminFooter() {
	return (
		<div className='admin-footer'>
			<footer className="w-full max-w-container mx-auto border-t py-10 text-center flex items-center justify-center text-sm text-gray-500">
				<p>&copy; 2022   alwefage news. All rights reserved.</p>
				<p className="ml-3 border-l border-gray-200 pl-3">
					<a className="hover:text-teal-600" href="/privacy-policy">Privacy Policy</a>
				</p>
			</footer></div>
	)
}
const AdminLayout = { AdminFooter, AdminHeader }
export default AdminLayout
