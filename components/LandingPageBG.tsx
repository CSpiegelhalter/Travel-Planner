import Image from 'next/image'
import styles from '../styles/pageStyles/LandingPageBGDark.module.css'
import { Darkmode } from '@/Types/types'


function LandingPageBG(props: Darkmode) {
  return props.darkmode ? (
    <div className={styles.backgroundConatiner}>
        <Image
          src="/darkmode/darkmodeBackgroundMobile.svg"
          alt="background night sky"
          layout="responsive"
          width={100}
          height={0}
          style={{ position: 'absolute' }}
        />
      <Image
        src="/darkmode/darkmodeBackMobile.svg"
        alt="farthest away mountain"
        layout="responsive"
        width={100}
        height={0}
        style={{ position: 'absolute' }}
      />
      <Image
        src="/darkmode/darkmodeFrontMobile3.svg"
        alt="front mountain 3"
        layout="responsive"
        width={100}
        height={0}
        style={{ position: 'absolute' }}
      />
      <Image
        src="/darkmode/darkmodeFrontMobile2.svg"
        alt="front mountain 2"
        layout="responsive"
        width={100}
        height={0}
        style={{ position: 'absolute' }}
      />
      <Image
        src="/darkmode/darkmodeFrontMobile1.svg"
        alt="front mountain 1"
        layout="responsive"
        width={100}
        height={0}
        style={{ position: 'absolute' }}
      />
      <Image
        src="/darkmode/darkmodeFrontMobile.svg"
        alt="first mountain"
        layout="responsive"
        width={100}
        height={0}
        style={{ zIndex: 10, display: 'block', position: 'relative' }}
      />
    </div>
  ) : (
    <div className={styles.backgroundConatiner}>
        <Image
          src="/lightmode/lightmodeBackgroundMobile.svg"
          alt="an svg of a mountain"
          layout="responsive"
          width={100}
          height={0}
          style={{ position: 'absolute' }}
        />
        <Image
          src="/lightmode/lightmodeBackMobile.svg"
          alt="an svg of a mountain"
          layout="responsive"
          width={100}
          height={0}
          style={{ position: 'absolute' }}
        />
        <Image
          src="/lightmode/lightmodeFrontMobile3.svg"
          alt="an svg of a mountain"
          layout="responsive"
          width={100}
          height={0}
          style={{ position: 'absolute' }}
        />
        <Image
          src="/lightmode/lightmodeFrontMobile2.svg"
          alt="an svg of a mountain"
          layout="responsive"
          width={100}
          height={0}
          style={{ position: 'absolute' }}
        />
        <Image
          src="/lightmode/lightmodeFrontMobile1.svg"
          alt="an svg of a mountain"
          layout="responsive"
          width={100}
          height={0}
          style={{ position: 'absolute' }}
        />
        <Image
          src="/lightmode/lightmodeFrontMobile.svg"
          alt="an svg of a mountain"
          layout="responsive"
        width={100}
        height={0}
        style={{ zIndex: 10, display: 'block', position: 'relative' }}
        />
    </div>
  )
}

export default LandingPageBG
