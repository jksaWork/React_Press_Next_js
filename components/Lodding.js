import React from 'react'
import { CircularProgress } from '@chakra-ui/react'

function Lodding() {
	return (
		<div className='loading_section'>
			<CircularProgress size='200px' isIndeterminate color='red.700' />
		</div>
	)
}

export default Lodding
