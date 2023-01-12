import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'

Amplify.configure({ ...awsExports, ssr: true, userPoolId: 'ap-northeast-2_ntUSlOELB', UserPoolArn: 'arn:aws:cognito-idp:ap-northeast-2:199657251396:userpool/ap-northeast-2_MSa7zTSaD' })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
