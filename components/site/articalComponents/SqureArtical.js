import React from 'react'
import Link from 'next/link'

function SqureArtical({ artical }) {
	return (
		<div className="artical">
			<div className="block_artical">
				<div className="block_artical_img">
					<Link href={`/articals/${artical.id}`}>
						<img src={artical.img} alt="" className="block_artical_img_class" />
					</Link>
				</div>
				<div className="artical_descrption">


					<Link href={`/articals/${artical.id}`}>
						{artical.descr}
					</Link>
					<span className="short_des">
						{artical.title}
					</span>
					<h6>{false ? artical.created_at : null}</h6>
				</div>
			</div>
		</div >
	)
}

export default SqureArtical
