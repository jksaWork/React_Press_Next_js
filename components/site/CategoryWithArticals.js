import React from 'react'
import SqureArtical from './articalComponents/SqureArtical';
function CategoryWithArticals({ category }) {
	const Articals = category.quetions.splice(1, 4);
	console.log(Articals)
	return (
		<div>
			<div className="landing_page_categoreis_div">
				<div className="margin_top"></div>
				<div className="content-header-left col-md-6 col-12 mb-2">
					<h3 className="content-header-title custom_head"> <span className="color_span"></span><span
						className="head">{category.name}</span>
					</h3>
				</div>
				<div className="landing_grid">
					{
						Articals.map(artical => {
							return (
								<div key={artical.id}>
									<SqureArtical artical={artical} />
								</div>
							)
						})
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

export default CategoryWithArticals
