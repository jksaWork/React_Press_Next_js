import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SliderSection from '../components/site/SliderSection'
import Landing from '../components/site/Landing'


export default function Home() {
	return (
		<div>
			<SliderSection />
			<div className='margin_top'></div>
			<Landing />
		</div>
	)
}
