import Button from './Button'
import styles from '../styles/componentStyles/LandingPageAdditionalContent.module.css'
import Image from 'next/image'

function LandingPageAddtionalContent({ darkmode }) {
  return (
    <>
      <div className={styles.infoContainer}>
        <p className={styles.headers}>Why wouldn’t I just use Google?</p>
        <p className={styles.descriptions}>
          Our goal is to be used along side Google and other tools to find cool places to visit during your travels.
        </p>

        <p className={styles.headers}>What makes us different?</p>
        <p className={styles.descriptions}>
          When you search “things to do in Paris”, understandably, Google will show the top things Paris is known for:
        </p>
        <Image
          src="/google.png"
          alt="Google search screenshot"
          layout="responsive"
          width={100}
          height={0}
        />

        <p className={styles.descriptions}>
          While these are must-see attractions in Paris, they are likely to appear on every "things to do in Paris" list
        </p>
        <p className={styles.descriptions}>
          However, if you want to explore beyond the typical tourist spots and discover other equally extraordinary
          places, you might need to do some additional research!
        </p>
        <p className={styles.descriptions}>That’s where we come in.</p>

        <p className={styles.headers}>
          {' '}
          Our aim is to provide you with a platform to discover remarkable hidden gems that may not appear on the 1st
          page of your Google search.
        </p>
      </div>
      <div className={styles.examplePlaces}>
      <p className={styles.headers}>KattenKabinet (Amsterdam)</p>
      <Image
          src="/cat.jpg"
          alt="Cat painting"
          layout="responsive"
          width={100}
          height={0}
          style={{ marginTop: '2vh' }}

        />
      <p>This one of a kind museum is dedicated to cat art. Also featuring art by Pablo Picasso, Rembrandt, Henri de Toulouse-Lautrec, Corneille, Sal Meijer, Théophile Steinlen, and Jože Ciuha, among others this museum cannot be missed!</p>

      <p className={styles.headers}>Landschaftspark Diving Gasometer (Germany)</p>
      <Image
          src="/diving.jpg"
          alt="Diver"
          layout="responsive"
          width={100}
          height={0}
          style={{ marginTop: '2vh' }}
        />
      <p>The diving gasometer in the Landscape Park Duisburg Nord is the largest indoor diving basin in Europe. Float down and find a shipwreck, an aircraft wreck, two cars, an artificial reef and lots of other objects are an invitation to every diver to come and explore and discover.</p>

      <p className={styles.headers}>THE UFO (Sweden)</p>
      <Image
          src="/ufo.jpg"
          alt="Diver"
          layout="responsive"
          width={100}
          height={0}
          style={{ marginTop: '2vh' }}
        />
      <p>Designed to be the most unexpected thing you can encounter in the forest, you are able to get this unique hotel along with 4 other guests.</p>

      <p className={styles.headers}>These are just some examples of places to see. There are many more to explore!</p>
      <Button
        style={
          darkmode
            ? { background: '#19376d', border: '1px solid #060047' }
            : { background: '#E64089', border: '1px solid #051c32' }
        }
        name="landingPageFindPlaces"
        value="Get Started"
        handler={() => router.push('/home')}
      />
      </div>
    </>
  )
}

export default LandingPageAddtionalContent
