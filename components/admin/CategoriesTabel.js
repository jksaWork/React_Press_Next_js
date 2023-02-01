import React from 'react'
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
import useCategories from '../../Helpers/useCategories'

function CategoriesTabel() {
	const { data, error } = useCategories();
	// if (isLoading) {
	// 	return 'loading ...';
	// }
	console.log(data);
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
							data.data.map(li => {
								return (
									<Tr>
										<Td>{li.id}</Td>
										<Td>{li.name}</Td>
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

export default CategoriesTabel
