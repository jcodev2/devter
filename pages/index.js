import Head from 'next/head'
import AppLayout from '../Components/AppLayout'
import Auth from '../Components/Auth'

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <AppLayout>
        <Auth />
      </AppLayout>
    </>
  )
}
