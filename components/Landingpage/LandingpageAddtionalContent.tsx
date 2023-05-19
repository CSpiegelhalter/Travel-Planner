import styles from '../../styles/componentStyles/LandingpageAdditionalContent.module.css'
import WhatMakesUsDifferent from './WhatMakesUsDifferent'
import MemorableTrips from './MemorableTrips'
import { RouterProps } from '@/Types/types';
import DiscoverAndExplore from './DiscoverAndExplore';


function LandingpageAddtionalContent({ router }: RouterProps) {
  return (
    <div className={styles.additionalContentContainer}>
      <DiscoverAndExplore />
      <WhatMakesUsDifferent />
      <MemorableTrips router={router} />

    </div>
  )
}

export default LandingpageAddtionalContent
