import {AppProps} from 'next/app'
import Layout from 'components/layout/layout'
// import '../style.css'

function MyApp({Component, pageProps}: AppProps){
    return (
        <Layout>
            <Component {...pageProps}></Component>
        </Layout>
        )
}

export default MyApp