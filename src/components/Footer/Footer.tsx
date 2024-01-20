import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.nameIcon}>
        <Image width={100} height={100} layout="responsive" src="/static/LogoNameOnly.webp" alt="Website name logo" />
      </div>
      <Link className={styles.generalPages} href="/notFound">
        Privacy Policy
      </Link>
      <Link className={styles.generalPages} href="/notFound">
        Terms & Conditions
      </Link>
      <div className={styles.socials}>
        <Link className={styles.socialIcon} href="/notFound">
          <Image width={30} layout="responsive" height={30} src="/static/Facebook.webp" alt="Facebook logo" />
        </Link>
        <Link className={styles.socialIcon} href="/notFound">
          <Image width={30} layout="responsive" height={30} src="/static/Instagram.webp" alt="Instagram logo" />
        </Link>
        <Link className={styles.socialIcon} href="/notFound">
          <Image width={30} layout="responsive" height={30} src="/static/Mail.webp" alt="Email logo" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
