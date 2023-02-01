import React from 'react'
import useCategorieswithArtical
	from '../../Helpers/useCategorieswithArtical'
import CategoryWithArticals from './CategoryWithArticals';

function Landing() {
	const { data, error } = useCategorieswithArtical()
	console.log(data);
	return (
		<div className='container'>
			{
				data != null ? data.map(category => {
					return (
						<div key={category.id}>
							<CategoryWithArticals category={category} />
						</div>
					)
				}) : null
			}
		</div>
	)
}

export default Landing
