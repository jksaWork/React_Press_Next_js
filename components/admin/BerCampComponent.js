import React from 'react'
import { BreadcrumbLink, Breadcrumb, BreadcrumbItem, Heading } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icon'
function BerCampComponent({ location }) {
	return (
		<div>
			<Breadcrumb spacing='8px' separator='##' p={5} m={5}>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>
						<Heading as='h3' size='md' >
							alwefage news
						</Heading>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink href='/admin/dashboard'>
						<Heading as='h3' size='md' >
							dashboard
						</Heading>
					</BreadcrumbLink>
				</BreadcrumbItem>
				{
					location.map(li => {
						return (
							<BreadcrumbItem isCurrentPage key={li}>
								<BreadcrumbLink href='#'>
									<Heading as='h4' size='md' >
										{li}
									</Heading>
								</BreadcrumbLink>
							</BreadcrumbItem>)
					})
				}
			</Breadcrumb>
		</div>
	)
}

export default BerCampComponent
