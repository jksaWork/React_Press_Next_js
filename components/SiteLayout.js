import React from 'react'
import useCategories from '../Helpers/useCategories'
import Link from 'next/link';
import { InputGroup, Input, Box, Icon, InputLeftElement, Center } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'

function Header() {
	const { data, error } = useCategories();

	return (
		<div>
			<div className="top_nav data_line ">
				<div className="page_links">
					<div className="container">
						<div className="row  grid_tow_col ">
							<div className="col-md-6 text-left">
								<ul className="top_nav_ul font_we text-left">
									<li className="top_nav_li ">
										<a href="">
											من نحن
										</a>
									</li>
									<li className="top_nav_li">
										<a href="">
											سياسه الخصوصيه
										</a>
									</li>
									<li className="top_nav_li">
										<a href="">
											تواصل معنا
										</a>
									</li>
									<li className="top_nav_li">
										<a href="#">
											RSS
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-6 data_list_div">
								<ul className="top_nav_ul data_list">
									<li className="top_nav_li">
									</li>
									<li className="top_nav_li">
									</li>
									<li className="top_nav_li">
									</li>
									<li className="top_nav_li">

									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="middle_nav">
				<div className="container">
					<div className="row align_item_center">
						<div className="col-6 search_and_meun ">
							<div className="row">
								<div className="icons_div">
									<i className="mdi mdi-menu"></i>
									<span className="search_icon_in_media">
										<i className="mdi mdi-search-web"></i>
									</span>
								</div>
								<Box w='600px'>
									<InputGroup>
										<InputLeftElement
											pointerEvents='none'
											children={<MdSearch color='gray.300' />}
										/>
										<Input type='tel'
											variant='flushed'
											placeholder='Search On Admin Panle' />
									</InputGroup>
								</Box>
							</div>
						</div>
						<div className="col-6 website_logo">
							<img src='/logo.png' alt="page conten" className="logo_img" />
						</div>
						<div className="hidden_and_show_by_click">
							<div className="search_min_midea">
								<form action="#" method="post">
									<input type="search" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sticy ">
				<div className="buttom_links">
					<ul className="links_ul">
						<div className="container">
							<li className="links_li">
								<a href="#" className="link_a">
									الرئسيه
								</a>
							</li>
							<li className="links_li">
								<a href="#" className="link_a">
									اخر الاخبار
								</a>
							</li>
							{
								data != null ?
									(data.data.map(li => {
										return (<li className="links_li" key={li.id}>
											<Link href={`/categories/${li.id}`}>
												<a href="#" className="link_a">
													{li.name}
												</a>
											</Link>
										</li>
										)
									}))
									: null
							}

						</div>
					</ul>
				</div>
			</div>
		</div>
	)
}
function Footer() {
	const { data, error } = useCategories();

	return (
		<div className='site-header'>
			<div className="social_link">
				<ul>
					<li>
						<img src="" alt="" />
					</li>
					<li>
						<img src="" alt="" />
					</li>
					<li>
						<img src="" alt="" />
					</li>
				</ul>
			</div>
			<div className="margin_top"></div>
			<footer className="footer margin_top">
				<div className="container">
					<div className="subscribe_email">
						<div className="subscribe_descrption">
							<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quaerat consectetur ad, vero
								quisquam dolor a. Minus quos cupiditate</p>
						</div>
						<div className="subscribe_input">
							<Box w='400px'>
								<Center>
									<InputGroup>
										<InputLeftElement
											pointerEvents='none'
											children={<MdSearch color='gray.300' />}
										/>
										<Input type='tel'
											variant='flushed'
											placeholder='Search On Admin Panle' />
									</InputGroup>
								</Center>
							</Box>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="grid_footer">
						<div>
							<h3 className='white-text'>
								الوفاق الاخباري
							</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet nesciunt nam quos cumque, ad
								vitae quis temporibus possimus, culpa hic consequatur quia commodi reiciendis tempore, voluptate
								aperiam veritatis facere.</p>
						</div>
						<div> الروابط
							<ul>
								{
									data != null ? (data.map(li => {
										return (<li className="links_li" key={li.id}>
											<a href="#" className="link_a">
												{li.name}
											</a>
										</li>
										)
									}))
										: null
								}
							</ul>
						</div>
						<div>
							<h3 className='white-text'></h3>
							<ul>
								<li><a href="#" className="awesome_color"> </a></li>
								<li><a href="#" className="awesome_color"></a></li>
								<li><a href="#" className="awesome_color"></a></li>
								<li><a href="#" className="awesome_color"></a></li>
							</ul>
						</div>
					</div>
					<div>
						<p className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
							<span className="float-md-left d-block d-md-inline-block">Copyright &copy; 2018 <a
								className="text-bold-800 grey darken-2"
								href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent" target="_blank">PIXINVENT
							</a>, All rights reserved. </span>
							<span className="float-md-right d-block d-md-inline-blockd-none d-lg-block">Hand-crafted & Made with <i
								className="ft-heart pink"></i></span>
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
const SiteLayout = { Header, Footer };
export default SiteLayout;


