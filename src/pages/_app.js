import Layout from '@/components/layout'
import ThemeProvider from '@/context/ChangeTheme'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return(  
    <ThemeProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  
  )
  

}
