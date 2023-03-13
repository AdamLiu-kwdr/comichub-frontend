import '@/styles/globals.css'
import '@picocss/pico'
import 'flexboxgrid'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
  // Use the specified page layout or fallback to the default one.
  // This allows custome layout for pages like index, login

  // add (page function).getLayout = (page) => <CustomLayout>(page)</CustomLayout> 
  // on components to use custome layout
  
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />)
}
