import React from 'react'
import useSWR from 'swr'
import SqureArtical from './articalComponents/SqureArtical'
import Lodding from '../Lodding'
import useSlider from '../../Helpers/useSlider'
function PublarArtical() {

	const { data, error } = useSlider();
	if (!data) {
		return <Lodding />
	}
	return (
		<div>
			<div class="pupular_view">
				<h4 class="custom_head">
					<span>
						<span>
							<i class="angle fe fe-chevron-left"></i>
						</span>
						الاكثر مشاهده
					</span>
				</h4>
				<div class="landing_grid">
					{
						data != null ? data.data.map((artical, index) => {
							console.log(index);
							return (
								<div>
									<SqureArtical artical={artical} />
								</div>
							)
						}) : null
					}
				</div>
			</div>
		</div>
	)
}

export default PublarArtical
