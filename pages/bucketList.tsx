import styles from '../styles/pageStyles/bucketList.module.css'
import dynamic from 'next/dynamic'


function bucketList(props: any) {
  const NavBar = dynamic(() => import('@/components/NavBar'))
  const BucketListDefault = dynamic(() => import('@/components/BucketListDefault'))


  return (
    <div>
      <header>
        <h1 className={styles.headerCaption}>My Bucketlist:</h1>
      </header>
      <BucketListDefault />
      <NavBar bucketList={true} map={false} trips={false} profile={false} />
    </div>
  )
}

export default bucketList
