import styles from '@/styles/componentStyles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Image width={100} height={100} src="/LogoNameOnly.svg" alt="Website name logo" />
      <Link className={styles.generalPages} href='/notFound'>Privacy Policy</Link>
      <Link className={styles.generalPages} href='/notFound'>Terms & Conditions</Link>
      <div className={styles.socials}>
        <Link className={styles.socialIcon} href='/notFound'>
          <Image width={30} height={30} src="/Facebook.svg" alt="Facebook logo" />
        </Link>
        <Link className={styles.socialIcon} href='/notFound'>
          <Image width={30} height={30} src="/Instagram.svg" alt="Instagram logo" />
        </Link>
        <Link className={styles.socialIcon} href='/notFound'>
          <Image width={30} height={30} src="/Mail.svg" alt="Email logo" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
