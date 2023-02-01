import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, Button } from '@chakra-ui/react'
import user from '../../Helpers/User.js'
import { MdUser } from 'react-icons/md'
import Link from 'next/link'
function DropPofile() {
	const userdate = user.UserDate()
	return (
		<div>
			<Menu>
				{/* 				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
				</MenuButton>
				*/}
				<MenuButton as={Button} >
					{userdate ? userdate.name : null} <icon as={MdUser} />
				</MenuButton>
				<MenuList>
					<MenuGroup title='Profile'>
						<MenuItem>My profile</MenuItem>
						<MenuItem>My articlas </MenuItem>
					</MenuGroup>
					<MenuDivider />
					<MenuGroup title='Help'>
						<Link href={'/logout'}>
							<MenuItem>Logout</MenuItem>
						</Link>
					</MenuGroup>
				</MenuList>
			</Menu>
		</div>
	)
}

export default DropPofile
