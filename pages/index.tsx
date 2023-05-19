// import LoadingPage from '@/components/LoadingPage'
// import dynamic from 'next/dynamic';
import Footer from '@/components/Footer'
import LandingComponent from '@/components/Landingpage/LandingComponent'
import LandingpageAddtionalContent from '@/components/Landingpage/LandingpageAddtionalContent'
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
    <div style={{ margin: 'auto', width: '100vw', justifySelf: 'center' }}>
      <Head>
        <title>Curious Visits</title>
        <meta name="description" content="Find cool things to do in... " />
      </Head>

    
      <LandingComponent router={router} />
      <LandingpageAddtionalContent router={router} />
      <Footer />
    </div>
  )
}

export default LandingPage
