import React from 'react'
import {
	Stack,
	Box,
	Heading,
	Text,
	GridItem,
	Grid, WrapItem, Avatar
} from '@chakra-ui/react'
function Feature({ title, desc, ...rest }) {
	return (
		<Box p={3} shadow='md' borderWidth='1px' {...rest}>
			<Grid templateColumns='50px 1fr' gap={2} alignItems='center'>
				<GridItem>
					<WrapItem>
						<Avatar name='Jola Aioluwani' src='https://bit.ly/tioluwani-kolawole' />
					</WrapItem>
				</GridItem>
				<GridItem>
					<Heading fontSize='sm'>{title}</Heading>
					<Text >{desc}</Text>
				</GridItem>
			</Grid>
		</Box>

	)
}

function NotificationTab() {
	return (
		<Stack spacing={1}>
			<Feature
				title='Plan Money'
				desc='The future can be even  a wish'
			/>
			<Feature
				title='Save Money'
				desc='You deserve good things rate per on your own terms with automated process'
			/>
		</Stack>
	)
}

export default NotificationTab
