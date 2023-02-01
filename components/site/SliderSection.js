import React from 'react'
import useLatestPost from '../../Helpers/useLatestPost'
import Link from 'next/link'


function SliderSection() {
	const { data, error } = useLatestPost()
	console.log(data)
	return (
		<div>
			<div className="container">
				<div className="margin_top"></div>
				<div className="grid_slider_section">
					<div className="slider_continer">
					</div>
					<div className="latest_post">
						<div className="latest_post_container">
							{
								data != null ? (data.map(artical => {
									return (
										<div className="latest_post_artical" key={artical.id}>
											<div className="inline_artical">
												<div className="inline_img">
													<img src={artical.img} alt="" className='inline_img_class' />
												</div>
												<div className="inline_artical_description">
													<div>
														<a href="">
															{artical.descr}
															<span className="inline_short_des">
																{artical.title}
															</span>
														</a>
													</div>
													<span>{artical.created_at}</span>
												</div>
											</div>
										</div>
									)
								})
								) : null
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SliderSection
