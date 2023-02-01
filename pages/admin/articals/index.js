import React, { useState } from 'react'
import BerCampComponent from '../../../components/admin/BerCampComponent'
import UseArticals from '../../../Helpers/UseArticals'
import Lodding from '../../../components/Lodding'
import Link from 'next/link'
import AdminModal from '../../../components/admin/AdminModal'
import {
	Icon,
	useToast,
	Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Button
} from '@chakra-ui/react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

function index() {

	const toast = useToast()
	const [Page, setPage] = useState(1)
	const { data, isLoading, isError, error, isFetching } = UseArticals(Page)
	const IsClicked = (id) => setPage(id)

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
			<BerCampComponent location={['artical', 'artical-table']} />
			<Table variant='simple'>
				<TableCaption>Imperial to metric conversion factors</TableCaption>
				<Thead>
					<Tr>
						<Th>title</Th>
						<Th>descr</Th>
						<Th>opration</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						data != null ? data.data.data.map((li, i) => {
							return (
								<Tr key={i}>
									<Td>{li.title}</Td>
									<Td>{li.descr}</Td>
									<Td >
										<Button onClick={() => console.log('jksa altigani osman')} size='xs' colorScheme='blue'>edit</Button>
										<AdminModal data={{
											name: 'Delete',
											id: li.id, nameOption: 'Delete',
											color: 'red',
											description: 'do you want to delet this item',
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
			<a
				onClick={() => setPage(Page = Page - 1)}
				href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
				<span className="sr-only">Next</span>
				<Icon as={MdArrowBack} w={5} h={5} />
			</a>
			{
				data != null ? data.data.meta.links.map((li, i) => {
					return (

						<span key={i} onClick={() => IsClicked(i + 1)}
							className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
							{i + 1}
						</span>
					)
				}) : null
			}

			<span
				onClick={() => setPage(Page = Page + 1)}
				className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
				<span className="sr-only">Next</span>
				<Icon as={MdArrowForward} w={5} h={5} />
			</span>

			<Button onClick={() => console.log(Page)}>click </Button>

		</div>
	)
}

index.getLayout = 'admin'
export default index
