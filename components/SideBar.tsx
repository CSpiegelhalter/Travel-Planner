import React, { useState } from 'react'
import Card from './Card'
import styles from '../styles/componentStyles/SideBar.module.css'
import * as Tabs from '@radix-ui/react-tabs';

function SideBar(props: any) {
 
  return (

    <div className={styles.infoSidebar}>
      <Tabs.Root defaultValue="tab1" orientation="vertical">
        <div className={styles.btnContainer}>
          <Tabs.List className={styles.tabLists} aria-label="All trips">
            <div className={styles.triggerContainer}>
              <Tabs.Trigger className={`${styles.tabLabel} ${styles.leftTab}`} value="newLoctaionsTab">New locations</Tabs.Trigger>
              <Tabs.Trigger className={styles.tabLabel} value="savedLocationsTab">Saved Locations</Tabs.Trigger>
            </div>
          </Tabs.List>
          <button className={styles.closeBtn} onClick={() => props.setShowInfo(false)}>
            Close
          </button>
        </div>
        <Tabs.Content value="newLoctaionsTab">
          {props.placesInfo ? props.placesInfo.map((place: any, index: number) => (
            <Card
              key={index}
              name={place?.name}
              rating={place?.rating}
              price={place?.price_level}
              address={place?.formatted_address}
              ratings_count={place?.user_ratings_total}
              lat={place.geometry?.location.lat}
              lng={place.geometry?.location.lng}
              attraction_type={place?.types}
              allowAddToProfile={true}
              setIsOpen={props.setIsOpen}
              setShowInfo={props.setShowInfo}
            />)) : null}
        </Tabs.Content>
        <Tabs.Content value="savedLocationsTab">
          <Card name="test" rating="5" price="" address="42 wallaby way Sydney Aus" ratings_count="420" allowAddToProfile={false} setIsOpen={props.setIsOpen} setShowInfo={props.setShowInfo} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default SideBar
