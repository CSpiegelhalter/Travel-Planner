import styles from '../../styles/componentStyles/LandingComponent.module.css'
import Image from 'next/image'
import { HandlerProps } from '@/Types/types'
import dynamic from 'next/dynamic'

function LandingComponent({ handler }: HandlerProps) {
  const NavigationButton = dynamic(() => import('@/components/NavigationButton'))

  return (
    <>
      <section className={styles.landingContainer}>
        <div className={styles.landingContent}>
          <Image width={50} height={50} src="/Logo.svg" alt="Logo" />
          <div className={styles.imageContainer}>
            <Image
              width={0}
              height={300}
              layout="responsive"
              src="/landingpageTopIllustration.webp"
              alt="Illustration of finding things to do on phones"
              style={{ marginTop: '60px' }}
              priority={true}
              loading="eager"
              onLoad={() => handler()}
            />
          </div>
          <p style={{ fontWeight: '700', fontSize: 'xx-large', marginTop: '60px' }}>Discover hidden gems around you.</p>
          <NavigationButton href="/mapTool" displayText="Get Started" />
          <p style={{ fontSize: 'large', marginBottom: '0', marginTop: '15vh', lineHeight: '40px' }}>
            Our aim is to provide you with a platform to discover remarkable hidden gems that may not appear on the 1st
            page of your Google search.
          </p>
        </div>
      </section>
    </>
  )
}

export default LandingComponent
