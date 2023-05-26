import React, { useState } from 'react'
import Card from './Card'
import styles from '@/styles/componentStyles/SideBar.module.css'
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
              <div className={styles.greyBG}></div>
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
              address={place?.formatted_address}
              ratingsCount={place?.user_ratings_total}
              lat={place?.geometry?.location.lat}
              lng={place?.geometry?.location.lng}
              attractionType={place?.types}
              setIsOpen={props.setIsOpen}
              setShowInfo={props.setShowInfo}
            />)) : null}
        </Tabs.Content>
        <Tabs.Content value="savedLocationsTab">
          <Card name="test" rating={69} address="42 wallaby way Sydney Aus" ratingsCount={420} setIsOpen={props.setIsOpen} setShowInfo={props.setShowInfo} lat={12.3123} lng={12.3123} attractionType={{}} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default SideBar
