import Document , { Html, Head, Main, NextScript } from 'next/document'

 class  MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head></Head>
                <body className='my-class'>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }

 }

 export default MyDocument