import React from 'react'
import useSWR from 'swr'
import SqureArtical from './articalComponents/SqureArtical'
import Lodding from '../Lodding'
import useSlider from '../../Helpers/useSlider'


function WriterChose() {
	const { data, error } = useSlider()
	if (!data) {
		return <Lodding />
	}
	return (
		<div className='margin_top'>
			<div class="wirter_chose">
				<h4 class="custom_head">
					<span>
						<span>
							<i class="angle fe fe-chevron-left"></i>
						</span>
						اختيارات المحريرين
					</span>
				</h4>
				<div class="gird_wirter_chose">
					{
						data != null ? data.data.map((artical, index) => {
							console.log(index);
							if (index == 3) {
								return null;
							}
							return (
								<div>
									<div class="artical">
										<SqureArtical artical={artical} />
									</div>
								</div>
							)
						}) : null
					}

				</div>
			</div>
		</div>
	)
}

export default WriterChose
