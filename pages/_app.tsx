import { FC } from 'react'

interface MyAppProps {
  Component: FC
  pageProps: any
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />
}

export default MyApp
