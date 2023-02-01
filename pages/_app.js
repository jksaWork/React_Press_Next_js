import '../styles/globals.css'
import '../styles/app.css'
import '../styles/press.css'
import '../styles/grid_system.css'
import '../styles/nav.css'
import '../styles/showpost.css'
import SiteLayout from '../components/SiteLayout';
import AdminLayout from '../components/AdminLayout';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
	const { Header, Footer } = SiteLayout
	const { AdminHeader, AdminFooter } = AdminLayout
	const queryClient = new QueryClient()

	if (Component.getLayout == 'admin') {
		return (
			<QueryClientProvider client={queryClient}>
				<ChakraProvider>
					<AdminHeader />
					<div className='margin_top'>
						<Component {...pageProps} />
					</div>
					<AdminFooter />

					<ReactQueryDevtools initialIsOpen={false} />
				</ChakraProvider>
			</QueryClientProvider>
		)
	}
	if (Component.getLayout == 'withOut') {
		return (<ChakraProvider><Component {...pageProps} /></ChakraProvider>)
	}
	return (
		<QueryClientProvider client={queryClient}>

			<ChakraProvider>
				<Header />
				<Component {...pageProps} />
				<Footer />
				<ReactQueryDevtools initialIsOpen={false} />
			</ChakraProvider>
		</QueryClientProvider>
	)
}

export default MyApp
