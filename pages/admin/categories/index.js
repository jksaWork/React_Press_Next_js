import React, { useState } from 'react'
import BerCampComponent from '../../../components/admin/BerCampComponent'
import useCategories from '../../../Helpers/useCategories'
import Lodding from '../../../components/Lodding'
import Link from 'next/link'
import AdminModal from '../../../components/admin/AdminModal'
import AddCategoriesModal from '../../../components/admin/AddCategoriesModal'
import {
	Icon,
	useToast,
	Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Button
} from '@chakra-ui/react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import AuthAxios from '../../../Helpers/AuthAxios'

function add() {
	const Axios = AuthAxios()
	const toast = useToast()

	const { data, isLoading, isError, error, isFetching } = useCategories()



	if (isLoading && isFetching) {
		return (<Lodding />)
	}
	if (isError) {
		return <h1>{error}</h1>
	}

	const deletePost = (id) => console.log(id)
	const editPost = (id) => console.log(id)
	return (
		<div className='container'>
			<BerCampComponent location={['categories', 'categories-table']} />
			<AddCategoriesModal />
			<Table variant='simple' m={5}>
				<TableCaption>Imperial to metric conversion factors</TableCaption>
				<Thead>
					<Tr>
						<Th>id</Th>
						<Th>name</Th>
						<Th>opration</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						data != null ? data.map((li, i) => {
							return (
								<Tr key={i}>
									<Td>{li.id}</Td>
									<Td>{li.name}</Td>
									<Td >
										<AdminModal data={{
											name: 'Delete',
											id: li.id, nameOption: 'Delete',
											color: 'red',
											description: 'do you want to delet this item',
											descriptionDone: 'delelet was done succusfulty ',
											url: 'categories'
										}} />
									</Td>
								</Tr>
							)
						}) : null
					}
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>name</Th>
						<Th>descr</Th>
						<Th>opration </Th>
					</Tr>
				</Tfoot>
			</Table>

		</div>
	)
}

add.getLayout = 'admin'
export default add
