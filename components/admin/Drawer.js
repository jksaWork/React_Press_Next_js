import React from 'react'
import Link from 'next/link'
import {
	Button, Drawer, DrawerFooter, DrawerHeader,
	DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, DrawerBody,
	Box, AccordionItem, AccordionIcon, List, ListItem, ListIcon,
	Icon, MenuItem, Accordion, AccordionPanel, AccordionButton
} from '@chakra-ui/react'
import { HamburgerIcon, DragHandleIcon, CalendarIcon } from '@chakra-ui/icons'
import { MdDashboard, MdPerson, MdEdit } from 'react-icons/md'

function DrawerComponents() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const placement = 'left'
	return (
		<div>
			<Button onClick={onOpen} colorScheme='white' color='black.200'>
				<Icon as={HamburgerIcon} w={5} h={5} />
			</Button>
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen} size='xs'>
				<DrawerOverlay />
				<DrawerContent>
					<Box pb='1'>
						<DrawerHeader borderBottomWidth='1px' > <Icon as={MdDashboard} w={50} h={50} /> Admin Dashboard </DrawerHeader>
					</Box>
					<DrawerBody>
						<Accordion defaultIndex={[0]} allowMultiple>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											<Icon as={CalendarIcon} w={5} h={5} mx='2' />	Articlas
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<List spacing={3}>
										<Link href={`/admin/articals/`}>
											<ListItem mx='2'>
												<ListIcon as={MdDashboard} color='blue.500' />
												index
											</ListItem>
										</Link>
										<Link href={`/admin/articals/add`}>
											<ListItem mx='2'>
												<ListIcon as={MdEdit} color='blue.500' />
												add
											</ListItem>
										</Link>
									</List>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											<Icon as={MdPerson} mx='2' /> users
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box flex='1' textAlign='left'>
											<Icon as={DragHandleIcon} w={5} h={5} mx='2' />	categories
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<List spacing={3}>
										<Link href={`/admin/categories/`}>
											<ListItem mx='2'>
												<ListIcon as={MdDashboard} color='blue.500' />
												index
											</ListItem>
										</Link>
									</List>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default DrawerComponents
