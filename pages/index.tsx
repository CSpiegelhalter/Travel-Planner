// import LoadingPage from '@/components/LoadingPage'
// import dynamic from 'next/dynamic';
import LandingComponent from '@/components/LandingComponent'
import { Main } from 'next/document'
import Head from 'next/head'
import { useRouter } from 'next/router'


// const LandingComponentWithLoading = dynamic(
//   () => import('@/components/LandingComponent'),
//   {
//     loading: () => <LoadingPage />,
//   },
// );

function LandingPage() {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Curious Visits</title>
        <meta name="description" content="Find cool things to do in... " />
      </Head>

      <LandingComponent router={router} />
    </>
  )
}

export default LandingPage
