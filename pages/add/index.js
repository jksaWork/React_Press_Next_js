import React, { useState } from 'react'
import { Center, Box, Grid, GridItem, Input, Text, Textarea, Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import AuthAxios from '../../../Helpers/AuthAxios';
import { useRouter } from 'next/router';

function add() {
	const router = useRouter()
	const [Loading, setLoading] = useState(false)
	const [Value, setValue] = useState()
	const Axios = AuthAxios();

	const initialValues = {
		title: '',
		descr: '',
		content: '',
		help: '',
	}
	const onSubmit = (val) => {
		setLoading(true)
		const data = { ...val, file: Value }
		Axios.post('http://localhost:8000/api/quetions', data)
			.then((res) => {
				router.push('/admin/articals')
			})
			.catch(err => console.log(err))
	}

	const Formik = useFormik({
		initialValues,
		onSubmit
	});


	return (
		<div className='container'>
			<Center>

				<Box w='700px' boxShadow='sm'>
					<BerCampComponent location={['articals', 'add-articals']} />

					<form onSubmit={Formik.handleSubmit}>
						<Grid templateColumns='repeat(2, minmax(300px , 1fr))' gap={3}>
							<GridItem  >
								<Text mb='8px'>title: </Text>
								<Input
									placeholder='Here is a sample placeholder'
									size='sm'
									variant='filled'
									name='title'
									id='title'
									{...Formik.getFieldProps('title')}

								/>
							</GridItem>
							<GridItem >
								<Text mb='8px'>descrption: </Text>
								<Input
									placeholder='Here is a description'
									size='sm'
									variant='filled'
									name='descr'
									id='descr'
									{...Formik.getFieldProps('descr')}
								/>
							</GridItem>
							<GridItem  >
								<Text mb='8px'>content: </Text>
								<Input
									placeholder='Here is a sample placeholder'
									size='sm'
									variant='filled'
								/>
							</GridItem>
							<GridItem  >
								<Text mb='8px'>help text: </Text>
								<Input
									placeholder='Here is a sample placeholder'
									size='sm'
									variant='filled'
									name='help'
									id='help'
									{...Formik.getFieldProps('help')}

								/>
							</GridItem>
							<GridItem>
								<Text mb='8px'>content: </Text>
								<Textarea
									placeholder='Here is a sample placeholder'
									name='content'
									id='content'
									{...Formik.getFieldProps('content')}
								/>
							</GridItem>
							<GridItem>
								<Text mb='8px'>img: </Text>
								<Input id="file" name="file" type="file" onChange={(event) => {
									setValue(event.currentTarget.files[0]);
								}} />
							</GridItem>
							<GridItem>
								<Button type='submit' isLoading={Loading}>save post</Button>
							</GridItem>
						</Grid>
					</form>
				</Box>
			</Center>
		</div>
	)
}
add.getLayout = 'admin'
export default add