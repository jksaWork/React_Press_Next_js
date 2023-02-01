import React from 'react'
import { Grid, GridItem, Box, Icon, Heading, Center } from '@chakra-ui/react';

function DashboardGrid() {
	return (
		<div>
			<Grid templateColumns='repeat(4 , minmax(150px , auto))'
				gap={4} h={300} ma={5} pa={5}>
				<GridItem pa={5} 	>
					<Box p={5} shadow='md' borderWidth='1px' pa={5}>
						<Grid templateColumns='1fr 1fr' justifyContent='center' alignItems='center'>
							<GridItem>
								<Box className='text-center'>
									<div class='text-center'>
										<Center>
											<img src='/user.svg' alt='some thing went worng' width='50px' />
										</Center>
									</div>
									<Heading as='h2' size='xl'>
										users
									</Heading>
								</Box>
							</GridItem>
							<GridItem>
								<Box className='text-center'>
									<Center>
										<Heading as='h2' size='xl'>
											5342
										</Heading>
									</Center>
								</Box>
							</GridItem>
						</Grid>
					</Box>

				</GridItem>
				<GridItem pa={5}>
					<Box p={5} shadow='md' borderWidth='1px' pa={5}>
						<Grid templateColumns='1fr 1fr' justifyContent='center' alignItems='center'>
							<GridItem>
								<Box className='text-center'>
									<div class='text-center'>
										<Center>
											<img src='/commint.svg' alt='some thing went worng' width='50px' />
										</Center>
									</div>
									<Heading as='h2' size='xl'>
										com
									</Heading>
								</Box>
							</GridItem>
							<GridItem pa={5}>
								<Box className='text-center'>
									<Center>
										<Heading as='h2' size='xl'>
											53
										</Heading>
									</Center>
								</Box>
							</GridItem>
						</Grid>
					</Box>

				</GridItem><GridItem pa={5}>
					<Box p={5} shadow='md' borderWidth='1px' pa={5}>
						<Grid templateColumns='1fr 1fr' justifyContent='center' alignItems='center'>
							<GridItem>
								<Box className='text-center'>
									<div class='text-center'>
										<Center>
											<img src='/like.svg' alt='some thing went worng' width='50px' />
										</Center>
									</div>
									<Heading as='h2' size='xl'>
										likes
									</Heading>
								</Box>
							</GridItem>
							<GridItem>
								<Box className='text-center'>
									<Center>
										<Heading as='h2' size='xl'>
											452
										</Heading>
									</Center>
								</Box>
							</GridItem>
						</Grid>
					</Box>

				</GridItem><GridItem>
					<Box p={5} shadow='md' borderWidth='1px' pa={5}>
						<Grid templateColumns='1fr 1fr' justifyContent='center' alignItems='center'>
							<GridItem>
								<Box className='text-center'>
									<div class='text-center'>
										<Center>
											<img src='/post.svg' alt='some thing went worng' width='50px' />
										</Center>
									</div>
									<Heading as='h2' size='xl'>
										post
									</Heading>
								</Box>
							</GridItem>
							<GridItem>
								<Box className='text-center'>
									<Center>
										<Heading as='h2' size='xl'>
											932
										</Heading>
									</Center>
								</Box>
							</GridItem>
						</Grid>
					</Box>

				</GridItem>
			</Grid>
		</div>
	)
}

export default DashboardGrid
