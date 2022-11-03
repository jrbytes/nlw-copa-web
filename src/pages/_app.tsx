import { FC } from 'react'
import '../styles/global.css'

interface MyAppProps {
  Component: FC
  pageProps: any
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />
}

export default MyApp
