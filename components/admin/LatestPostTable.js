import React from 'react'
import useLatestPost from '../../Helpers/useLatestPost'
import {
	Badge,
	Heading,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption
} from '@chakra-ui/react'

function LatestPostTable() {
	const { data, error } = useLatestPost();
	console.log(data)
	return (
		<div>
			<Heading as='h3' size='lg' pa={5} m={5} className='text-right'>
				جدول الاقسام
			</Heading>
			<Table variant='simple' pa={5} ma={5}>
				<TableCaption>latest categoriess add</TableCaption>
				<Thead>
					<Tr>
						<Th>الرقم </Th>
						<Th>الاسم</Th>
						<Th>العمليات</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						data != null ? (
							data.data.data.map(li => {
								return (
									<Tr>
										<Td>{li.id}</Td>
										<Td>{li.title}</Td>
										<Td ><Badge ml='1' fontSize='0.8em' colorScheme='blue'>
											تعديل
										</Badge>
											<Badge ml='1' fontSize='0.8em' colorScheme='red'>
												حذف
											</Badge>
										</Td>
									</Tr>
								)
							})
						) : null
					}


				</Tbody>

			</Table>
		</div>
	)
}

export default LatestPostTable
