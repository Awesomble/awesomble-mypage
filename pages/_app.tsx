import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'

Amplify.configure({ ...awsExports,
  ssr: true,
  aws_user_pools_id: 'ap-northeast-2_ntUSlOELB'
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
