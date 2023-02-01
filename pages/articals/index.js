import React from 'react'
import Link from 'next/link'
import AdminModal from '../../components/admin/AdminModal'

function index({ posts }) {

	console.log(posts)
	return (
		<div>
			<div>
				{
					posts.map(post => {
						return (
							<div key={post.id}>
								<h2>
									<Link href={`articlas/${post.id}`}>
										{post.title}
									</Link>
								</h2>
								<h2>post id one </h2>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const response = await fetch('http://localhost:8000/api/quetions/');
	const data = await response.json()

	return {
		props: {
			posts: data.data
		},
	}
}


export default index
