import React from 'react'
import Lodding from '../../components/Lodding'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import SqureArtical
	from '../../components/site/articalComponents/SqureArtical'
import Heading from '../../components/site/Heading'


function CategoryArtical() {
	const router = useRouter()
	const { CategoryId } = router.query
	console.log(CategoryId)
	const fetcher = async () => {
		const data = await fetch(`http://localhost:8000/api/quetions/withid/${CategoryId}`);
		const response = await data.json();
		return response;
	}
	const { data, error } = useSWR(`fetch-categories-with-id-articals-${CategoryId}`, fetcher);
	if (!data) {
		return <Lodding />
	}


	return (
		<div className='container'>
			<Heading head='dkfh' />
			<div className="landing_page_categoreis_div">
				<div className="margin_top"></div>
				<div className="content-header-left col-md-6 col-12 mb-2">
					<h3 className="content-header-title custom_head"> <span className="color_span"></span><span
						className="head">الاقسام</span>
					</h3>
				</div>
				<div className="landing_grid">
					{
						data.data != null ? data.data.map(artical => {
							return (
								<div key={artical.id}>
									<SqureArtical artical={artical} />
								</div>
							)
						}) : null
					}

				</div>
				<div className="custom_hr_more">
					<a href=""><span
						className='show_more'></span></a>
				</div>
			</div>
		</div>
	)
}

export default CategoryArtical
