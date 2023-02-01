import React from 'react'
import { useRouter } from 'next/router';
import WriterChose from '../../components/site/WriterChose';
import PublarArtical from '../../components/site/PublarArtical'
function articalWithId({ post }) {

	return (
		<div>
			<div class="container">
				<div class="margin_top"></div>
				<div class="col-12 mb-2 text-right">
					<h4 class="m-2">
						<a href="" class="">
							الوفاق الاخباري
						</a> |
						<a href="ds" class="color_main">
							المقالات
						</a> |
						<span class="custom_font">
							{post.title
							}</span>
					</h4>
				</div>
				<div class="show_post_grid mt-5">
					<div class="post_img">
						<img src={post.img} alt="" class="post_img_class" />
					</div>
					<div class="post_info">
						<div class="post_title">
							<h1>
								{post.title}
							</h1> {post.descr}


							<span class="short_desc">
								{post.descr}
							</span>

						</div>
						<div class="post_date">
							<div class="views">
								المشاهدات	<i class="mdi mdi-eye"></i>
							</div>
							<div>
								100
							</div>
							<div class="created_at"> تاريخ النشر</div>
							<div class="date">
								<h6 class='date'>{post.created_at}</h6>
							</div>
							<div class="updated_at"> اخر التعديلات<i class="ion-eye"></i></div>
							<div class="date">
								<h6 class='date'>{post.created_at}</h6>
							</div>
						</div>
					</div>
				</div>
				<WriterChose />
				<PublarArtical />

			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
	const { params } = context
	const { ArticalId } = params

	console.log(params)
	const API = `http://localhost:8000/api/quetions/${ArticalId}`;
	const response = await fetch(API);
	const data = await response.json();
	return {
		props: {
			post: data.data
		},
	}
}

export default articalWithId
